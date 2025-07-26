import mongoose from "mongoose";


// Connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {});
        console.log('MongoDB connected ✅');
    } catch (error) {
        console.error('❌ MongoDB Connection Failed:', error.message);
        process.exit(1); // Exit with failure
    }
};