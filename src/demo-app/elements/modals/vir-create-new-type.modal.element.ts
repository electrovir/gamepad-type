import {waitForAnimationFrame} from '@augment-vir/browser';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {GamepadDevice} from 'input-device-handler';
import {assertInstanceOf} from 'run-time-assertions';
import {ViraButton, ViraInput, noNativeFormStyles} from 'vira';
import {findMatchingGamepadModel} from '../../../find-matches';
import {ModalClose} from '../../events/modal-close.event';
import {SelectedGamepadIndexChange} from '../../events/selected-gamepad-index-change.event';
import {kebabCaseToNameCase} from '../../util/casing';
import {VirModal} from './vir-modal.element';

export const VirCreateNewTypeModal = defineElement<{
    gamepadDevices: ReadonlyArray<Readonly<GamepadDevice>>;
    selectedGamepadIndex: number;
}>()({
    tagName: 'vir-create-new-type-modal',
    events: {
        newModelCreate: defineElementEvent<string>(),
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

        .new-model-name {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        ${ViraInput} {
            width: 100%;
        }
    `,
    stateInitStatic: {
        newModelName: '',
    },
    initCallback({host}) {
        setTimeout(async () => {
            await waitForAnimationFrame();
            const viraInput = host.shadowRoot.querySelector(ViraInput.tagName);

            if (viraInput) {
                assertInstanceOf(viraInput, ViraInput);
                viraInput.shadowRoot.querySelector('input')?.select();
            }
        }, 0);
    },
    renderCallback({inputs, dispatch, state, updateState, events}) {
        const selectedDevice = inputs.gamepadDevices[inputs.selectedGamepadIndex];
        if (!selectedDevice) {
            return html`
                No selected gamepad.
            `;
        }

        const gamepadNameSelectTemplate = html`
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
                    return html`
                        <option
                            ?selected=${inputs.selectedGamepadIndex === gamepadIndex}
                            value=${String(gamepadIndex)}
                            title=${gamepadDevice.deviceName}
                        >
                            &nbsp;${gamepadIndex}: "${gamepadDevice.deviceName}"
                        </option>
                    `;
                })}
            </select>
        `;

        const {gamepadModel} = findMatchingGamepadModel({gamepad: selectedDevice});

        const currentModelTemplate = html`
            <p>Current model: ${kebabCaseToNameCase(gamepadModel)}</p>
        `;

        const currentNameMapTemplate = html`
            <${ViraInput.assign({
                placeholder: 'Enter a new model name',
                value: state.newModelName,
                disableBrowserHelps: true,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    updateState({newModelName: event.detail});
                })}
            ></${ViraInput}>
            <${ViraButton.assign({
                text: 'Save',
            })}
                ${listen('click', () => {
                    dispatch(new events.newModelCreate(state.newModelName));
                    dispatch(new ModalClose());
                })}
            ></${ViraButton}>
        `;

        return html`
            <${VirModal.assign({modalTitle: 'Enter New Model'})}>
                <div class="wrapper">
                    <div class="selected-gamepad">
                        <span>Selected Gamepad by Name:</span>
                        ${gamepadNameSelectTemplate}
                    </div>
                    <div class="current-model">${currentModelTemplate}</div>
                    <div class="new-model-name">${currentNameMapTemplate}</div>
                </div>
            </${VirModal}>
        `;
    },
});
