const nodemailer = require("nodemailer");

import { Head } from "../components/Email/Head";
import { Css } from "../components/Email/Css";
import { Body } from "../components/Email/Body";
import { HtmlHeader } from "../components/Email/HtmlHeader";
import { HtmlFooter } from "../components/Email/HtmlFooter";
import { Tour } from "../components/Email/Tour";
import { TotalPrice } from "../components/Email/TotalPrice";
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
  const tourList = req.body.tourList;
  let totalCost = 0;
  tourList.map((tour) => {
    let tourCost = parseInt(tour.guestCount) * parseInt(tour.tour.price);
    totalCost = totalCost + tourCost;
  });

  // const htmlString = `${Head}${Css}${HtmlHeader}${Body(
  //   clientName,
  // )}${tourList.map((tour) => Tour(tour))}${HtmlFooter}`;

  const htmlString = `${Head}${Css}${HtmlHeader}${Body(clientName)}${
    tourList[0] ? Tour(tourList[0]) : ""
  }${tourList[1] ? Tour(tourList[1]) : ""}${
    tourList[2] ? Tour(tourList[2]) : ""
  }${tourList[3] ? Tour(tourList[3]) : ""}${TotalPrice(
    totalCost,
  )}${HtmlFooter}`;

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
