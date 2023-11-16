const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});

const loadTemplate = (templateName, context) => {
  const templatePath = `src/views/${templateName}.handlebars`;
  const source = fs.readFileSync(templatePath, "utf8");
  const template = handlebars.compile(source);
  return template(context);
};

export default function handler(req, res) {
  const clientName = req.body.clientName;
  const clientEmail = req.body.clientEmail;
  const deposit = req.body.deposit;

  const templateName = "tour";
  const emailContext = {
    /* Any dynamic content to be inserted into the template */
    name: clientName,
    // Add more data here based on your template's placeholders
  };
  const emailHTML = loadTemplate(templateName, emailContext);
  let mailDetails = {
    from: `${process.env.EMAIL_USER_NEW}`,
    to: clientEmail,
    subject: "Punta Cana Tour Store",
    text: `${clientName} have a deposit of ${deposit}`,
    html: emailHTML,
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
