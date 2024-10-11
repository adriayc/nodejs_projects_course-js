const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
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

module.exports = sendEmail;
