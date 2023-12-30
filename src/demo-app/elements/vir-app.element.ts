import {Writeable, copyThroughJson, pickObjectKeys} from '@augment-vir/common';
import {
    asyncProp,
    css,
    defineElementNoInputs,
    html,
    isRenderReady,
    listen,
    perInstance,
} from 'element-vir';
import {
    AllDevices,
    DeviceHandlerEventTypeEnum,
    GamepadDevice,
    GamepadInputValue,
    InputDeviceHandler,
    InputDeviceTypeEnum,
} from 'input-device-handler';
import {sendLog} from 'sentry-vir';
import {
    LoaderAnimated24Icon,
    ViraButton,
    ViraButtonStyleEnum,
    ViraIcon,
    noNativeSpacing,
} from 'vira';
import {
    GamepadLayout,
    GamepadModelMap,
    createEmptyGamepadLayout,
    findMatchingGamepadLayout,
    getSystemVersions,
    includesSystemVersion,
} from '../../index';
import {ModalClose} from '../events/modal-close.event';
import {SelectedGamepadIndexChange} from '../events/selected-gamepad-index-change.event';
import {GamepadOverrides} from '../overrides';
import {setupSentry} from '../sentry-setup';
import {extractNewChanges} from '../util/check-changes';
import {mockGamepads} from '../util/gamepad.mock';
import {
    loadSavedLayouts,
    loadSavedModelMap,
    loadSubmittedChanges,
    resetAllSavedData,
    saveLayouts,
    saveModelMap,
    savedSubmittedChanges,
} from '../util/local-save-data';
import {userAgent} from '../util/user-agent';
import {addWindowListener} from '../util/window-listener';
import {VirGamepadInputs} from './gamepad/vir-gamepad-inputs.element';
import {VirGamepadName} from './gamepad/vir-gamepad-name.element';
import {VirGamepad} from './gamepad/vir-gamepad.element';
import {VirCreateNewTypeModal} from './modals/vir-create-new-type.modal.element';
import {VirEditMappingsModal} from './modals/vir-edit-mappings.modal.element';

setupSentry();

