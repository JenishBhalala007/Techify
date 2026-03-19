const express = require('express');
const router = express.Router();
const {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    updateUserCart,
    getUsers,
    toggleWishlist
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(protect, admin, getUsers);
router.post('/register', registerUser);
router.post('/login', authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/cart').post(protect, updateUserCart);
router.route('/wishlist').post(protect, toggleWishlist);

module.exports = router;
