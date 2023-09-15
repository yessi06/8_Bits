const validatePostGame = (req, res, next)=>{
    const { name, image, description, releaseDate, supportedPlatform, genre, price, review, stock } = req.body;
    if (!name || !image || !description || !releaseDate || !supportedPlatform || !genre || !price || !review || !stock) {
        return res.status(400).json({ error: "Missing required fields" });
    }
next();
};

const validateCreateUser = (req, res, next)=>{
    const { name, lastname, email, password } = req.body

    if(!name || !lastname || !email || !password) {
        return res.status(400).json({error: 'Missing data'})
    }

    next();
}

module.exports = {validatePostGame, validateCreateUser}