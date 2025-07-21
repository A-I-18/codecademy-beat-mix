// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray) => {
    if (requestType !== 'GET' && requestType !== 'PUT') {
        return [400];
    }
    if (presets[presetsIndex] === undefined) {
        return [404];
    }

    let response = [200];

    if (requestType === 'GET') {
        response.push(presets[presetsIndex]);
    } else if (requestType === 'PUT') {
        presets[presetsIndex] = newPresetArray;
        response.push(newPresetArray);
    }

    return response;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
