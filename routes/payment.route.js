const express = require("express");
const router = express.Router();
const controller = require("../controllers/payment.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/link", authMiddleware, controller.getPaymentLink);

module.exports = router;
