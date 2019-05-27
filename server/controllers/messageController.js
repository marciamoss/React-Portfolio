const db = require("../models");
var nodemailer = require('nodemailer');
require('dotenv').config();
const sendEmailFrom = process.env.sendEmailFrom;
const emailPassword = process.env.emailPassword;
const receiveEmail = process.env.receiveEmail;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sendEmailFrom,
    pass: emailPassword
  }
});

module.exports = {
    create: function(req, res) {
      db.Message
        .create(req.body)
        .then(dbModel => {
          //send the message as an email     
          const message=`From: ${dbModel.name},\n Email: ${dbModel.email},\n Message: ${dbModel.message}`
          const mailOptions = {
            from: sendEmailFrom,
            to: receiveEmail,
            subject: 'Sending Email using Node.js',
            text: message
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    }
};