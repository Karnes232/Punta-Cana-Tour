# Contact planner

English-only contact page aligned with the navy/gold home design. Eight enquiry options: tours, airport transfers, hotels/hostels, car rental, intercity transfers, air travel, trip planning and existing bookings.

Netlify Forms remains the receiving system under the existing `contact` form name. Legacy fields `name`, `email`, `telphone` and `additional` are preserved. All conditional input names are present in static HTML for Netlify detection; inactive fieldsets are hidden and disabled so unrelated values are not submitted. Dates and service-specific details are optional. WhatsApp preference requires a phone number; an end date cannot precede the entered start date.

Submission uses URL-encoded POST, retains values on an error, prevents repeated submission while pending and displays confirmation only after an HTTP success. The response message distinguishes an enquiry from a reservation. The existing thank-you URL is the no-JavaScript fallback. No customer details are placed in a query string by the new form. A hidden honeypot and existing privacy link are included.

The separate travel-agent contact form is unchanged. Contact retains the existing site-wide noindex policy. No new analytics, external recipient, subscription or payment collection is added.

Validation includes server-rendered field registration, URL encoding and transport success/failure with mocked requests. Preview UI checks must cover service switching, disabled fields, date order, WhatsApp requirements and responsive widths. Do not send test enquiries to the live team or claim email delivery without a verified submission.

Reference: https://docs.netlify.com/manage/forms/setup/ (static HTML detection and URL-encoded submission).
