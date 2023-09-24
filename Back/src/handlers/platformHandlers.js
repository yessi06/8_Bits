const { Game, SupportedPlatform, conn } = require('../db');

const platformStatistics = async (req, res) => {
    const sequelize = conn;

    try {
        // const data = await SupportedPlatform.findAll({
        //     atributes: [
        //         'name',
        //         [Sequelize.fn('count', Sequelize.col('Games.id')), 'count'],
        //     ],
        //     include: [
        //         {
        //             model: Game,
        //             attributes: [],
        //             through: {
        //                 attributes: [],
        //             },
        //         },
        //     ],
        //     group: ['SupportedPlatform.id', 'SupportedPlatform.name'],
        // });

        const query = `
        SELECT
            sp."name",
            COUNT(g.id) as "count"
        FROM "SupportedPlatforms" sp
        LEFT JOIN "game_supportedPlatform" gsp ON sp.id = gsp."SupportedPlatformId"
        LEFT JOIN "Games" g ON gsp."GameId" = g.id
        GROUP BY sp."name"
        HAVING COUNT(g.id) > 0;
    `;

    const data = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
    });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getPlatforms = async (req, res) => {
    try {
        const data = await SupportedPlatform.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { platformStatistics, getPlatforms };