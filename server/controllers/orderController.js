const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

// @desc    Create new order from user's cart
// @route   POST /api/orders
// @access  Private
const createOrder = async (req, res) => {
    const { shippingAddress, paymentMethod, orderItems } = req.body;

    if (!orderItems || orderItems.length === 0) {
        return res.status(400).json({ message: 'No order items provided' });
    }

    if (!shippingAddress || !shippingAddress.street || !shippingAddress.city ||
        !shippingAddress.state || !shippingAddress.zipCode || !shippingAddress.country) {
        return res.status(400).json({ message: 'Complete shipping address is required' });
    }

    try {
        // Verify prices and stock from DB for security
        const verifiedItems = [];
        let totalPrice = 0;

        for (const item of orderItems) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ message: `Product not found: ${item.productId}` });
            }
            if (product.stockQuantity < item.quantity) {
                return res.status(400).json({ message: `Insufficient stock for product: ${product.title}` });
            }
            const priceAtPurchase = product.discountPercentage > 0
                ? +(product.price * (1 - product.discountPercentage / 100)).toFixed(2)
                : product.price;

            verifiedItems.push({
                productId: product._id,
                title: product.title,
                quantity: item.quantity,
                priceAtPurchase,
                image: product.images && product.images.length > 0 ? product.images[0] : ''
            });
            totalPrice += priceAtPurchase * item.quantity;
        }

        const order = new Order({
            userId: req.user._id,
            orderItems: verifiedItems,
            shippingAddress,
            paymentMethod: paymentMethod || 'COD',
            itemsPrice: totalPrice,
            totalPrice,
        });

        const createdOrder = await order.save();

        // Reduce stock quantity for each purchased product
        for (const item of verifiedItems) {
            await Product.findByIdAndUpdate(item.productId, {
                $inc: { stockQuantity: -item.quantity }
            });
        }

        // Empty the user's cart after successful order
        await User.findByIdAndUpdate(req.user._id, { cart: [] });

        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user._id }).populate('orderItems.productId', 'title images');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('userId', 'id name email');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getMyOrders,
    getOrders,
};
