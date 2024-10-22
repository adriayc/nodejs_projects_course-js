const nodemailer = require('nodemailer');
// Utils
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);

  // send mail with defined transport object
  return transporter.sendMail({
    from: '"Adriano Ayala" <admin@mail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
    // text: 'Hello world?', // plain text body
  });
};

module.exports = sendEmail;
