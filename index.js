import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import nodemailer from "nodemailer";
import fs from "fs/promises";



// Initialize the app and load environment variables
const app = express();
dotenv.config();

//login form .env
const port = process.env.PORT || 80;
//email
const myemail = process.env.MY_EMAIL;
const appPass = process.env.APP_PASS;
//my secound email
const myemail2 = process.env.MY_EMAIL2;
//MYSQL
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
  
    try {
      // Execute MySQL query
      db.query(sql, values, async (error, results, fields) => {
        if (error) {
          console.error('Error inserting data into MySQL:', error);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        console.log('Data inserted successfully');
  
        // Send mail
        try {
          await sendMail({ email, firstName, lastName, company, phone, message });
          res.redirect('/');
        } catch (mailError) {
          console.error('Error sending email:', mailError);
          res.status(500).send('Internal Server Error');
        }
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).send('Internal Server Error');
    }
  });

 
async function sendMail({ email, firstName, lastName, company, phone, message }) {
  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: myemail,
          pass: appPass
      }
  });

  // Mail to the user
  const userMailOptions = {
      from: myemail,
      to: email,
      subject: 'Thank you, I will answer as quickly as possible.',
      text: `This is the content of your mail:
      First name: ${firstName}
      Last name: ${lastName}
      Company: ${company}
      Phone Number: ${phone}
      Email: ${email}
      Message: ${message}`
  };

  // Mail to yourself
  const selfMailOptions = {
      from: myemail,
      to: myemail2,
      subject: 'New contact form submission',
      text: `You have received a new contact form submission:
      First name: ${firstName}
      Last name: ${lastName}
      Company: ${company}
      Phone Number: ${phone}
      Email: ${email}
      Message: ${message}`
  };

  // Send the emails
  const userMailInfo = await transporter.sendMail(userMailOptions);
  console.log("User email sent: " + userMailInfo.messageId);

  const selfMailInfo = await transporter.sendMail(selfMailOptions);
  console.log("Self email sent: " + selfMailInfo.messageId);
}
  


//send form and save in MYSQL
app.get('/', (req, res) => {  

    res.render('index');
});

//Unifront app
app.get('/unifrontapp', (req, res) => {  

  res.render('UnifrontApp');
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
