var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ashok.s@innomick.com",
    pass: "drugdanaa1603",
  },
});

const sendMail = (email, subject, text, cb) => {

  var mailOptions = {
    from: "ashok.s@innomick.com",
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