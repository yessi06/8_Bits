const { getGenderList } = require('../controllers/genderControllers');

const getGender = async (req, res) => {
    try{
        const genders = await getGenderList();
        res.status(201).json(genders);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { 
    getGender 
};