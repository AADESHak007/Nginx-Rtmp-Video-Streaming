import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // 
import { Overlay } from './model/Overlay.model.js';

dotenv.config({
    path: './.env'
});

const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Connect to MongoDB

try {
    const connectonInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`successfully connceted to the DB : ${connectonInstance.connection.host}`);
     
 } catch (error) {
     console.log("ERROR occured while connecting to DB",error) ;
     process.exit(1) ;
 }

// Create an overlay
app.post('/overlay', async (req, res) => {
    try {
        const { height, width, top, left, bottom, right } = req.body;

        // Validate required fields
        if (height === undefined || width === undefined || top === undefined || 
            left === undefined || bottom === undefined || right === undefined) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create the overlay in the database
        const overlay = await Overlay.create({
            height,
            width,
            top,
            left,
            bottom,
            right
        });

        console.log('Overlay successfully created:', overlay);
        return res.status(201).json({ overlay }); // Use 201 for successful creation

    } catch (error) {
        console.error('Error creating overlay:', error);
        return res.status(500).json({ message: 'Error creating overlay', error: error.message });
    }
});


// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
