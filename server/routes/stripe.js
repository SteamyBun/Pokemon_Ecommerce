require('dotenv').config({ path: './.env' });
const router = require('express').Router();
const KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(KEY);

router.post('/payment', (req, res) => {
  console.log(KEY);
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
