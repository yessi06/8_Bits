const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorites', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
      }, { timestamps: false })
};