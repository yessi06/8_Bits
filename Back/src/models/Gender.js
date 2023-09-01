const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('gender', {
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
      }, { timestamps: false })
};