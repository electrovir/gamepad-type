import {mapObjectValues} from '@augment-vir/common';
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
 *
 * @category Main
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

    if (byGamepadModel.length <= 1) {
        return byGamepadModel[0];
    }

    // filter by highest scoring system version match
    const byLayoutScore = byGamepadModel.reduce(
        (highestScoring, currentLayout) => {
            const score = scoreLayoutSystemVersions(systemVersions, currentLayout);

            if (score > highestScoring.score) {
                return {
                    score,
                    layout: currentLayout,
                };
            } else {
                return highestScoring;
            }
        },
        {
            layout: undefined as GamepadLayout | undefined,
            score: -1,
        },
    );

    return byLayoutScore.layout;
}

/** Gives a score to the layout based on how closely it matches the current system. */
function scoreLayoutSystemVersions(
    systemVersions: Readonly<SystemVersions>,
    layout: Readonly<GamepadLayout>,
) {
    const scores = layout.systemVersions.map((layoutSystemVersions) => {
        const matches = Object.values(
            mapObjectValues(systemVersions, (key, value) => {
                return layoutSystemVersions[key].toLowerCase() === value.toLowerCase();
            }),
        );

        return matches.reduce((sum, match) => {
            return sum + (match ? 1 : 0);
        }, 0);
    });

    return Math.max(...scores);
}

/**
 * Find matching gamepad model, brand, and description. Will return PredefinedGamepadModel.Unknown,
 * PredefinedGamepadBrand.Unknown, and an empty string respectively if the given gamepad name is not
 * known.
 *
 * @category Main
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
