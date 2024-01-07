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
    /** Safari detected OEM Xbox Wireless gamepad name. */
    'Xbox Wireless Controller Extended Gamepad': PredefinedGamepadModel.XboxWireless,
    /** Safari detected OEM DualSense gamepad name. */
    'DualSense Wireless Controller Extended Gamepad': PredefinedGamepadModel.PlaystationDualSense,
    /** Safari detected OEM DualSense gamepad name. (Yes, another one.) */
    'Wireless Controller Extended Gamepad': PredefinedGamepadModel.PlaystationDualSense,

    /** Firefox detected OEM DualSense gamepad name. */
    '54c-ce6-Wireless Controller': PredefinedGamepadModel.PlaystationDualSense,
    /** Firefox detected OEM Xbox Wireless gamepad name. */
    '45e-b13-Xbox Wireless Controller': PredefinedGamepadModel.XboxWireless,

    /** Chrome detected OEM Switch Pro gamepad name. */
    'Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)':
        PredefinedGamepadModel.SwitchPro,
    /** Chrome detected OEM DualSense gamepad name. */
    'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)':
        PredefinedGamepadModel.PlaystationDualSense,
    /** Chrome detected OEM Xbox Wireless gamepad name. */
    'Xbox Series X Controller (STANDARD GAMEPAD Vendor: 045e Product: 0b12)':
        PredefinedGamepadModel.XboxWireless,
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
