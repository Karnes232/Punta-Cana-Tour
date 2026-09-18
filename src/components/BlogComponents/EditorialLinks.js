import React from 'react';
import { Link } from 'gatsby';
import { blogPath } from '../../utils/editorial';
import { guideHub, serviceLinks } from '../../utils/interlinking';

export function GuideLinks({ guides = [], compact = false }) {
  if (!guides.length) return null;
  return (
    <aside aria-label={compact ? 'Related reading' : 'Continue planning your trip'} className="my-8 rounded-lg border border-primary-color bg-primary-bg-color p-5">
      <h2 className="font-montserrat text-xl font-semibold text-secondary-color mb-4">{compact ? 'Related reading' : 'Continue planning your trip'}</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {guides.map(guide => <li key={blogPath(guide.slug)}>
          <Link to={blogPath(guide.slug)} className="text-secondary-color underline font-semibold">{guide.title}</Link>
          {!compact && guide.description && <p className="mt-2 text-sm text-gray-700">{guide.description}</p>}
        </li>)}
      </ul>
    </aside>
  );
}
export default function EditorialLinks({ post, guides = [] }) {
  const hub = guideHub(post), services = serviceLinks(post);
  return <div className="max-w-5xl mx-5 xl:mx-auto my-8">
    <GuideLinks guides={guides} />
    <nav aria-label="More travel guides" className="my-5 flex flex-wrap gap-5"><Link to={hub.href} className="underline text-secondary-color">{hub.label}</Link><Link to="/blog/" className="underline text-secondary-color">All travel planning topics</Link><Link to="/blog/punta-cana/" className="underline text-secondary-color">Punta Cana practical guide</Link></nav>
    {!!services.length && <section aria-label="Services for your trip" className="rounded-lg border border-primary-color p-5">
      <h2 className="font-montserrat text-2xl font-semibold text-secondary-color mb-4">Services for your trip</h2>
      <ul className="grid gap-5 md:grid-cols-2">{services.map(service => <li key={service.href}>
        {service.href.startsWith('https://') ? <a href={service.href} className="underline text-secondary-color font-semibold">{service.label}</a> : <Link to={service.href} className="underline text-secondary-color font-semibold">{service.label}</Link>}
        <p className="mt-2 text-gray-700">{service.description}</p>
      </li>)}</ul>
    </section>}
  </div>;
}
