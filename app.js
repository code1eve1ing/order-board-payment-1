const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
const paymentRoutes = require("./routes/payment.route");
const planRoutes = require("./routes/plan.route");

// Initialize Express app
const app = express();

// Connect to MongoDB

// Middlewares
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Add session middleware before routes
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/plans", planRoutes);

module.exports = app;
