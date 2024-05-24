--@block
CREATE DATABASE mail

--@block Use database mail
USE mail

--@block create Tables
CREATE Table mail_informasjon(
   id INT PRIMARY KEY AUTO_INCREMENT,
   navn VARCHAR(255),
   etternavn VARCHAR(255),
   bedrift VARCHAR(255),
   email VARCHAR(255) NOT NULL,
   telefonnummer VARCHAR(30),
   meling text
   );
   
--@block select test 

SELECT * FROM mail_informasjon
