const nodemailer = require("nodemailer");

import { Head } from "../components/Email/Head";
import { Css } from "../components/Email/Css";
import { HtmlHeader } from "../components/Email/HtmlHeader";
import { HtmlFooter } from "../components/Email/HtmlFooter";
import { Contact } from "../components/Email/Contact";
import { SocailMedia } from "../components/Email/SocialMedia";
import { TransferBody } from "../components/Email/TransferBody";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});

export default function handler(req, res) {
  const clientName = req.body.clientName;
  const deposit = req.body.deposit;
  const formData = req.body.formData;
  console.log(deposit);
  console.log(formData);
  const htmlString = `${Head}${Css}${HtmlHeader}${TransferBody(
    clientName,
  )}${Contact}${SocailMedia}${HtmlFooter}`;

  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    to: formData.email,
    subject: "Punta Cana Tour Store",
    text: `${clientName} have a deposit of ${deposit}`,
    html: htmlString,
  };

  transporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  res.status(200);
}
