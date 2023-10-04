const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Background', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
       backgroundImage: {
        type: DataTypes.STRING,
        defaultValue: "https://res.cloudinary.com/bits8/image/upload/v1695749231/Background%20profile%20images/n0up3rozuwxnzooyzgcb.jpg",
        allowNull: false,
       }
      }, { timestamps: false })
};