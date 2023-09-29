const { DataTypes } = require('sequelize');


module.exports = (sequelize) =>{
    sequelize.define('UserPassword', {
        id:{
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false

        },
        userId: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          
        },
        email:{
            type:DataTypes.STRING,
            unique:true,
            allowNull: false
        },
        token:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        isUsed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false
        }

    })
}