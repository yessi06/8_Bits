const { DataTypes } = require('sequelize');

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
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
        },
        genre: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        review: {
            type: DataTypes.TEXT,
        },
        disable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
    }, { timestamps: false })
};