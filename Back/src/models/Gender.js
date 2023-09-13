const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Gender', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            //type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
            unique: true,
        },
      }, { timestamps: false })
};