const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a product title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    category: {
        type: String,
        required: [true, 'Please specify a category']
    },
    brand: {
        type: String,
        required: [true, 'Please specify a brand']
    },
    images: {
        type: [String],
        default: []
    },
    price: {
        type: Number,
        required: [true, 'Please specify a price'],
        min: 0
    },
    discountPercentage: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    stockQuantity: {
        type: Number,
        required: [true, 'Please specify stock quantity'],
        min: 0,
        default: 0
    },
    maxStockQuantity: {
        type: Number,
        default: 0
    },
    features: {
        type: Map,
        of: String,
        default: {}
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Create virtual field `finalPrice` calculating price after discount
productSchema.virtual('finalPrice').get(function () {
    if (this.discountPercentage > 0) {
        return this.price - (this.price * (this.discountPercentage / 100));
    }
    return this.price;
});

module.exports = mongoose.model('Product', productSchema);
