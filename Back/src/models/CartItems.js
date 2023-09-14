const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('CartItem', {
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