enum EditMode {
    None = 'none',
    Mappings = 'mappings',
    CreateType = 'create-type',
}

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            font-family: sans-serif;
        }

        main {
            box-sizing: border-box;
            width: 100%;
            min-height: 100%;
            display: flex;
            flex-direction: column;
            padding: 24px;
            gap: 24px;
        }

        p {
            margin: 0;
        }

        .description {
            font-size: 0.5em;
            opacity: 0.3;
            transition: 100ms;
        }

        .description:hover {
            opacity: 1;
        }

        .modal-wrapper {
            position: absolute;
        }

        .gamepads-wrapper {
            display: flex;
            flex-direction: column;
            gap: 64px;
        }

        ${ViraIcon} {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
            transform: scale(2);
        }

        header {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        header .column {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        h1 {
            ${noNativeSpacing};
        }

        header .row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        .reset-button {
            ${ViraButton.cssVars['vira-button-primary-color'].name}: red;
            ${ViraButton.cssVars['vira-button-primary-hover-color'].name}: red;
            ${ViraButton.cssVars['vira-button-primary-active-color'].name}: red;
        }

        .submission-buttons {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        .submission-buttons .subtitle {
            opacity: 0.3;
            font-size: 0.5em;
            transition: 100ms;
        }

        .user-agent {
            opacity: 0.5;
            font-size: 0.7em;
            transition: 100ms;
        }

        .user-agent:hover,
        .submission-buttons .subtitle:hover {
            opacity: 1;
        }
    `,
    stateInitStatic: {
        deviceHandler: perInstance(
            () =>
                new InputDeviceHandler({
                    startLoopImmediately: false,
                    disableMouseMovement: true,
                    globalDeadZone: 0.1,
                }),
        ),
        gamepadDevices: [] as ReadonlyArray<Readonly<GamepadDevice>>,
        newInputs: {timestamp: 0, devices: [] as ReadonlyArray<string>},
        useMocks: false,
        gamepadIndexForEditing: 0,
        inputForEditing: undefined as Readonly<GamepadInputValue> | undefined,
        savedGamepadLayouts: asyncProp({
            defaultValue: loadSavedLayouts().then((result) => {
                console.info(JSON.stringify(result));
                return result;
            }),
        }),
        submittedChanges: asyncProp({
            defaultValue: loadSubmittedChanges(),
        }),
        savedGamepadModelMap: asyncProp({
            defaultValue: loadSavedModelMap().then((result) => {
                console.info(JSON.stringify(result));
                return result;
            }),
        }),
        overrides: {
            gamepadLayouts: [],
            gamepadTypes: {},
        } as undefined | GamepadOverrides,
        editMode: EditMode.None,
        cleanup: undefined as (() => void) | undefined,
    },
    initCallback({state, updateState}) {
        const cleanupCallbacks = [
            state.deviceHandler.listen(DeviceHandlerEventTypeEnum.CurrentInputsChanged, () => {
                const allDevices: AllDevices = state.deviceHandler.getLastPollResults();
                updateState({
                    gamepadDevices: Object.values(allDevices).filter(
                        (device): device is GamepadDevice =>
                            device.deviceType === InputDeviceTypeEnum.Gamepad,
                    ),
                });
            }),
            state.deviceHandler.listen(DeviceHandlerEventTypeEnum.CurrentInputsChanged, (event) => {
                const now = Date.now();
                const devicesWithNewInputs = event.detail.inputs.newInputs.reduce(
                    (accum, newInput) => {
                        accum.add(String(newInput.deviceKey));
                        return accum;
                    },
                    new Set<string>(),
                );
                if (devicesWithNewInputs.size) {
                    updateState({
                        newInputs: {
                            timestamp: now,
                            devices: Array.from(devicesWithNewInputs),
                        },
                    });
                }
            }),
            addWindowListener('keydown', (event) => {
                if (event.code.toLowerCase() === 'escape' && state.editMode !== EditMode.None) {
                    updateState({
                        editMode: EditMode.None,
                    });
                }
            }),
        ];
        updateState({
            cleanup() {
                cleanupCallbacks.forEach((cleanupCallback) => cleanupCallback());
            },
        });
        state.deviceHandler.startPollingLoop();
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    renderCallback({state, updateState}) {
        const savedLayouts = state.savedGamepadLayouts.value;
        const savedModelMap = state.savedGamepadModelMap.value;
        const submittedChanges = state.submittedChanges.value;
        if (
            !isRenderReady(savedLayouts) ||
            !isRenderReady(savedModelMap) ||
            !isRenderReady(submittedChanges)
        ) {
            return html`
                <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
            `;
        }
        const notSubmittedChanges = extractNewChanges(
            {layouts: savedLayouts, models: savedModelMap},
            submittedChanges,
        );
        const changes = extractNewChanges(
            {layouts: savedLayouts, models: savedModelMap},
            undefined,
        );
        const hasAnyChanges = changes.layouts.length || Object.values(changes.models).length;
        const hasNotSubmitted =
            notSubmittedChanges.layouts.length || Object.values(notSubmittedChanges.models).length;

        const gamepadDevices: ReadonlyArray<Readonly<GamepadDevice>> = [
            ...state.gamepadDevices,
            ...(state.useMocks ? mockGamepads : []),
        ];
        const gamepadTemplates = gamepadDevices.map((gamepad, gamepadIndex) => {
            if (gamepad.deviceType === InputDeviceTypeEnum.Gamepad) {
                const gamepadLayout = findMatchingGamepadLayout({
                    gamepad,
                    layouts: savedLayouts,
                    gamepadModelMap: savedModelMap,
                });
                return html`
                    <${VirGamepad.assign({
                        gamepad,
                        gamepadIndex,
                        gamepadLayout,
                        gamepadModelMap: savedModelMap,
                    })}
                        ${listen(VirGamepadName.events.editMappingsClick, () => {
                            updateState({
                                gamepadIndexForEditing: gamepadIndex,
                                editMode: EditMode.Mappings,
                            });
                        })}
                        ${listen(VirGamepadName.events.gamepadModelOverride, async (event) => {
                            const newModelMap = {
                                ...savedModelMap,
                                [gamepad.deviceName.toLowerCase()]: event.detail,
                            } as GamepadModelMap;
                            state.savedGamepadModelMap.setResolvedValue(newModelMap);

                            await saveModelMap(newModelMap);
                        })}
                        ${listen(VirGamepadInputs.events.gamepadInputClick, (event) => {
                            updateState({
                                editMode: EditMode.Mappings,
                                gamepadIndexForEditing: gamepadIndex,
                                inputForEditing: event.detail,
                            });
                        })}
                        ${listen(VirGamepadName.events.createNewModel, () => {
                            updateState({
                                editMode: EditMode.CreateType,
                                gamepadIndexForEditing: gamepadIndex,
                            });
                        })}
                    ></${VirGamepad}>
                `;
            } else {
                return '';
            }
        });

        const currentModalTemplate =
            state.editMode === EditMode.CreateType
                ? html`
                      <${VirCreateNewTypeModal.assign({
                          gamepadDevices,
                          selectedGamepadIndex: state.gamepadIndexForEditing,
                      })}
                          ${listen(VirCreateNewTypeModal.events.newModelCreate, async (event) => {
                              const selectedGamepad =
                                  state.gamepadDevices[state.gamepadIndexForEditing];

                              if (!selectedGamepad) {
                                  throw new Error(
                                      'Cannot update layouts, failed to find selected device',
                                  );
                              }

                              const newModelMap = {
                                  ...savedModelMap,
                                  [selectedGamepad.deviceName.toLowerCase()]: event.detail,
                              } as GamepadModelMap;

                              console.info(JSON.stringify(newModelMap));
                              state.savedGamepadModelMap.setResolvedValue(newModelMap);
                              await saveModelMap(newModelMap);
                          })}
                      ></${VirCreateNewTypeModal}>
                  `
                : state.editMode === EditMode.Mappings
                  ? html`
                        <${VirEditMappingsModal.assign({
                            savedGamepadLayouts: savedLayouts,
                            gamepadDevices,
                            selectedGamepadIndex: state.gamepadIndexForEditing,
                            savedGamepadModelMap: savedModelMap,
                            selectedGamepadInput: state.inputForEditing,
                            inputDeviceHandler: state.deviceHandler,
                        })}
                            ${listen(
                                VirEditMappingsModal.events.selectedGamepadInputChange,
                                (event) => {
                                    updateState({inputForEditing: event.detail});
                                },
                            )}
                            ${listen(VirEditMappingsModal.events.inputMapSave, async (event) => {
                                if (savedLayouts instanceof Error) {
                                    throw new Error(
                                        'Cannot save mapping, failed to load current mappings.',
                                    );
                                }

                                const selectedGamepad =
                                    state.gamepadDevices[state.gamepadIndexForEditing];

                                if (!selectedGamepad) {
                                    throw new Error(
                                        'Cannot update layouts, failed to find selected device',
                                    );
                                }

                                const matchingLayout = findMatchingGamepadLayout({
                                    gamepad: selectedGamepad,
                                    layouts: savedLayouts,
                                    gamepadModelMap: savedModelMap,
                                });
                                const systemVersions = getSystemVersions();
                                const areSystemsEqual = matchingLayout
                                    ? includesSystemVersion(
                                          matchingLayout.systemVersions,
                                          systemVersions,
                                      )
                                    : true;

                                const emptyLayout = createEmptyGamepadLayout(selectedGamepad);

                                const layoutToEdit: GamepadLayout = areSystemsEqual
                                    ? matchingLayout ?? emptyLayout
                                    : matchingLayout
                                      ? {
                                            ...copyThroughJson(matchingLayout),
                                            systemVersions: emptyLayout.systemVersions,
                                        }
                                      : emptyLayout;

                                layoutToEdit.inputMappings[event.detail.inputName] =
                                    event.detail.mappedName;
                                if (!matchingLayout || !areSystemsEqual) {
                                    (savedLayouts as Writeable<typeof savedLayouts>).push(
                                        layoutToEdit,
                                    );
                                }
                                console.info(JSON.stringify(savedLayouts));
                                state.savedGamepadLayouts.setResolvedValue(
                                    copyThroughJson(savedLayouts),
                                );
                                await saveLayouts(savedLayouts);
                            })}
                        ></${VirEditMappingsModal}>
                    `
                  : '';

        return html`
            <main
                ${listen(ModalClose, () => {
                    updateState({
                        editMode: EditMode.None,
                    });
                })}
                ${listen(SelectedGamepadIndexChange, (event) => {
                    updateState({gamepadIndexForEditing: event.detail});
                })}
            >
                <div class="modal-wrapper">${currentModalTemplate}</div>
                <header>
                    <div class="column">
                        <h1>Gamepad Type</h1>
                        <p>Map gamepad ids to gamepad models, brands, and input names.</p>
                        <ul>
                            <li>
                                <a href="https://electrovir.github.io/gamepad-type/docs">
                                    Full API docs
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/electrovir/gamepad-type">
                                    Repository in GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.npmjs.com/package/gamepad-type">
                                    Package on npm
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="row">
                        <p
                            class="user-agent"
                            title="These versions determine gamepad input mappings."
                        >
                            Current system versions (used for correct mapping):
                            <br />
                            ${userAgent.osName} ${userAgent.osVersion}
                            <br />
                            ${userAgent.browserName} ${userAgent.browserVersion}
                        </p>
                        <div class="submission-buttons">
                            <div class="column">
                                <${ViraButton.assign({
                                    text: 'Submit Changes',
                                    disabled: !hasNotSubmitted,
                                })}
                                    ${listen('click', async () => {
                                        await savedSubmittedChanges(notSubmittedChanges);
                                        state.submittedChanges.setResolvedValue(
                                            notSubmittedChanges,
                                        );
                                        sendLog.info('New mapping override received', {
                                            changes: notSubmittedChanges,
                                            systemVersions: getSystemVersions(),
                                            connectedDevices: state.gamepadDevices.map(
                                                (gamepadDevice) => {
                                                    return pickObjectKeys(gamepadDevice, [
                                                        'deviceKey',
                                                        'deviceName',
                                                        'deviceType',
                                                    ]);
                                                },
                                            ),
                                        });
                                    })}
                                ></${ViraButton}>
                                <p class="subtitle">
                                    Submit your changes. IP address is not stored.
                                </p>
                            </div>
                            <${ViraButton.assign({
                                text: 'Reset Changes',
                                disabled: !hasAnyChanges,
                                buttonStyle: ViraButtonStyleEnum.Outline,
                            })}
                                ${listen('click', async () => {
                                    await resetAllSavedData();
                                    state.savedGamepadLayouts.setNewPromise(loadSavedLayouts());
                                    state.savedGamepadModelMap.setNewPromise(loadSavedModelMap());
                                })}
                                class="reset-button"
                            ></${ViraButton}>
                        </div>
                    </div>
                </header>
                <div class="gamepads-wrapper">
                    ${gamepadTemplates.length
                        ? gamepadTemplates
                        : html`
                              Connect a gamepad and press a button on it.
                          `}
                </div>
            </main>
        `;
    },
});
