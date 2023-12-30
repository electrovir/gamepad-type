import type {GamepadDevice, InputDevice} from 'input-device-handler';
import {isRunTimeType} from 'run-time-assertions';
import {defaultGamepadLayouts} from './default-layouts';
import {defaultGamepadBrandMap, defaultGamepadModelMap} from './default-models';
import type {GamepadLayout} from './gamepad-layout';
import {
    GamepadBrandMap,
    GamepadModelMap,
    PredefinedGamepadBrand,
    PredefinedGamepadModel,
    predefinedGamepadModelDescriptions,
} from './gamepad-model';
import {SystemVersions, getSystemVersions} from './system-versions';

/**
 * Given a gamepad name, tries to find the best matching predefined or custom gamepad layout based
 * on system versions. Returns undefined if no possible matches are found.
 */
export function findMatchingGamepadLayout({
    gamepad,
    layouts = defaultGamepadLayouts,
    gamepadModelMap = defaultGamepadModelMap,
    systemVersions = getSystemVersions(),
}: {
    /** The gamepad to match for. */
    gamepad: Readonly<Pick<GamepadDevice, 'deviceName'>> | string | undefined;
    /** Provide custom layouts. Defaults to this package's predefined layouts. */
    layouts?: ReadonlyArray<Readonly<GamepadLayout>>;
    /** Provide custom gamepad model maps. Defaults to this package's predefined model map. */
    gamepadModelMap?: Readonly<GamepadModelMap>;
    /** Provide custom system versions. Defaults to the current system's system versions. */
    systemVersions?: Readonly<SystemVersions>;
}): GamepadLayout | undefined {
    const gamepadName: string =
        (isRunTimeType(gamepad, 'string') ? gamepad : gamepad?.deviceName) || '';

    const {gamepadModel} = findMatchingGamepadModel({
        gamepad: gamepadName,
        gamepadModelMap,
    });

    // filter by gamepad model
    const byGamepadModel = layouts.filter((layout) => {
        return layout.gamepadModels.includes(gamepadModel);
    });

    if (byGamepadModel.length < 2) {
        return byGamepadModel[0];
    }

    const byOsName = byGamepadModel.filter((layout) =>
        layout.systemVersions.some(
            (system) => systemVersions.osName.toLowerCase() === system.osName.toLowerCase(),
        ),
    );

    if (byOsName.length === 1) {
        return byOsName[0];
    } else if (!byOsName.length) {
        return byGamepadModel[0];
    }

    // todo if necessary: filter by os version

    const byBrowserName = byOsName.filter((layout) =>
        layout.systemVersions.some(
            (system) =>
                systemVersions.browserName.toLowerCase() === system.browserName.toLowerCase(),
        ),
    );

    if (byBrowserName.length === 1) {
        return byBrowserName[0];
    } else if (!byBrowserName.length) {
        return byOsName[0];
    }

    // todo if necessary: filter by browser version

    return byBrowserName[0];
}

/**
 * Find matching gamepad model, brand, and description. Will return PredefinedGamepadModel.Unknown,
 * PredefinedGamepadBrand.Unknown, and an empty string respectively if the given gamepad name is not
 * known.
 */
export function findMatchingGamepadModel({
    gamepad: gamepadNameOrDevice,
    gamepadModelMap = defaultGamepadModelMap,
    gamepadBrandMap = defaultGamepadBrandMap,
}: {
    /**
     * Either the gamepad's id / name or a gamepad object returned from the input-device-handler
     * package.
     */
    gamepad: string | Readonly<Pick<InputDevice, 'deviceName'>> | undefined;
    gamepadModelMap?: Readonly<GamepadModelMap> | undefined;
    gamepadBrandMap?: Readonly<GamepadBrandMap> | undefined;
}): {
    gamepadModel: string;
    gamepadBrand: string;
    gamepadModelDescription: string;
} {
    const gamepadName: string =
        (typeof gamepadNameOrDevice === 'string'
            ? gamepadNameOrDevice
            : gamepadNameOrDevice?.deviceName) || '';

    const gamepadModel: string =
        gamepadModelMap[gamepadName.toLowerCase()] || PredefinedGamepadModel.Unknown;

    return {
        gamepadModel,
        gamepadBrand: gamepadBrandMap[gamepadModel] || PredefinedGamepadBrand.Unknown,
        gamepadModelDescription: predefinedGamepadModelDescriptions[gamepadModel] || '',
    };
}
