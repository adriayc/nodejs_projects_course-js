const nodemailer = require('nodemailer');

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: 'wilfrid.conn@ethereal.email',
      pass: 'fbymqkSqPCvx1gGY3h',
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Adriano Ayala" <admin@mail.com>', // sender address
    // to: 'user1@example.com, user2@example.com', // list of receivers
    to: 'user@mail.com', // list of receivers
    subject: 'Testing Email ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Testing Email?</b>', // html body
  });
};

module.exports = sendEmail;
