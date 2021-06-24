var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "******@gmail.com", //todo enter company email
    pass: "******", //todo enter password
  },
});

const sendMail = (email, subject, text, cb) => {

  var mailOptions = {
    from: "******@gmail.com", //todo enter your from email here
    to: email,
    subject: subject,
    text: text,
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, info);
    }
  });

}



module.exports = sendMail;