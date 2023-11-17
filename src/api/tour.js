const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
import * as path from "path";
import { Head } from "../components/Email/Head";
import { CssReset } from "../components/Email/CssReset";
import { Css } from "../components/Email/Css";
import { Body } from "../components/Email/Body";
import { HtmlHeader } from "../components/Email/HtmlHeader";
import { HtmlFooter } from "../components/Email/HtmlFooter";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});

// const loadTemplate = (templateName, context) => {
//   let templatePath = ""
//   if (process.env.NODE_ENV === 'production') {
//     templatePath = productionEmail
//     const template = handlebars.compile(templatePath);
//     return template(context);
//   } else {
//     templatePath = `src/views/${templateName}.handlebars`;
//     const source = fs.readFileSync(templatePath, "utf8");
//     const template = handlebars.compile(source);
//     return template(context);
//   }
//   // const source = fs.readFileSync(templatePath, "utf8");
//   // const template = handlebars.compile(source);
//   // return template(context);
// };

export default function handler(req, res) {
  const clientName = req.body.clientName;
  const clientEmail = req.body.clientEmail;
  const deposit = req.body.deposit;
  console.log(req.body.tourList[0].tour);

  const htmlString = `${Head}${Css}${HtmlHeader}${Body(clientName)}${HtmlFooter}`;

  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    to: clientEmail,
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
