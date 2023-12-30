import {itCases} from '@augment-vir/browser-testing';
import {defaultGamepadLayouts} from './default-layouts';
import {findMatchingGamepadLayout} from './find-matches';

describe(findMatchingGamepadLayout.name, () => {
    itCases(findMatchingGamepadLayout, [
        {
            it: 'finds nothing from an unexpected device name',
            input: {
                gamepad: {deviceName: 'hi this is not real'},
            },
            expect: undefined,
        },
        {
            it: 'finds a default layout',
            input: {
                gamepad: {
                    deviceName: 'Pro Controller Extended Gamepad',
                },
                systemVersions: defaultGamepadLayouts[0]?.systemVersions[0]!,
            },
            expect: defaultGamepadLayouts[0],
        },
        {
            it: 'is case insensitive',
            input: {
                gamepad: {
                    deviceName: 'pro controller extended gamepad',
                },
                systemVersions: defaultGamepadLayouts[0]?.systemVersions[0]!,
            },
            expect: defaultGamepadLayouts[0],
        },
    ]);
});
