const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
import * as path from 'path';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.EMAIL_USER_NEW}`,
    pass: `${process.env.EMAIL_PASSWORD_NEW}`,
  },
});

const loadTemplate = (templateName, context) => {
  let templatePath = ""
  if (process.env.NODE_ENV === 'production') { 
    templatePath = productionEmail
    const template = handlebars.compile(templatePath);
    return template(context);
  } else {
    templatePath = `src/views/${templateName}.handlebars`;
    const source = fs.readFileSync(templatePath, "utf8");
    const template = handlebars.compile(source);
    return template(context);
  }
  // const source = fs.readFileSync(templatePath, "utf8");
  // const template = handlebars.compile(source);
  // return template(context);
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



const productionEmail = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900" rel="stylesheet">

    <!-- CSS Reset : BEGIN -->
    <style>

        /* What it does: Remove spaces around the email design added by some email clients. */
        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
        html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    background: #f1f1f1;
}

/* What it does: Stops email clients resizing small text. */
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

/* What it does: Centers email on Android 4.4 */
div[style*="margin: 16px 0"] {
    margin: 0 !important;
}

/* What it does: Stops Outlook from adding extra spacing to tables. */
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}

/* What it does: Fixes webkit padding issue. */
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
}

/* What it does: Uses a better rendering method when resizing images in IE. */
img {
    -ms-interpolation-mode:bicubic;
}

/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
a {
    text-decoration: none;
}

/* What it does: A work-around for email clients meddling in triggered links. */
*[x-apple-data-detectors],  /* iOS */
.unstyle-auto-detected-links *,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}

/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
.a6S {
    display: none !important;
    opacity: 0.01 !important;
}

/* What it does: Prevents Gmail from changing the text color in conversation threads. */
.im {
    color: inherit !important;
}

/* If the above doesn't work, add a .g-img class to any image in question. */
img.g-img + div {
    display: none !important;
}

/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
/* Create one of these media queries for each additional viewport size you'd like to fix */

/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
}
/* iPhone 6, 6S, 7, 8, and X */
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
}
/* iPhone 6+, 7+, and 8+ */
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}


    </style>

    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->
    <style>

	    .primary{
	background: #f5564e;
}
.bg_white{
	background: #ffffff;
}
.bg_light{
	background: #fafafa;
}
.bg_black{
	background: #000000;
}
.bg_dark{
	background: rgba(0,0,0,.8);
}
.email-section{
	padding:2.5em;
}

/*BUTTON*/
.btn{
	padding: 5px 15px;
	display: inline-block;
}
.btn.btn-primary{
	border-radius: 5px;
	background: #f5564e;
	color: #ffffff;
}
.btn.btn-white{
	border-radius: 5px;
	background: #ffffff;
	color: #000000;
}
.btn.btn-white-outline{
	border-radius: 5px;
	background: transparent;
	border: 1px solid #fff;
	color: #fff;
}

h1,h2,h3,h4,h5,h6{
	font-family: 'Nunito Sans', sans-serif;
	color: #000000;
	margin-top: 0;
}

body{
	font-family: 'Nunito Sans', sans-serif;
	font-weight: 400;
	font-size: 15px;
	line-height: 1.8;
	color: rgba(0,0,0,.4);
}

a{
	color: #f5564e;
}

table{
}
/*LOGO*/

.logo h1{
	margin: 0;
}
.logo h1 a{
	color: #000;
	font-size: 20px;
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Nunito Sans', sans-serif;
}

.navigation{
	padding: 0;
}
.navigation li{
	list-style: none;
	display: inline-block;;
	margin-left: 5px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
}
.navigation li a{
	color: rgba(0,0,0,.6);
}

/*HERO*/
.hero{
	position: relative;
	z-index: 0;
}
.hero .overlay{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	content: '';
	width: 100%;
	background: #000000;
	z-index: -1;
	opacity: .3;
}
.hero .icon{
}
.hero .icon a{
	display: block;
	width: 60px;
	margin: 0 auto;
}
.hero .text{
	color: rgba(255,255,255,.8);
	padding: 0 4em;
}
.hero .text h2{
	color: #ffffff;
	font-size: 40px;
	margin-bottom: 0;
	line-height: 1.2;
	font-weight: 900;
}


/*HEADING SECTION*/
.heading-section{
}
.heading-section h2{
	color: #000000;
	font-size: 24px;
	margin-top: 0;
	line-height: 1.4;
	font-weight: 700;
}
.heading-section .subheading{
	margin-bottom: 20px !important;
	display: inline-block;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: rgba(0,0,0,.4);
	position: relative;
}
.heading-section .subheading::after{
	position: absolute;
	left: 0;
	right: 0;
	bottom: -10px;
	content: '';
	width: 100%;
	height: 2px;
	background: #f5564e;
	margin: 0 auto;
}

.heading-section-white{
	color: rgba(255,255,255,.8);
}
.heading-section-white h2{
	font-family: 
	line-height: 1;
	padding-bottom: 0;
}
.heading-section-white h2{
	color: #ffffff;
}
.heading-section-white .subheading{
	margin-bottom: 0;
	display: inline-block;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 2px;
	color: rgba(255,255,255,.4);
}


.icon{
	text-align: center;
}
.icon img{
}


/*SERVICES*/
.services{
	background: rgba(0,0,0,.03);
}
.text-services{
	padding: 10px 10px 0; 
	text-align: center;
}
.text-services h3{
	font-size: 16px;
	font-weight: 600;
}

.services-list{
	padding: 0;
	margin: 0 0 10px 0;
	width: 100%;
	float: left;
}

.services-list .text{
	width: 100%;
	float: right;
}
.services-list h3{
	margin-top: 0;
	margin-bottom: 0;
	font-size: 18px;
}
.services-list p{
	margin: 0;
}


/*DESTINATION*/
.text-tour{
	padding-top: 10px;
}
.text-tour h3{
	margin-bottom: 0;
}
.text-tour h3 a{
	color: #000;
}

/*BLOG*/
.text-services .meta{
	text-transform: uppercase;
	font-size: 14px;
}

/*TESTIMONY*/
.text-testimony .name{
	margin: 0;
}
.text-testimony .position{
	color: rgba(0,0,0,.3);

}


/*COUNTER*/
.counter{
	width: 100%;
	position: relative;
	z-index: 0;
}
.counter .overlay{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	content: '';
	width: 100%;
	background: #000000;
	z-index: -1;
	opacity: .3;
}
.counter-text{
	text-align: center;
}
.counter-text .num{
	display: block;
	color: #ffffff;
	font-size: 34px;
	font-weight: 700;
}
.counter-text .name{
	display: block;
	color: rgba(255,255,255,.9);
	font-size: 13px;
}


ul.social{
	padding: 0;
}
ul.social li{
	display: inline-block;
}

/*FOOTER*/

.footer{
	color: rgba(255,255,255,.5);

}
.footer .heading{
	color: #ffffff;
	font-size: 20px;
}
.footer ul{
	margin: 0;
	padding: 0;
}
.footer ul li{
	list-style: none;
	margin-bottom: 10px;
}
.footer ul li a{
	color: rgba(255,255,255,1);
}


@media screen and (max-width: 500px) {

	.icon{
		text-align: left;
	}

	.text-services{
		padding-left: 0;
		padding-right: 20px;
		text-align: left;
	}

}


    </style>


</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
	<center style="width: 100%; background-color: #f1f1f1;">
    <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
      	<tr>
          <td valign="top" class="bg_white" style="padding: 1em 2.5em;">
          	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          		<tr>
          			<td width="40%" class="logo" style="text-align: left;">
			            <h1><a href="#">Travel</a></h1>
			          </td>
			          <td width="60%" class="logo" style="text-align: right;">
			            <ul class="navigation">
			            	<li><a href="#">Home</a></li>
			            	<li><a href="#">About</a></li>
			            	<li><a href="#">Works</a></li>
			            	<li><a href="#">Blog</a></li>
			            	<li><a href="#">Contact</a></li>
			            </ul>
			          </td>
          		</tr>
          	</table>
          </td>
	      </tr><!-- end tr -->
				<tr>
          <td valign="middle" class="hero bg_white" style="background-image: url('https://colorlib.com/etc/email-template/5/images/bg_1.jpg'); background-size: cover; height: 400px;">
          	<div class="overlay"></div>
            <table>
            	<tr>
            		<td>
            			<div class="text" style="text-align: center;">
            				<h2>Be a Traveler not a Tourist</h2>
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
	      <tr>
	        <td class="bg_dark email-section" style="text-align:center;">
	        	<div class="heading-section heading-section-white">
	          	<h2>Welcome To Punta Cana Tour Store</h2>
				<h3>{{name}}</h3>
	          	<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	        	</div>
	        </td>
	      </tr>
        </center>
</body>
</html>`