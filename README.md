# gamepad-type

Detects the following for a gamepad:

-   gamepad model
-   gamepad brand
-   gamepad input names

based on hardcoded, pre-collected data.

If your gamepad isn't mapping correctly, please enter updated information here: https://electrovir.github.io/gamepad-type. Every browser, operating system, and gamepad combination potentially produces different values so it's impossible for me to single-handedly account for them all.

It is encouraged that you use the package [`input-device-handler`](https://www.npmjs.com/package/input-device-handler) in conjunction with this one, but it is not required.

# links

-   [demo page](https://electrovir.github.io/gamepad-type) (allows submitting gamepad mapping fixes)
-   [full API docs](https://electrovir.github.io/gamepad-type/docs)
-   [GitHub repo](https://github.com/electrovir/gamepad-type) (please open issues for gamepad mapping updates)
-   [npm package](https://www.npmjs.com/package/gamepad-type)

# install

```sh
npm i gamepad-type
```

# usage

The primary functions that this package exports are the following:

-   `findMatchingGamepadModel`: given a gamepad name, determines the gamepad's model and brand. Also includes a model description string. Allows custom model and brand map inputs to handle edge cases that this package doesn't cover yet. (If you find those edge cases please either [open a ticket in the GitHub repo](https://github.com/electrovir/gamepad-type/issues/new) or submit your fixed data on [the demo page](https://electrovir.github.io/gamepad-type).)
-   `findMatchingGamepadLayout`: given a gamepad name, determines the gamepad's button and axe names (based on gamepad model and user operating system). Allows custom model and input map inputs to handle edge cases that this package doesn't cover yet. (If you find those edge cases please either [open a ticket in the GitHub repo](https://github.com/electrovir/gamepad-type/issues/new) or submit your fixed data on [the demo page](https://electrovir.github.io/gamepad-type).)

## examples

-   `findMatchingGamepadModel`

    <!-- example-link: src/readme-examples/getting-model.example.ts -->

    ```TypeScript
    import {InputDeviceHandler} from 'input-device-handler';
    import {findMatchingGamepadModel} from 'gamepad-type';

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
    ```

-   `findMatchingGamepadLayout`

    <!-- example-link: src/readme-examples/getting-layout.example.ts -->

    ```TypeScript
    import {InputDeviceHandler} from 'input-device-handler';
    import {findMatchingGamepadLayout} from 'gamepad-type';

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
    ```

## predefined mappings

You can access all predefined mappings and values with the following exported values:

-   `PredefinedGamepadModel`: an enum of known gamepad models.
-   `PredefinedGamepadBrand`: an enum of known gamepad brands.
-   `predefinedGamepadModelDescriptions`: a map of `PredefinedGamepadModel` to description strings.
-   `defaultGamepadModelMap`: a map of known gamepad ids / names to their known gamepad models.
-   `defaultGamepadBrandMap`: a map of known gamepad models to their known gamepad brands.
-   `defaultGamepadLayouts`: an array of all known gamepad layouts.
