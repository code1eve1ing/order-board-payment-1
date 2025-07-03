const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Plans = sequelize.define('Plans', {
        id: {
            type: DataTypes.SMALLINT,
            primaryKey: true,
            autoIncrement: true, // maps to GENERATED ALWAYS AS IDENTITY
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        amount: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        validity: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        categories: {
            type: DataTypes.ARRAY(DataTypes.SMALLINT),
            allowNull: true,
        },
    }, {
        tableName: 'Plans',
        timestamps: false, // Disable if your table doesn't use createdAt/updatedAt
    });

    return Plans;
};
