import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { router } from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
const mongoUri = process.env.MONGO_URI;
const PORT = process.env.PORT;

//Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('uploads'));


// Use routes
app.use("/recipes", router);

// Make Database connection
await mongoose.connect(mongoUri);
console.log(mongoUri);


// listening for incoming requests
app.listen(PORT, ()=>{
    console.log(`Express app is running on ${PORT}`);
});