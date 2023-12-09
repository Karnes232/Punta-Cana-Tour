import { Contact } from "../components/Email/Contact";
import { Css } from "../components/Email/Css";
import { Head } from "../components/Email/Head";
import { HtmlFooter } from "../components/Email/HtmlFooter";
import { HtmlHeaderProvider } from "../components/Email/HtmlHeaderProvider";
import { SocailMedia } from "../components/Email/SocialMedia";
import { BodyProvider } from "../components/Email/BodyProvider";
import { Tour } from "../components/Email/Tour";
import { ClientInfo } from "../components/Email/ClientInfo";
import { TotalPrice } from "../components/Email/TotalPrice";

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
  const providerEmail = req.body.providerEmail;
  const tour = req.body.tour;
  const guestCount = req.body.guestCount;
  const pickupDate = req.body.pickupDate;
  const pickupTime = req.body.pickupTime;
  const formData = req.body.formData;

  const totalPrice = tour.tour?.price * tour?.guestCount;
  const htmlString = `${Head}${Css}${HtmlHeaderProvider}${BodyProvider(
    tour.tourName,
  )}${ClientInfo(
    clientName,
    formData.email,
    formData.phone,
    formData.hotelSelect,
    formData.roomNumber,
  )}${Tour(tour, pickupTime, pickupDate)}${TotalPrice(
    totalPrice,
  )}${Contact}${SocailMedia}${HtmlFooter}`;

  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    replyTo: `reservations@puntacanatourstore.com`,
    to: providerEmail,
    subject: "Punta Cana Tour Store Reservation",
    text: `${clientName} have a deposit of`,
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
