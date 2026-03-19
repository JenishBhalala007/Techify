const Product = require('../models/Product');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        // Implementation for simple filtering/searching (optional)
        const keyword = req.query.keyword
            ? {
                  title: {
                      $regex: req.query.keyword,
                      $options: 'i',
                  },
              }
            : {};
            
        const category = req.query.category ? { category: req.query.category } : {};

        const products = await Product.find({ ...keyword, ...category });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Compare multiple products
// @route   POST /api/products/compare
// @access  Public
const compareProducts = async (req, res) => {
    const { productIds } = req.body;

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).json({ message: 'Please provide an array of product IDs' });
    }

    try {
        const products = await Product.find({
            _id: { $in: productIds }
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
    try {
        const product = new Product({
            title: req.body.title || 'Sample name',
            price: req.body.price || 0,
            description: req.body.description || 'Sample description',
            images: req.body.images || [],
            brand: req.body.brand || 'Sample brand',
            category: req.body.category || 'Sample category',
            stockQuantity: req.body.stockQuantity || 0,
            maxStockQuantity: req.body.stockQuantity || 0,
            discountPercentage: req.body.discountPercentage || 0,
            features: req.body.features || {}
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            product.title = req.body.title || product.title;
            product.price = req.body.price || product.price;
            product.description = req.body.description || product.description;
            product.images = req.body.images || product.images;
            product.brand = req.body.brand || product.brand;
            product.category = req.body.category || product.category;
            
            if (req.body.stockQuantity !== undefined) {
                product.stockQuantity = req.body.stockQuantity;
                if (!product.maxStockQuantity || req.body.stockQuantity > product.maxStockQuantity) {
                    product.maxStockQuantity = req.body.stockQuantity;
                }
            }
            
            // Explicitly handle 0 for discount
            if (req.body.discountPercentage !== undefined) {
                product.discountPercentage = req.body.discountPercentage;
            }
            
            if (req.body.features) {
                product.features = req.body.features;
            }

            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await Product.deleteOne({ _id: product._id });
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    compareProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};
