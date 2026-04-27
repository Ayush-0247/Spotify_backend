import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import ConnectToDB from "./config.js/ConnectToDB.js";
dotenv.config();

ConnectToDB().catch(err => {
    console.error('Failed to connect to DB:', err);
    process.exit(1);
});

const app = express();

app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});