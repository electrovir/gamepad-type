import {isEnumValue} from '@augment-vir/common';
import {PredefinedGamepadBrand} from '../gamepad-model';

const gamepadBrandColors: Readonly<Record<PredefinedGamepadBrand, string>> = {
    [PredefinedGamepadBrand.Microsoft]: '#aaff97',
    [PredefinedGamepadBrand.Nintendo]: '#ffaaaa',
    [PredefinedGamepadBrand.Sony]: '#86e2ff',
    [PredefinedGamepadBrand.Unknown]: '#ffaaaa',
    [PredefinedGamepadBrand.Valve]: '#ffaaaa',
};

export function getGamepadBrandColor(gamepadBrand: string): string {
    return isEnumValue(gamepadBrand, PredefinedGamepadBrand)
        ? gamepadBrandColors[gamepadBrand]
        : gamepadBrandColors[PredefinedGamepadBrand.Unknown];
}
