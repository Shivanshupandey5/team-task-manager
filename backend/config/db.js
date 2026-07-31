const mongoose = require("mongoose");

const connectDB = async () => {
    if (!process.env.MONGO_URL) {
        console.log("⚠️  MONGO_URL not set - database connection skipped");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err.message);
    }
};

module.exports = connectDB;