import {GamepadLayout} from '../gamepad-layout';
import {PredefinedGamepadModel} from '../gamepad-model';

export type GamepadOverrides = Readonly<{
    gamepadTypes: Readonly<{[deviceName: string]: PredefinedGamepadModel}>;
    gamepadLayouts: ReadonlyArray<Readonly<GamepadLayout>>;
}>;
