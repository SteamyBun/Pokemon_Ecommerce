const Cart = require('../Models/Cart');
const {
  verifyToken,
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
} = require('./verifyToken');

const router = require('express').Router();

//Create Cart
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const newCart = await newCart.save();
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Cart
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Cart

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json('Cart has been deleted');
  } catch {
    res.status(500).json(err);
  }
});

//Get User Cart
router.get('/find/:userId', verifyTokenAndAuthorize, async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch {
    res.status(500).json(err);
  }
});

//Get all Products
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
