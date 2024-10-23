const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailEthereal = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: 'rubye.schmidt@ethereal.email',
      pass: 'x89dq3sPwXy6JWuMdS',
    },
  });

  // Send email with defined transport object
  const info = await transporter.sendMail({
    from: '"Adriano Ayala" <adriano.ayala@gmail.com>', // Sender address
    to: 'adriano@example.com', // List or receives
    // to: 'adriano@example.com, adriano2@example.com', // List or receives
    subject: 'Hello', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'adriayc.txxx@gmail.com', // Change to your recipient
    from: 'adriayc.dxx@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  try {
    const info = await sgMail.send(msg);
    res.json(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
