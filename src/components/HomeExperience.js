import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { services, homeFaqs } from "../data/travel-services";
import "./home-experience.css";

const guides = [
  [
    "/blog/dominicanrepubliceticket/",
    "Arrival preparation",
    "Dominican Republic E-Ticket",
    "Understand the travel form, where to find the official application and what to prepare before your journey.",
  ],
  [
    "/blog/punta-cana-seaweed-season/",
    "Beach planning",
    "Sargassum & beach conditions",
    "Learn what seasonal information can tell you, what it cannot predict and how to plan alternatives.",
  ],
  [
    "/blog/what-does-punta-cana-mean-in-english/",
    "Destination background",
    "What does Punta Cana mean?",
    "Explore the name, historical context and the distinction between a familiar explanation and documented evidence.",
  ],
];
const decisions = [
  [
    "Start with your location.",
    "Confirm your exact accommodation address and whether your excursion includes pickup there. When comparing places to stay, consider access to the places you want to visit as well as the room.",
    "/transfers/punta-cana/",
    "Plan your arrival",
  ],
  [
    "Look beyond the activity time.",
    "Pickup rounds, road transfers and return arrangements are part of the day. Compare the total time away from your accommodation and leave space around flights, dinner reservations and other plans.",
    "/tours/",
    "Compare excursions",
  ],
  [
    "Check conditions near your dates.",
    "Beach photographs cannot tell you what conditions will be like when you arrive. Learn how to assess sargassum information, ask about current conditions and keep an alternative for weather-sensitive outings.",
    "/blog/punta-cana-seaweed-season/",
    "Understand sargassum",
  ],
];
export default function HomeExperience({ tours = [] }) {
  return (
    <main className="home-experience">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Punta Cana, Dominican Republic</p>
          <h1 id="home-title">
            Punta Cana tours.
            <br />
            <span>A better-informed journey.</span>
          </h1>
          <p className="home-lead">
            Discover excursions, arrange your transport and understand the
            destination before you arrive. Plan each part of your trip with
            clear information and practical guidance.
          </p>
          <div className="home-actions">
            <Link className="home-button" to="/tours/">
              Explore tours & excursions
            </Link>
            <Link className="home-text-link" to="/blog/">
              Read the travel guides
            </Link>
          </div>
          <p className="home-hero-note">
            Excursions · Accommodation · Airport transfers · Car rental
          </p>
        </div>
        <figure className="home-hero-photo">
          <img
            src="/images/editorial/saona-palm-lined-shore-1440.webp"
            srcSet="/images/editorial/saona-palm-lined-shore-480.webp 480w, /images/editorial/saona-palm-lined-shore-960.webp 960w, /images/editorial/saona-palm-lined-shore-1440.webp 1440w, /images/editorial/saona-palm-lined-shore-1920.webp 1920w"
            sizes="(max-width: 800px) 100vw, 48vw"
            width="1440"
            height="960"
            alt="Palm-lined beach and clear coastal water on Saona Island"
            fetchpriority="high"
          />
          <figcaption>Saona Island · Dominican Republic</figcaption>
        </figure>
      </section>
      <section
        className="home-section"
        id="featured-Tours"
        aria-labelledby="home-tours"
      >
        <div className="home-section-heading">
          <div>
            <p className="home-eyebrow">Choose your experience</p>
            <h2 id="home-tours">
              Punta Cana excursions, with the details that matter.
            </h2>
          </div>
          <Link className="home-inline-link" to="/tours/">
            View all tours
          </Link>
        </div>
        <p className="home-intro">
          An island day, time on the water or an outdoor adventure: start with
          what you want to experience. Then compare the full itinerary,
          transport time and what is included, so your choice fits the way you
          travel.
        </p>
        <div className="home-grid">
          {tours.slice(0, 3).map(({ node: tour }) => (
            <article className="home-tour" key={tour.url}>
              <Link
                to={"/tours/" + tour.url.trim().replace(/^\/+|\/+$/g, "") + "/"}
              >
                {getImage(tour.mainImage?.gatsbyImage) && (
                  <GatsbyImage
                    image={getImage(tour.mainImage.gatsbyImage)}
                    alt={tour.name}
                    className="home-tour-image"
                  />
                )}
                <div className="home-tour-copy">
                  <h3>{tour.name}</h3>
                  <p>{tour.description1?.description1}</p>
                  <div className="home-tour-bottom">
                    <span>View itinerary</span>
                    {Number(tour.price) > 0 && (
                      <span>
                        From US${Number(tour.price).toLocaleString("en-US")}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="home-knowledge" aria-labelledby="home-destination">
        <div className="home-section">
          <p className="home-eyebrow">Understand the destination</p>
          <h2 id="home-destination">
            The right trip starts with the right questions.
          </h2>
          <div className="home-grid">
            {decisions.map(([title, text, url, label], i) => (
              <article key={url}>
                <span className="home-index">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={url}>{label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-section" aria-labelledby="home-services">
        <p className="home-eyebrow">One connected itinerary</p>
        <h2 id="home-services">Plan the whole journey.</h2>
        <p className="home-intro">
          Punta Cana Tour Store connects things to do with places to stay and
          ways to get around. Choose the service you need, review its details
          and confirm the arrangements for your dates.
        </p>
        <div className="home-grid home-services">
          {Object.values(services).map((item) => (
            <article key={item.path}>
              <h3>
                <Link to={item.path}>{item.title}</Link>
              </h3>
              <p>{item.intro}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="home-guides" aria-labelledby="home-guide-title">
        <div className="home-section">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow">Before you arrive</p>
              <h2 id="home-guide-title">
                Read the destination. Make your own decisions.
              </h2>
            </div>
            <Link className="home-inline-link" to="/blog/">
              Explore the travel guide
            </Link>
          </div>
          <div className="home-grid">
            {guides.map(([url, label, title, text]) => (
              <Link to={url} key={url}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="home-section home-faq"
        aria-labelledby="home-faq-title"
      >
        <div>
          <p className="home-eyebrow">Practical answers</p>
          <h2 id="home-faq-title">Before you book.</h2>
          <p>
            Know what you are choosing. Keep the itinerary, terms and
            confirmation together for your trip.
          </p>
        </div>
        <div>
          {[1, 2, 3].map((n) => (
            <details key={n}>
              <summary>{homeFaqs["question" + n]}</summary>
              <p>{homeFaqs["answer" + n]["answer" + n]}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="home-contact">
        <div>
          <p className="home-eyebrow">Make your plans clear</p>
          <h2>Tell us how you want to travel.</h2>
          <p>
            Share your dates, accommodation and group requirements. We can help
            you identify the next step for your Punta Cana itinerary.
          </p>
        </div>
        <Link className="home-button" to="/contact/">
          Discuss your trip
        </Link>
      </section>
    </main>
  );
}
