const nodemailer = require("nodemailer");

// let mailTransporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 465,
//   secure: true, // use SSL
//   auth: {
//     user: `${process.env.EMAIL_USER}`,
//     pass: `${process.env.EMAIL_PASSWORD}`,
//   },
// });

// export default function handler(req, res) {
//   const clientName = req.body.clientName;
//   const deposit = req.body.deposit;
//   console.log("Testing");
//   let mailDetails = {
//     from: "grandbay.puntacana@zohomail.com",
//     to: `karnes.james@gmail.com`,
//     subject: "Adventure Fun Tours Deposit",
//     text: `${clientName} have a deposit of ${deposit}`,
//     html: `<h1>${clientName}</h1>
//         <p>${clientName} have a deposit of ${deposit}</p>`,
//   };

//   mailTransporter.sendMail(mailDetails, function (err, data) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Email sent successfully");
//     }
//   });

//   res.status(200);
// }
// uovd lblc eygh zlcg

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});
export default function handler(req, res) {
  const clientName = req.body.clientName;
  const deposit = req.body.deposit;
  console.log("Testing");
  let mailDetails = {
    from: "karnes.james@gmail.com",
    to: `karnes.james@gmail.com`,
    subject: "Adventure Fun Tours Deposit",
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
// const mailOptions = {
//   from: 'karnes.james@gmail.com',
//   to: 'karnes.james@gmail.com',
//   subject: 'Testing Gmail Nodemailer',
//   text: 'BLAH BLAH BLAH'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//  console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//     // do something useful
//   }
// });
