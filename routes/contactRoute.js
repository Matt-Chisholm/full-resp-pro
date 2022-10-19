const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
console.log(process.env);

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.json({ msg: "Please enter all fields" });
  }
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: "mathesonchisholm@hotmail.com",
    to: "mathesonchisholm@hotmail.com",
    subject: `Message from ${name} : ${email} via your website`,
    text: message,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      return res.json({
        msg: "Something wrong with the server. Please try again later.",
      });
    } else {
      console.log("Email sent successfully");
      return res.json({
        msg: "Message sent successfully. Thank you for contacting me.",
      });
    }
  });
});

module.exports = router;
