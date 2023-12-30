import {waitForAnimationFrame} from '@augment-vir/browser';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {
    DeviceHandlerEventTypeEnum,
    GamepadDevice,
    GamepadInputValue,
    InputDeviceHandler,
} from 'input-device-handler';
import {assertInstanceOf} from 'run-time-assertions';
import {ViraInput, noNativeFormStyles} from 'vira';
import {
    GamepadLayout,
    GamepadModelMap,
    findMatchingGamepadLayout,
    findMatchingGamepadModel,
} from '../../../index';
import {SelectedGamepadIndexChange} from '../../events/selected-gamepad-index-change.event';
import {kebabCaseToNameCase} from '../../util/casing';
import {VirGamepadInput} from '../gamepad/vir-gamepad-input.element';
import {VirModal} from './vir-modal.element';

export const VirEditMappingsModal = defineElement<{
    gamepadDevices: ReadonlyArray<Readonly<GamepadDevice>>;
    savedGamepadLayouts: ReadonlyArray<Readonly<GamepadLayout>>;
    selectedGamepadIndex: number;
    selectedGamepadInput: Readonly<GamepadInputValue> | undefined;
    savedGamepadModelMap: Readonly<GamepadModelMap>;
    inputDeviceHandler: Readonly<InputDeviceHandler>;
}>()({
    tagName: 'vir-edit-mappings-modal',
    events: {
        inputMapSave: defineElementEvent<Readonly<{inputName: string; mappedName: string}>>(),
        selectedGamepadInputChange: defineElementEvent<Readonly<GamepadInputValue> | undefined>(),
    },
    styles: css`
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 24px;
        }

        select {
            ${noNativeFormStyles};
            flex-grow: 1;
            cursor: pointer;
            padding: 2px 4px;
            font: inherit;
            margin: 2px 0;
        }

        .selected-gamepad {
            display: flex;
            flex-direction: column;
        }

        .current-input {
            display: flex;
            justify-content: center;
        }
    `,
    stateInitStatic: {
        cleanup: undefined as undefined | (() => void),
    },
    initCallback({state, updateState, inputs, host, dispatch, events}) {
        function focusInput() {
            setTimeout(async () => {
                await waitForAnimationFrame();
                const viraInput = host.shadowRoot.querySelector(ViraInput.tagName);

                if (viraInput) {
                    assertInstanceOf(viraInput, ViraInput);
                    viraInput.shadowRoot.querySelector('input')?.select();
                }
            }, 0);
        }
        focusInput();

        if (!state.cleanup) {
            const cleanup = inputs.inputDeviceHandler.listen(
                DeviceHandlerEventTypeEnum.CurrentInputsChanged,
                (event) => {
                    const selectedDevice = inputs.gamepadDevices[inputs.selectedGamepadIndex];
                    if (!selectedDevice) {
                        return;
                    }
                    const newInputs = event.detail.inputs.newInputs
                        .filter((newInput) => newInput.deviceKey === selectedDevice.deviceKey)
                        .sort((a, b) => Math.abs(b.inputValue) - Math.abs(a.inputValue));

                    if (!newInputs.length) {
                        return;
                    }

                    const firstNewInput = newInputs[0];

                    if (
                        firstNewInput &&
                        inputs.selectedGamepadInput?.inputName !== firstNewInput.inputName
                    ) {
                        focusInput();
                        dispatch(
                            new events.selectedGamepadInputChange(
                                firstNewInput as GamepadInputValue,
                            ),
                        );
                    }
                },
            );
            updateState({cleanup});
        }
    },
    cleanupCallback({state, updateState}) {
        state.cleanup?.();
        updateState({cleanup: undefined});
    },
    renderCallback({inputs, dispatch, events, host}) {
        const selectedDevice = inputs.gamepadDevices[inputs.selectedGamepadIndex];
        if (!selectedDevice) {
            return html`
                No selected gamepad.
            `;
        }
        const {gamepadBrand} = findMatchingGamepadModel({
            gamepad: selectedDevice?.deviceName,
            gamepadModelMap: inputs.savedGamepadModelMap,
        });

        if (
            inputs.selectedGamepadInput &&
            (selectedDevice.deviceKey !== inputs.selectedGamepadInput.deviceKey ||
                selectedDevice.deviceName !== inputs.selectedGamepadInput.deviceName)
        ) {
            dispatch(new events.selectedGamepadInputChange(undefined));
        }

        const gamepadTypeSelectTemplate = html`
            <select
                ${listen('change', (event) => {
                    const element = event.currentTarget;
                    assertInstanceOf(element, HTMLSelectElement);
                    const value = Number(element.value);
                    if (!isNaN(value)) {
                        dispatch(new SelectedGamepadIndexChange(value));
                    }
                })}
            >
                ${inputs.gamepadDevices.map((gamepadDevice, gamepadIndex) => {
                    const {gamepadModel} = findMatchingGamepadModel({
                        gamepad: gamepadDevice.deviceName,
                        gamepadModelMap: inputs.savedGamepadModelMap,
                    });

                    return html`
                        <option
                            ?selected=${inputs.selectedGamepadIndex === gamepadIndex}
                            value=${String(gamepadIndex)}
                        >
                            &nbsp;${gamepadIndex}: ${kebabCaseToNameCase(gamepadModel)}
                        </option>
                    `;
                })}
            </select>
        `;

        const currentInput = inputs.selectedGamepadInput
            ? selectedDevice.deviceDetails.inputsByName[inputs.selectedGamepadInput.inputName]
            : undefined;

        const currentInputTemplate = currentInput
            ? html`
                  <${VirGamepadInput.assign({
                      gamepadLayout: undefined,
                      gamepadInput: currentInput,
                      gamepadBrand: gamepadBrand,
                  })}></${VirGamepadInput}>
              `
            : html`
                  <p>Press an input on this gamepad to map it.</p>
              `;

        const matchingLayout = findMatchingGamepadLayout({
            gamepad: selectedDevice,
            layouts: inputs.savedGamepadLayouts,
            gamepadModelMap: inputs.savedGamepadModelMap,
        });

        const currentNameMapTemplate = currentInput
            ? html`
                  <${ViraInput.assign({
                      placeholder: 'Enter an input name',
                      value: matchingLayout?.inputMappings[currentInput.inputName] || '',
                      disableBrowserHelps: true,
                  })}
                      ${listen(ViraInput.events.valueChange, (event) => {
                          if (currentInput) {
                              dispatch(
                                  new events.inputMapSave({
                                      inputName: currentInput.inputName,
                                      mappedName: event.detail,
                                  }),
                              );
                          }
                      })}
                  ></${ViraInput}>
              `
            : '';

        return html`
            <${VirModal.assign({modalTitle: 'Edit Mappings'})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad:</span>
                        ${gamepadTypeSelectTemplate}
                    </div>
                    <div class="current-input">${currentInputTemplate}</div>
                    <div class="current-mapping">${currentNameMapTemplate}</div>
                </div>
            </${VirModal}>
        `;
    },
});
