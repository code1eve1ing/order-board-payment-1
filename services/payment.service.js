const axios = require("axios");
const { PaymentLink, Plan } = require("../models");
const { getUpi } = require("../utils/upi");

exports.getPaymentLink = async (req, res) => {
    try {
        const { id } = req.user;
        const { planId } = req.query;

        const response = await axios.post(process.env.AUTH_SERVICE_URL + "/auth/validate/user", { id });

        if (response.data.success === true) {

            const plan = await Plan.findByPk(planId)
            if (!plan) return res.status(400).json({ error: "Invalid plan" })
            const payment = await PaymentLink.create({
                user: id,
                amount: plan.amount,
                validity: plan.validity
            });
            const upi = getUpi(plan.amount, payment.id, id)
            return res.status(200).json({ link: upi }); // encrypt using something
        } else {
            return res.status(400).json({ link: null });
        }
    } catch (err) {
        console.log('err', err)
        res.status(500).json({ error: err.message });
    }
};
