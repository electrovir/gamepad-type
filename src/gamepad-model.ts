/** Mapping from Gamepad ids or names to model strings. */
export type GamepadModelMap = Readonly<Record<string, string | PredefinedGamepadModel>>;
/** Mapping from Gamepad ids or names to brand strings. */
export type GamepadBrandMap = Readonly<Record<string, string | PredefinedGamepadBrand>>;

/** A new entry for each gamepad generation that features different button layouts. */
export enum PredefinedGamepadModel {
    SwitchPro = 'switch-pro',

    PlaystationDualShock = 'playstation-dual-shock',
    PlaystationDualShock4 = 'playstation-dual-shock-4',
    PlaystationDualSense = 'playstation-dual-sense',

    SteamDeck = 'steam-deck',

    Xbox360 = 'xbox-360',
    XboxWireless = 'xbox-wireless',

    Unknown = 'unknown',
}

/** Brands for all GamepadModel values. */
export enum PredefinedGamepadBrand {
    Microsoft = 'microsoft',
    Nintendo = 'nintendo',
    Sony = 'sony',
    Valve = 'valve',

    Unknown = 'unknown',
}

/** Description of each gamepad model. */
export const predefinedGamepadModelDescriptions: Readonly<Record<string, string>> = {
    [PredefinedGamepadModel.SwitchPro]:
        'Nintendo Switch Pro gamepad for the Nintendo Switch console.',
    [PredefinedGamepadModel.PlaystationDualSense]:
        'Sony PlayStation DualSense gamepad for the Sony PlayStation 5 console.',
    [PredefinedGamepadModel.PlaystationDualShock]:
        'Sony PlayStation DualShock gamepad for the Sony PlayStation 1 through Sony PlayStation 3 consoles.',
    [PredefinedGamepadModel.PlaystationDualShock4]:
        'Sony PlayStation DualShock 4 gamepad for the Sony PlayStation 4 console.',
    [PredefinedGamepadModel.SteamDeck]: 'Gamepad for the Valve Steam Deck handheld console.',
    [PredefinedGamepadModel.Xbox360]:
        'Microsoft Xbox 360 gamepad for the Microsoft Xbox 360 console. Can be wired or wireless.',
    [PredefinedGamepadModel.XboxWireless]:
        'Microsoft Xbox Wireless gamepad for Microsoft Xbox One through Xbox Series X/S consoles.',

    [PredefinedGamepadModel.Unknown]: 'Unknown gamepad type.',
};
