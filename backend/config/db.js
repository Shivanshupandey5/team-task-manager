const mongoose = require("mongoose");

const connectDB = async () => {
    if (!process.env.MONGO_URL) {
        console.warn("Warning: MONGO_URL is not set. Skipping MongoDB connection.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

module.exports = connectDB;