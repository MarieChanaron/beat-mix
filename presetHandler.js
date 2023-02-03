// Use this presets array inside your presetHandler
const presets = require('./presets');


const getPreset = (index) => {
    return presets[index] || null;
};

const createOrUpdatePreset = (index, array) => {
    if (!presets[index]) {
      return;
    }
    presets[index] = array;
    return presets[index];
};


// Complete this function:
// This function will be called from within your server to get an existing preset or create/update a preset.
const presetHandler = (method, index, newPresetArray) => {

    if (method === 'GET') {
        let preset = getPreset(index);
        if (preset) {
            return [200, preset];
        } else {
            return [404];
        }
    }

    else if (method === 'PUT') {
        const newPreset = createOrUpdatePreset(index, newPresetArray);
        if (newPreset) {
            return [200, newPreset];
        } else {
            return [404];
        }
    }

    else {
        return [400];
    }

};


// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;