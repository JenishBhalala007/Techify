const User = require('../models/User');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = async (req, res) => {
    const { name, email, password, phone, address } = req.body;

    console.log('REGISTER REQUEST BODY:', JSON.stringify(req.body, null, 2));

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            ...(phone && { phone }),
            ...(address && { address })
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                address: user.address,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error("REGISTER ERROR:", error);
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        res.status(500).json({ message: error.message });
    }
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+password');

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('wishlist', 'title price images discountPercentage');

        if (user) {
            // Normalise wishlist items so the frontend receives consistent { _id, name, price, image } objects
            const wishlist = (user.wishlist || []).map(item => ({
                _id: item._id.toString(),
                name: item.title,
                price: item.price,
                image: item.images?.[0] || ''
            }));

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                phone: user.phone,
                address: user.address,
                cart: user.cart,
                wishlist
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.phone = req.body.phone || user.phone;
            user.address = req.body.address || user.address;

            if (req.body.password) {
                user.password = req.body.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                phone: updatedUser.phone,
                address: updatedUser.address,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add item or update quantity in user's cart
// @route   POST /api/users/cart
// @access  Private
const updateUserCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        const user = await User.findById(req.user._id);
        const product = await Product.findById(productId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if item already exists in cart
        const itemIndex = user.cart.findIndex(item => item.productId.toString() === productId);

        if (itemIndex > -1) {
            // If quantity is 0 or less, remove item from cart
            if (quantity <= 0) {
                user.cart.splice(itemIndex, 1);
            } else {
                // Otherwise, update quantity
                user.cart[itemIndex].quantity = quantity;
            }
        } else {
            // New item, add to cart if quantity > 0
            if (quantity > 0) {
                user.cart.push({ productId, quantity });
            }
        }

        const updatedUser = await user.save();
        
        // Populate product details in cart response
        await updatedUser.populate('cart.productId', 'title price images discountPercentage finalPrice');
        
        res.json(updatedUser.cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const toggleWishlist = async (req, res) => {
    const { productId } = req.body;

    if (!productId) {
        return res.status(400).json({ message: 'productId is required' });
    }

    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const wishlistIndex = user.wishlist.findIndex(id => id.toString() === productId.toString());

        if (wishlistIndex > -1) {
            user.wishlist.splice(wishlistIndex, 1);
        } else {
            user.wishlist.push(productId);
        }

        const updatedUser = await user.save();
        await updatedUser.populate('wishlist', 'title price images discountPercentage');

        // Return the same normalised format as getUserProfile so the frontend state stays in sync
        const wishlist = (updatedUser.wishlist || []).map(item => ({
            _id: item._id.toString(),
            name: item.title,
            price: item.price,
            image: item.images?.[0] || ''
        }));

        res.json(wishlist);
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    updateUserCart,
    getUsers,
    toggleWishlist
};
