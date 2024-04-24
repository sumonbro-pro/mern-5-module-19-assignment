import express from 'express';
const app = express();
import cors from 'cors';
import helmet from "helmet";
import hpp from "hpp";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import dotenv from "dotenv";
dotenv.config({path: './config.env'});
import mongoose from "mongoose";
import router from "./src/routes/API.js";
import path from "path";

// SECURITY PARAMETER STARTS HERE
app.use(bodyParser.json());
// app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(hpp());
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 20 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false
});
app.use(limiter);
// SECURITY PARAMETER ENDS HERE

// DATABASE CONNECTION STARTS HERE
const uri = process.env.DB_URI;
try {
    mongoose.connect(uri);
    console.log('MongoDB Connected');
} catch (err) {
    console.error(err);
}
// DATABASE CONNECTION ENDS HERE

//API ROUTES STARTS HERE
app.use('/api/v1', router);
//API ROUTES ENDS HERE

//FRONT-END STARTS HERE
app.use(express.static('client/dist'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'dist', 'index.html'));
})
//FRONT-END ENDS HERE

//UNDEFINED API ENDPOINTS STARTS HERE
app.use('*', (req, res) => {
    res.status(404).json({status: 'Not Found'});
})
//UNDEFINED API ENDPOINTS ENDS HERE
export default app;


