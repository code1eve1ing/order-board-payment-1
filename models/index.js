const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db");
const pg = require('pg')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectModule: pg,
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Accept self-signed certs if needed
        },
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Plan = require("./plan.model")(sequelize, Sequelize);
db.PaymentLink = require("./paymentLink.model")(sequelize, Sequelize);
db.UserPlan = require("./userPlan.model")(sequelize, Sequelize);

module.exports = db;