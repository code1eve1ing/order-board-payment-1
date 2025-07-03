const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const UserPlan = sequelize.define('UsersPlan', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, // not actually pk 
            unique: true
        },
        planId: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
    }, {
        tableName: 'UsersPlan',
        timestamps: false, // Disable if your table doesn't use createdAt/updatedAt
    });

    return UserPlan;
};
