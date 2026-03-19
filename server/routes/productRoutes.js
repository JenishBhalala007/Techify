const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    compareProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(getProducts)
    .post(protect, admin, createProduct);

router.post('/compare', compareProducts);

router.route('/:id')
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
