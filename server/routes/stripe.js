const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.post("/payments",(req,res) => {
    stripe.charges.c
}

module.exports = router;