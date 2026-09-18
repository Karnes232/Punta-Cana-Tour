import React from 'react';
import { Link } from 'gatsby';
import { services } from '../data/travel-services';

export function ServicePlanning({ service }) {
  const item = services[service];
  return <section className="max-w-6xl mx-5 md:mx-10 xl:mx-auto my-8 text-secondary-color" aria-label="Before you book">
    <p className="leading-relaxed mb-4">{item.intro}</p>
    <h2 className="text-2xl font-bold mb-3">{item.question}</h2>
    <p className="leading-relaxed mb-4">{item.answer}</p>
    <Link className="underline underline-offset-4" to={item.guide}>{item.guideLabel}</Link>
    <span aria-hidden="true"> · </span><Link className="underline underline-offset-4" to="/blog/">More Punta Cana travel guides</Link>
  </section>;
}

export default function TravelPlanning() {
  return <section className="max-w-6xl mx-5 md:mx-10 xl:mx-auto my-10 text-secondary-color" aria-labelledby="plan-your-trip">
    <h2 id="plan-your-trip" className="text-3xl md:text-4xl font-bold mb-4">Plan your Punta Cana trip with confidence</h2>
    <p className="leading-relaxed mb-6">Punta Cana Tour Store brings together excursions, accommodation and transport with practical guides to help you decide what suits your trip. Start with where you will stay and how you will get there, then choose activities around your dates, interests and budget.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {['tours', 'hotels', 'cars', 'airport', 'country', 'flights'].map(key => <article key={key} className="border border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="font-bold text-xl mb-3"><Link className="underline decoration-primary-color underline-offset-4" to={services[key].path}>{services[key].title}</Link></h3>
        <p className="leading-relaxed">{services[key].intro}</p>
      </article>)}
    </div>
    <div className="mt-8 rounded-lg bg-gray-100 p-5 md:p-7">
      <h3 className="text-2xl font-bold mb-3">What should I read before arriving?</h3>
      <p className="leading-relaxed">Start with our <Link className="underline" to="/blog/dominicanrepubliceticket/">Dominican Republic E-Ticket guide</Link>, check your accommodation address and confirm your airport pickup. For beach days, read the <Link className="underline" to="/blog/punta-cana-seaweed-season/">sargassum and beach conditions guide</Link> and check conditions near your travel date. Our <Link className="underline" to="/blog/">Punta Cana travel blog</Link> explains the choices behind your itinerary, from local orientation to planning day trips.</p>
      <h3 className="text-2xl font-bold mt-5 mb-3">What should I confirm before booking?</h3>
      <p className="leading-relaxed">Check the total price, what is included, the exact meeting or pickup point, cancellation conditions and any age, mobility or luggage restrictions. Confirm availability for your dates and keep the provider's contact details with your booking information.</p>
    </div>
  </section>;
}
