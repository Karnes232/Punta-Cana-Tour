import React from 'react';
import { Link } from 'gatsby';
import topics from '../../data/travel-topics';
import { blogPath } from '../../utils/editorial';

export default function TravelTopics() {
  return <nav aria-label="Plan your Punta Cana trip" className="max-w-5xl mx-5 xl:mx-auto my-8 rounded-lg border border-primary-color bg-primary-bg-color p-5">
    <h2 className="font-montserrat text-2xl font-semibold text-secondary-color mb-4">Plan your Punta Cana trip</h2>
    <p className="font-montserrat text-gray-700 mb-5">Start with entry documents and beach conditions, then plan your stay, transport and activities.</p>
    <ul className="grid gap-4 md:grid-cols-2">
      {topics.map(topic => <li key={topic.id}><Link to={`${blogPath(topic.slug)}${topic.anchor ? `#${topic.anchor}` : ''}`} className="font-montserrat text-secondary-color underline">{topic.label}</Link></li>)}
    </ul>
  </nav>;
}
