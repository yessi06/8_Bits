const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Payment', { 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        idPayment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        idGame: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        amount: { 
            type: DataTypes.DECIMAL, 
            allowNull: false,
        },
        status: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        quentity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, { timestamps: false });
};
