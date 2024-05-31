
# My Portfolio Website

This is the source code for my portfolio website, built with Node.js and Express. It includes features like email sending, environment variable management, and database interaction.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from the https://nodejs.org/en/download/prebuilt-installer.

### Installation


1. **Initialize the project**
   ```sh
   npm init -y
   ```
   Initializes a new Node.js project with default settings, creating a `package.json` file.

2. **Install dependencies**
   ```sh
   npm install
   ```
   Installs all dependencies listed in the `package.json` file.

3. **Edit `package.json`**

   Open the `package.json` file and add `"type": "module",` to enable ES module support.
   ```json
   {
     "name": "your-project-name",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "type": "module",
     ...
   }
   ```

4. **Install MySQL**
   ```sh
   npm install mysql
   ```
   Installs the MySQL package for interacting with MySQL databases.

5. **Install Nodemailer**
   ```sh
   npm install nodemailer
   ```
   Installs the Nodemailer package for sending emails.

6. **Install dotenv**
   ```sh
   npm install dotenv
   ```
   Installs the dotenv package for loading environment variables from a `.env` file.

7. **Install Express**
   ```sh
   npm install express
   ```
   Installs the Express framework for building web applications.

8. **Install Nodemon globally**
   ```sh
   npm install nodemon -g
   ```
   Installs Nodemon globally for automatically restarting the Node.js server when file changes are detected.

### Usage

1. **Set up environment variables**

   Create a `.env` file in the root directory and add your environment variables. For example:
   ```env
   MY_EMAIL=your@email.com
   APP_PASS=yourapppass

   DB_USER=yourUser
   DB_PASS=YourPassword
   ```

2. **Run the application**

   Use Nodemon to run the server:
   ```sh
   npx nodemon index.js
   ```

   Your server will start and automatically restart whenever you make changes to the files.

3. **Visit the website**

   Open your browser and go to `http://localhost:3000` to see your portfolio website in action.

### Features

- **Express Framework**: For building the web application.
- **MySQL**: For database interactions.
- **Nodemailer**: For sending emails.
- **dotenv**: For managing environment variables.
- **Nodemon**: For automatic server restarts during development.


