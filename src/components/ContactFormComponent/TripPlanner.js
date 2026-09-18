import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { services, groups } from "../../data/contact-planner";
import { sendContactRequest } from "../../utils/contact-request";
import "./planner.css";

export default function TripPlanner({ email, whatsApp }) {
  const [service, setService] = useState("");
  const [reply, setReply] = useState("Email");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState("idle");
  const feedback = useRef(null);
  useEffect(() => {
    if (status === "success" || status === "error") feedback.current?.focus();
  }, [status]);
  const submit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    const payload = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      await sendContactRequest(payload);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return (
    <main className="trip-contact">
      <header className="contact-intro">
        <div>
          <p className="contact-eyebrow">Your journey starts here</p>
          <h1>
            Let's plan your
            <br />
            Punta Cana.
          </h1>
          <p>
            One excursion or your whole itinerary. Tell us what you have in
            mind, and give our team the details to help you take the next step.
          </p>
        </div>
        <div className="contact-intro-note">
          <span>Explore. Understand. Decide.</span>
          <p>
            Excursions, places to stay and ways to get around — connected around
            your trip.
          </p>
        </div>
      </header>
      <div className="contact-layout">
        <div className="contact-form-panel">
          {status === "success" ? (
            <section
              className="contact-success"
              role="status"
              tabIndex={-1}
              ref={feedback}
            >
              <p className="contact-eyebrow">Enquiry received</p>
              <h2>Thank you. Your plans are with us.</h2>
              <p>
                Our team will review your request and reply using the contact
                details you provided. Your enquiry is not a confirmed
                reservation; availability and arrangements still need to be
                agreed.
              </p>
              <Link className="contact-submit" to="/blog/">
                Explore the travel guides
              </Link>
            </section>
          ) : (
            <>
              <form
                name="contact"
                method="POST"
                action="/contact/thankyou/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={submit}
                aria-busy={status === "sending"}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Leave this field empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <fieldset className="contact-section">
                  <legend>
                    <span>01</span> What can we help you with?
                  </legend>
                  <p className="contact-hint">
                    Choose your main interest. You can include other services in
                    your message.
                  </p>
                  <div className="contact-service-grid">
                    {services.map(([value, title, description]) => (
                      <label key={value} className="contact-service">
                        <input
                          type="radio"
                          name="service"
                          value={value}
                          required
                          checked={service === value}
                          onChange={() => setService(value)}
                        />
                        <span>
                          <strong>{title}</strong>
                          <small>{description}</small>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="contact-section">
                  <legend>
                    <span>02</span> A few details about your trip
                  </legend>
                  <p className="contact-hint">
                    Still deciding? Dates and trip details are optional.
                  </p>
                  <div className="contact-fields">
                    <label>
                      Preferred start date
                      <input
                        name="start-date"
                        type="date"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                      />
                    </label>
                    <label>
                      End or return date
                      <input
                        name="end-date"
                        type="date"
                        value={end}
                        min={start || undefined}
                        onChange={(e) => setEnd(e.target.value)}
                      />
                    </label>
                    <label>
                      Adults
                      <input
                        name="adults"
                        type="number"
                        min="1"
                        max="500"
                        placeholder="Number of adults"
                      />
                    </label>
                    <label>
                      Children
                      <input
                        name="children"
                        type="number"
                        min="0"
                        max="500"
                        placeholder="Number of children"
                      />
                    </label>
                  </div>
                  <label className="contact-check">
                    <input type="checkbox" name="flexible-dates" value="Yes" />{" "}
                    My dates are flexible
                  </label>
                </fieldset>
                {groups.map((group) => (
                  <fieldset
                    key={group.title}
                    className="contact-section contact-specific"
                    hidden={!group.services.includes(service)}
                    disabled={!group.services.includes(service)}
                  >
                    <legend>{group.title}</legend>
                    <div className="contact-fields">
                      {group.fields.map(([name, label, type, placeholder]) => (
                        <label key={name}>
                          {label}
                          {Array.isArray(type) ? (
                            <select name={name} defaultValue="">
                              <option value="">Select if known</option>
                              {type.map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              name={name}
                              type={type}
                              placeholder={placeholder}
                              min={type === "number" ? "1" : undefined}
                              maxLength={type === "text" ? 250 : undefined}
                            />
                          )}
                        </label>
                      ))}
                    </div>
                    {service === "air" && (
                      <p className="contact-hint">
                        Aircraft, landing access and routes are subject to
                        confirmation.
                      </p>
                    )}
                  </fieldset>
                ))}
                <fieldset className="contact-section">
                  <legend>
                    <span>03</span> How can we reach you?
                  </legend>
                  <div className="contact-fields">
                    <label>
                      Full name <span aria-hidden="true">*</span>
                      <input
                        name="name"
                        autoComplete="name"
                        required
                        maxLength="120"
                      />
                    </label>
                    <label>
                      Email address <span aria-hidden="true">*</span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        maxLength="254"
                      />
                    </label>
                    <label>
                      Preferred reply method
                      <select
                        name="reply-method"
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                      >
                        <option>Email</option>
                        <option>WhatsApp</option>
                      </select>
                    </label>
                    <label>
                      Phone / WhatsApp{" "}
                      {reply === "WhatsApp" ? "*" : "(optional)"}
                      <input
                        name="telphone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Include your country code"
                        required={reply === "WhatsApp"}
                        maxLength="40"
                      />
                    </label>
                  </div>
                  <label className="contact-message">
                    Tell us what matters to you{" "}
                    <span aria-hidden="true">*</span>
                    <textarea
                      name="additional"
                      required
                      rows="5"
                      maxLength="4000"
                      placeholder="Your interests, questions, preferred pace or anything else that will help us understand your plans."
                    />
                  </label>
                </fieldset>
                <p className="contact-privacy">
                  We use these details to respond to your enquiry. Please do not
                  include passport numbers or payment details. Read our{" "}
                  <Link to="/information/privacy/">privacy policy</Link>.
                </p>
                <noscript>
                  <p>
                    Include service-specific details in your message. You can
                    send this form without JavaScript.
                  </p>
                </noscript>
                {status === "error" && (
                  <p
                    className="contact-error"
                    role="alert"
                    tabIndex={-1}
                    ref={feedback}
                  >
                    Your enquiry could not be sent. Your details are still here
                    — please try again or use the direct contact options.
                  </p>
                )}
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending your enquiry…"
                    : "Send my enquiry"}
                </button>
                <p className="contact-hint">
                  An enquiry starts a conversation. It does not confirm a
                  booking or payment.
                </p>
              </form>
            </>
          )}
        </div>
        <aside className="contact-aside">
          <section>
            <p className="contact-eyebrow">
              A thoughtful start to your journey
            </p>
            <h2>
              Your trip.
              <br />
              Your priorities.
            </h2>
            <p>
              Share what you know, even if your itinerary is still taking shape.
              Clear dates, locations and group details help us understand your
              request.
            </p>
            <ol>
              <li>
                <strong>Tell us your plans.</strong>
                <span>Choose a service and share the practical details.</span>
              </li>
              <li>
                <strong>Review the options.</strong>
                <span>
                  Our team can clarify your questions and the next steps.
                </span>
              </li>
              <li>
                <strong>Confirm before you commit.</strong>
                <span>
                  Review availability, inclusions, pricing and terms for the
                  service you choose.
                </span>
              </li>
            </ol>
          </section>
          <section className="contact-direct">
            <h2>Prefer to talk directly?</h2>
            {email && <a href={"mailto:" + email}>{email}</a>}
            {whatsApp && (
              <a
                href={
                  "https://api.whatsapp.com/send?phone=" +
                  encodeURIComponent(whatsApp)
                }
              >
                Contact us on WhatsApp
              </a>
            )}
            <p>
              For an existing reservation, include your booking reference so we
              can identify your enquiry.
            </p>
          </section>
          <section className="contact-reading">
            <h2>Useful before you arrive</h2>
            <Link to="/blog/dominicanrepubliceticket/">
              Dominican Republic E-Ticket
            </Link>
            <Link to="/blog/punta-cana-seaweed-season/">
              Sargassum & beach conditions
            </Link>
            <Link to="/blog/">Explore the travel guide</Link>
          </section>
        </aside>
      </div>
    </main>
  );
}
