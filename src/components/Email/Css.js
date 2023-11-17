export const Css = `
<style type="text/css">
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
@media only screen and (min-width: 520px) {
.u-row {
width: 500px !important;
}
.u-row .u-col {
vertical-align: top;
}

.u-row .u-col-100 {
width: 500px !important;
}

}

@media (max-width: 520px) {
.u-row-container {
max-width: 100% !important;
padding-left: 0px !important;
padding-right: 0px !important;
}
.u-row .u-col {
min-width: 320px !important;
max-width: 100% !important;
display: block !important;
}
.u-row {
width: 100% !important;
}
.u-col {
width: 100% !important;
}
.u-col > div {
margin: 0 auto;
}
}
body {
margin: 0;
padding: 0;
}

table,
tr,
td {
vertical-align: top;
border-collapse: collapse;
}

p {
margin: 0;
}

.ie-container table,
.mso-container table {
table-layout: fixed;
}

* {
line-height: inherit;
}

a[x-apple-data-detectors='true'] {
color: inherit !important;
text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
.m_363158567790451815tourCard
.tourCard {
  display: flex; 
  justify-content: space-between; 
  margin-top: 1rem; 
  margin-bottom: 1rem; 
  gap: 0.75rem;
}
.m_363158567790451815tourImage{}
.tourImage {
  border-radius:20px; 
  object-fit: cover;
}

.m_363158567790451815innerDivTourCard {
  display: flex; 
  flex-direction: column; 
  margin-bottom: 0.25rem; 
  width: 150px;
}
.m_363158567790451815tourName{}
.tourName {
  font-size:18px; 
  line-height:28px; 
  font-weight:700; 
  overflow:hidden;  
  text-overflow:ellipsis;
}
.m_363158567790451815tourPriceDiv{
  justify-content: space-between;
}
.tourPriceDiv {
  display: flex; 
  flex: 1 1 0%; 
  align-items: center; 
  justify-content: space-between;
  width: 150px;
}

.paddingLeft {
  padding:0px 0px 0px 10px;
}

</style>



</head>

`;
