import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import { info } from "console";



// Initialize the app and load environment variables
const app = express();
dotenv.config();

//login form .env
const port = process.env.PORT || 3000;
const myemail = process.env.MY_EMAIL;
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
app.post('/submit-contact-form', (req, res) => {
    const { firstName, lastName, email, phone, company, message } = req.body;
    const sql = `INSERT INTO mail_informasjon (navn, etternavn, bedrift, email, telefonnummer, meling) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [firstName, lastName, email, phone, company, message];
  
    // Execute MySQL query
    db.query(sql, values, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into MySQL:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      console.log('Data inserted successfully');
      res.redirect('/');
    });
  });

  async function Mail(){
    const {email} = req.body;
    const transporter = nodeMailer.createTransport({
        host: 'google.com',
        port: 465,
        secure: true,
        auth: {
            user: myemail,
            pass: appPass
        }
    })
    const info = await transporter.sendMail({
        from: myemail,
        to: email,
        subject: `Thank you, I will answer as quickly as possible. 
        This is the content of your mail 
        First name: ${firstName}
        Last name: ${lastName}
        company: ${company}
        phone Number ${phone}
        message: ${message}
        `

    })
    console.log("Mesage sent: " + info.messageId);


  }
  


//send form and save in MYSQL
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
