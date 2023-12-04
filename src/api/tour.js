const nodemailer = require("nodemailer");

import { Head } from "../components/Email/Head";
import { Css } from "../components/Email/Css";
import { Body } from "../components/Email/Body";
import { HtmlHeader } from "../components/Email/HtmlHeader";
import { HtmlFooter } from "../components/Email/HtmlFooter";
import { Tour } from "../components/Email/Tour";
import { TotalPrice } from "../components/Email/TotalPrice";
import { Contact } from "../components/Email/Contact";
import { SocailMedia } from "../components/Email/SocialMedia";
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
  const formData = req.body.formData;
  const PickUp1 = formData.PickUp1;
  const PickUp2 = formData.PickUp2;
  const PickUp3 = formData.PickUp3;
  const PickUp4 = formData.PickUp4;
  const Date1 = formData.Date1;
  const Date2 = formData.Date2;
  const Date3 = formData.Date3;
  const Date4 = formData.Date4;
  let totalCost = 0;
  tourList.map((tour) => {
    let tourCost = parseInt(tour.guestCount) * parseInt(tour.tour.price);
    totalCost = totalCost + tourCost;
  });

  const htmlString = `${Head}${Css}${HtmlHeader}${Body(clientName)}${
    tourList[0] ? Tour(tourList[0], PickUp1, Date1) : ""
  }${tourList[1] ? Tour(tourList[1], PickUp2, Date2) : ""}${
    tourList[2] ? Tour(tourList[2], PickUp3, Date3) : ""
  }${tourList[3] ? Tour(tourList[3], PickUp4, Date4) : ""}${TotalPrice(
    totalCost,
  )}${Contact}${SocailMedia}${HtmlFooter}`;

  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    replyTo: `reservations@puntacanatourstore.com`,
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
