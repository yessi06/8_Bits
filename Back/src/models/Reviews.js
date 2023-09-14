const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Reviews', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        rating : {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        reviewsText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date :{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }, { timestamps: false })
};