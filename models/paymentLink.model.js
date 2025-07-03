const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const PaymentLinks = sequelize.define('PaymentLinks', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user: {
            type: DataTypes.INTEGER, // PostgreSQL only
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        validity: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        }
    }, {
        tableName: 'PaymentLinks',
        timestamps: false, // createdAt is manually handled here
    });

    return PaymentLinks;
};
