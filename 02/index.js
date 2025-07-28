import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './utils/db.js';


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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB(); // connect to DB when server starts
    console.log(`Server Running on ${PORT}`);
});
