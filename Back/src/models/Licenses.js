const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('licenses', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
       }
      }, { timestamps: false })
};