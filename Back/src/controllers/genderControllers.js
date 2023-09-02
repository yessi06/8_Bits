const { Gender } = require('../db');

const getGenderList = async () => {
    const genderList = await Gender.findAll();
    return genderList
}

module.exports = {
    getGenderList
}