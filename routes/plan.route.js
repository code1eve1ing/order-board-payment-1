const express = require("express");
const router = express.Router();
const controller = require("../controllers/plan.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, controller.getPlans);
router.get("/:userId", authMiddleware, controller.getUserPlan);

module.exports = router;
