import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import nodemailer from "nodemailer";
import fs from "fs/promises";


// Initialize the app and load environment variables
const app = express();
dotenv.config();

//login form .env
const port = process.env.PORT || 3000;
const email = process.env.MY_EMAIL;
const appPass = process.env.APP_PASS;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

//Databse login
const db = mysql.createConnection({
    host: 'localhost',
    user: dbUser,
    password: dbPass, 
    database: 'mail'
});


// Set up middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Define the root route to render the index page
app.get('/', (req, res) => {  
    res.render('index');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
