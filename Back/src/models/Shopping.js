const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('shopping', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
      }, { timestamps: false })
};