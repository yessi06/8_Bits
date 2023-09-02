const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('game', { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        image: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        supportedPlatforms: { 
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        genre: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: { 
            type: DataTypes.DECIMAL, 
            allowNull: false,
        },
        review: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};
