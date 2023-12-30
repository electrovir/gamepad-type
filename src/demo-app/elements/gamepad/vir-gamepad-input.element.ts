import {css, defineElement, html} from 'element-vir';
import {GamepadInputDetails, GamepadInputType} from 'input-device-handler';
import {GamepadLayout} from '../../../gamepad-layout';
import {VirGamepadAxe} from './vir-gamepad-axe.element';
import {VirGamepadButton} from './vir-gamepad-button.element';

export const VirGamepadInput = defineElement<{
    gamepadInput: Readonly<GamepadInputDetails>;
    gamepadBrand: string;
    gamepadLayout: Readonly<GamepadLayout> | undefined;
}>()({
    tagName: 'vir-gamepad-input',
    hostClasses: {
        'vir-gamepad-input-circle': ({inputs}) =>
            inputs.gamepadInput.inputType === GamepadInputType.Button,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
        }

        ${hostClasses['vir-gamepad-input-circle'].selector} {
            border-radius: 50%;
        }
    `,
    renderCallback({inputs}) {
        if (inputs.gamepadInput.inputType === GamepadInputType.Axe) {
            return html`
                <${VirGamepadAxe.assign(inputs)}></${VirGamepadAxe}>
            `;
        } else if (inputs.gamepadInput.inputType === GamepadInputType.Button) {
            return html`
                <${VirGamepadButton.assign(inputs)}></${VirGamepadButton}>
            `;
        } else {
            return `Invalid gamepad type received: ${inputs.gamepadInput.inputType}`;
        }
    },
});
