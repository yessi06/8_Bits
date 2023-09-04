const { Game } = require("../db.js");

const postGame = async (req, res) => {
    try {
        const { name, image, description, releaseDate, supportedPlatforms, genre, price, review, stock } = req.body;

        if (!name || !description || !releaseDate || !supportedPlatforms || !genre || !price || !review) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newGame = await Game.create({
            name,
            image,
            description,
            releaseDate,
            supportedPlatforms,
            genre,
            price,
            review,
            stock 
        });

        res.status(201).json(newGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    postGame
};
