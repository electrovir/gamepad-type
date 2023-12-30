import {InputDeviceHandler} from 'input-device-handler';
import {findMatchingGamepadLayout} from '../index';

// using window.navigator directly
{
    const maybeLayout = findMatchingGamepadLayout({
        gamepad: window.navigator.getGamepads()[0]?.id,
    });

    maybeLayout?.inputMappings;
}

// using InputDeviceHandler
{
    const deviceHandler = new InputDeviceHandler();
    const allDevices = deviceHandler.readAllDevices();

    const maybeLayout = findMatchingGamepadLayout({
        gamepad: allDevices[0],
    });

    maybeLayout?.inputMappings;
}
