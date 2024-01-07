const {baseConfig} = require('virmator/base-configs/base-cspell.js');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        'configs/config-output-*',
    ],
    words: [
        ...baseConfig.words,
        'bowser',
        'gamepad',
        'gamepads',
        'revparse',
    ],
};
