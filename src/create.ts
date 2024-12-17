import type {GamepadDevice} from 'input-device-handler';
import {findMatchingGamepadModel} from './find-matches.js';
import type {GamepadLayout} from './gamepad-layout.js';
import {getSystemVersions} from './system-versions.js';

/**
 * Creates an empty layout as a starting point for building a new one. Includes the correct system
 * versions already.
 *
 * @category Utils
 */
export function createEmptyGamepadLayout(
    gamepad: Readonly<Pick<GamepadDevice, 'deviceName'>>,
): GamepadLayout {
    const {gamepadModel} = findMatchingGamepadModel({gamepad: gamepad.deviceName});

    return {
        inputMappings: {},
        gamepadModels: [gamepadModel],
        systemVersions: [getSystemVersions()],
        notes: undefined,
    };
}
