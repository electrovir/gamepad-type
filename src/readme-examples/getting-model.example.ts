import {InputDeviceHandler} from 'input-device-handler';
import {findMatchingGamepadModel} from '../index';

// using window.navigator directly
{
    const {gamepadBrand, gamepadModel, gamepadModelDescription} = findMatchingGamepadModel({
        gamepad: window.navigator.getGamepads()[0]?.id,
    });
}

// using InputDeviceHandler
{
    const deviceHandler = new InputDeviceHandler();
    const allDevices = deviceHandler.readAllDevices();

    const {gamepadBrand, gamepadModel, gamepadModelDescription} = findMatchingGamepadModel({
        gamepad: allDevices[0],
    });
}
