const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});
export default function handler(req, res) {
  const clientName = req.body.clientName;
  const clientEmail = req.body.clientEmail;
  const deposit = req.body.deposit;
  console.log(req.body);
  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    to: clientEmail,
    subject: "Punta Cana Tour Store",
    text: `${clientName} have a deposit of ${deposit}`,
    html: `<h1>${clientName}</h1>
        <p>${clientName} have a deposit of ${deposit}</p>`,
  };

  transporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });

  res.status(200);
}
