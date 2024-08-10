const nodemailer = require("nodemailer");

import { Head } from "../components/Email/Head";
import { Css } from "../components/Email/Css";
import { HtmlHeader } from "../components/Email/HtmlHeader";
import { HtmlFooter } from "../components/Email/HtmlFooter";

import { Contact } from "../components/Email/Contact";
import { SocailMedia } from "../components/Email/SocialMedia";
import { InvoiceTour } from "../components/Email/InvoiceTour";
import { InvoiceBody } from "../components/Email/InvoiceBody";
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  tls: {
    ciphers: "SSLv3",
  },
  port: 587,
  secure: false,
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});

export default async function handler(req, res) {
  const clientName = req.body.formData.name;
  const clientEmail = req.body.formData.email;
  const pickupTime = req.body.formData.time;
  const pickupDate = req.body.formData.date;
  const guest = req.body.formData.guests;
  const tour = req.body.tour[0];

  const htmlString = `${Head}${Css}${HtmlHeader}${InvoiceBody(
    clientName,
  )}${InvoiceTour(
    tour,
    pickupTime,
    pickupDate,
    guest,
  )}${Contact}${SocailMedia}${HtmlFooter}`;
  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    replyTo: `reservations@puntacanatourstore.com`,
    to: clientEmail,
    subject: "Punta Cana Tour Store",
    html: htmlString,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent successfully");
      }
    });
  });

  res.status(200).send();
}
