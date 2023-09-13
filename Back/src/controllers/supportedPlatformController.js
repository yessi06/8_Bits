const { SupportedPlatform } = require('../db');

const postSupportedPlatform = async () => {
    const supportedPlatformList = await SupportedPlatform.findAll();
    return supportedPlatformList
}

module.exports = {
    postSupportedPlatform
}