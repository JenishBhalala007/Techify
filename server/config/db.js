const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/techify';

    if (!process.env.MONGO_URI) {
        console.warn('MONGO_URI is not set. Falling back to local MongoDB at mongodb://127.0.0.1:27017/techify');
    }

    try {
        const conn = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        console.error('Set MONGO_URI in server/.env (example: mongodb://127.0.0.1:27017/techify or Atlas connection string).');
        process.exit(1);
    }
};

module.exports = connectDB;
