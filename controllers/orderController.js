const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { products, totalAmount, shippingAddress, paymentMethod } = req.body;
  try {
    const order = new Order({
      user: req.user.id,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });
    await order.save();
    res.redirect('/orders');
  } catch (error) {
    res.status(500).send('Server error');
  }
};
