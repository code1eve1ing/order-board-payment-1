
const { sequelize } = require("./models");
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const paymentRoutes = require("./routes/payment.route");
const planRoutes = require("./routes/plan.route");

// Initialize Express app
const app = express();

// Middlewares
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/plans", planRoutes);

module.exports = app;

const PORT = process.env.PORT || 5000;

(async () => {
    sequelize.sync().then((i) => {
        console.log('Connected to', i.config.database)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }).catch(err => {
        console.log('Failed to connect with database:', err)
    });
})();