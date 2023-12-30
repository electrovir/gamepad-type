import {makeObjectKeysLowercase} from './demo-app/util/object';
import {
    GamepadBrandMap,
    GamepadModelMap,
    PredefinedGamepadBrand,
    PredefinedGamepadModel,
} from './gamepad-model';

/** Predefined mapping of gamepad ids / names to GamepadModel. */
export const defaultGamepadModelMap: Readonly<GamepadModelMap> = makeObjectKeysLowercase({
    /** Safari detected OEM Switch Pro gamepad name. */
    'Pro Controller Extended Gamepad': PredefinedGamepadModel.SwitchPro,
    /** Safari detected OEM Switch Pro gamepad name. */
    'Xbox Wireless Controller Extended Gamepad': PredefinedGamepadModel.XboxWireless,
    /** Safari detected OEM DualSense gamepad name. */
    'DualSense Wireless Controller Extended Gamepad': PredefinedGamepadModel.PlaystationDualSense,
    /** Safari detected OEM DualSense gamepad name. */
    'Wireless Controller Extended Gamepad': PredefinedGamepadModel.PlaystationDualSense,

    /** Firefox detected OEM DualSense gamepad name. */
    '"54c-ce6-Wireless Controller': PredefinedGamepadModel.PlaystationDualSense,

    /** Chrome detected OEM Switch Pro gamepad name. */
    'Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)':
        PredefinedGamepadModel.SwitchPro,
    /** Chrome detected OEM DualSense gamepad name. */
    'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)':
        PredefinedGamepadModel.PlaystationDualSense,
});

/** PredefinedGamepadBrand for each PredefinedGamepadModel. */
export const defaultGamepadBrandMap: GamepadBrandMap = {
    [PredefinedGamepadModel.SwitchPro]: PredefinedGamepadBrand.Nintendo,
    [PredefinedGamepadModel.Xbox360]: PredefinedGamepadBrand.Microsoft,
    [PredefinedGamepadModel.XboxWireless]: PredefinedGamepadBrand.Microsoft,
    [PredefinedGamepadModel.PlaystationDualSense]: PredefinedGamepadBrand.Sony,
    [PredefinedGamepadModel.PlaystationDualShock]: PredefinedGamepadBrand.Sony,
    [PredefinedGamepadModel.PlaystationDualShock4]: PredefinedGamepadBrand.Sony,
    [PredefinedGamepadModel.SteamDeck]: PredefinedGamepadBrand.Valve,
    [PredefinedGamepadModel.Unknown]: PredefinedGamepadBrand.Unknown,
};
