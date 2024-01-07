import {GamepadLayout} from './gamepad-layout';
import {PredefinedGamepadModel} from './gamepad-model';

/** Gamepad layouts that have already been determined for most major OEM gamepad. */
export const defaultGamepadLayouts: ReadonlyArray<Readonly<GamepadLayout>> = [
    {
        gamepadModels: [PredefinedGamepadModel.SwitchPro],
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'A',
            'button-1': 'B',
            'button-2': 'X',
            'button-3': 'Y',
            'button-4': 'L',
            'button-5': 'R',
            'button-6': 'ZL',
            'button-7': 'ZR',
            'button-8': 'minus',
            'button-9': 'plus',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'home',
        },
        systemVersions: [
            {
                browserVersion: '17.2.1',
                browserName: 'Safari',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: {
            info: 'The capture / screenshot button is not detected by this browser.',
        },
    },
    {
        gamepadModels: [PredefinedGamepadModel.XboxWireless],
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'A',
            'button-1': 'B',
            'button-2': 'X',
            'button-3': 'Y',
            'button-4': 'LB',
            'button-5': 'RB',
            'button-6': 'LT',
            'button-7': 'RT',
            'button-8': 'view',
            'button-9': 'menu',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'guide',
        },
        systemVersions: [
            {
                browserVersion: '17.2.1',
                browserName: 'Safari',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: {
            info: 'The share button is not detected by this browser.',
        },
    },
    {
        gamepadModels: [PredefinedGamepadModel.SwitchPro],
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'B',
            'button-1': 'A',
            'button-2': 'Y',
            'button-3': 'X',
            'button-4': 'L',
            'button-5': 'R',
            'button-6': 'ZL',
            'button-7': 'ZR',
            'button-8': 'minus',
            'button-9': 'plus',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'home',
            'button-17': 'capture',
        },
        systemVersions: [
            {
                browserVersion: '117.0.0.0',
                browserName: 'Chrome',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: undefined,
    },
    {
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'X',
            'button-1': 'O',
            'button-2': 'square',
            'button-3': 'triangle',
            'button-4': 'L1',
            'button-5': 'R1',
            'button-6': 'L2',
            'button-7': 'R2',
            'button-8': 'create',
            'button-9': 'options',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'playstation',
            'button-17': 'touch-pad',
        },
        gamepadModels: [PredefinedGamepadModel.PlaystationDualSense],
        systemVersions: [
            {
                browserVersion: '117.0.0.0',
                browserName: 'Chrome',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: {
            info: 'Touch pad navigation and the mute button are not detected by this browser.',
        },
    },
    {
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'X',
            'button-1': 'O',
            'button-2': 'square',
            'button-3': 'triangle',
            'button-4': 'L1',
            'button-5': 'R1',
            'button-6': 'L2',
            'button-7': 'R2',
            'button-8': 'create',
            'button-9': 'options',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'playstation',
        },
        gamepadModels: [PredefinedGamepadModel.PlaystationDualSense],
        systemVersions: [
            {
                browserVersion: '17.2.1',
                browserName: 'Safari',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: {
            info: 'Touch pad navigation, the touch pad button, and the mute button are not detected by this browser.',
        },
    },
    {
        /**
         * Firefox has the following messed up mappings:
         *
         * - R2 and L2 are buttons (6,7) but also axes (4,5) (the buttons don't use gradual values,
         *   just 0 or 1 and then the value is mapped to the axes)
         * - The d-pad is mapped to a single axe with the following values
         *
         *   - 0 before the d-pad has been used
         *   - 1.3 at rest after the d-pad has been used
         *   - -1.0 for up
         *   - 0.1 for down
         *   - 0.7 for left
         *   - -0.4 for right
         */
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'axe-4': 'L2-axe',
            'axe-5': 'R2-axe',
            'axe-6': 'd-pad',
            'button-0': 'square',
            'button-1': 'X',
            'button-2': 'O',
            'button-3': 'triangle',
            'button-4': 'L1',
            'button-5': 'R1',
            'button-6': 'L2',
            'button-7': 'R2',
            'button-8': 'create',
            'button-9': 'options',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'playstation',
            'button-13': 'touch-pad',
            'button-14': 'mute',
            'button-15': 'd-pad-right',
            'button-16': 'playstation',
            'button-17': 'touch-pad',
        },
        gamepadModels: [PredefinedGamepadModel.PlaystationDualSense],
        systemVersions: [
            {
                browserVersion: '109.0',
                browserName: 'Firefox',
                osName: 'macOS',
                osVersion: '10.15',
            },
        ],
        notes: {
            warning: 'This browser has major issues reading this gamepad.',
        },
    },
    {
        /**
         * Firefox has the following messed up mappings:
         *
         * - A bunch of buttons aren't mapped to anything on my controller
         * - The triggers have no intermediate values at all
         * - The d-pad is mapped to a single axe with the following values
         *
         *   - 0 before the d-pad has been used
         *   - -1.3 at rest after the d-pad has been used
         *   - -1.0 for up
         *   - 0.1 for down
         *   - 0.7 for left
         *   - -0.4 for right
         */
        gamepadModels: [PredefinedGamepadModel.XboxWireless],
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'axe-4': 'd-pad',
            'button-0': 'A',
            'button-1': 'B',
            'button-2': 'unknown',
            'button-3': 'X',
            'button-4': 'Y',
            'button-5': 'unknown',
            'button-6': 'LB',
            'button-7': 'RB',
            'button-8': 'unknown',
            'button-9': 'unknown',
            'button-10': 'view',
            'button-11': 'menu',
            'button-12': 'guide',
            'button-13': 'L3',
            'button-14': 'R3',
            'button-15': 'LT',
            'button-16': 'RT',
        },
        systemVersions: [
            {
                browserVersion: '109.0',
                browserName: 'Firefox',
                osName: 'macOS',
                osVersion: '10.15',
            },
        ],
        notes: {
            warning: 'This browser has major issues reading this gamepad.',
        },
    },
    {
        gamepadModels: [PredefinedGamepadModel.XboxWireless],
        inputMappings: {
            'axe-0': 'left-stick-x',
            'axe-1': 'left-stick-y',
            'axe-2': 'right-stick-x',
            'axe-3': 'right-stick-y',
            'button-0': 'A',
            'button-1': 'B',
            'button-10': 'L3',
            'button-11': 'R3',
            'button-12': 'd-pad-up',
            'button-13': 'd-pad-down',
            'button-14': 'd-pad-left',
            'button-15': 'd-pad-right',
            'button-16': 'guide',
            'button-2': 'X',
            'button-3': 'Y',
            'button-4': 'LB',
            'button-5': 'RB',
            'button-6': 'LT',
            'button-7': 'RT',
            'button-8': 'view',
            'button-9': 'menu',
            'button-17': 'share',
        },
        systemVersions: [
            {
                browserVersion: '117.0.0.0',
                browserName: 'Chrome',
                osName: 'macOS',
                osVersion: '10.15.7',
            },
        ],
        notes: undefined,
    },
];
