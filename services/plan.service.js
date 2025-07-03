const axios = require("axios");
const { Plan, UserPlan } = require("../models");

exports.getPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll({ raw: true });
        return res.status(200).json({ plans })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserPlan = async (req, res) => {
    try {
        const plan = await UserPlan.findOne({
            where: { userId: req.params.userId },
            raw: true
        })
        console.log('plan', plan, req.params.userId)
        return res.status(200).json({ planId: plan?.planId || 0 })
    } catch (err) {
        console.log('err', err.message)
        res.status(500).json({ error: err.message });
    }
};
