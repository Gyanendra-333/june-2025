import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample test route
app.get('/', (req, res) => {
    res.send('APP is running...');
});

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {});
        console.log('MongoDB connected✅');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1); // Exit with failure
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB(); // connect to DB when server starts
    console.log(`Server running on ${PORT}`);
});
