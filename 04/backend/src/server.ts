import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";


dotenv.config();
const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api");

app.get("/", (req: Request, res: Response) => {
    res.send("🚀 API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`✅ Server running on http://localhost:${PORT}`);
    });
});
