# Travel planning expansion — 2026-09-18

18 existing article URLs now have reviewed repository-managed replacements: six from the earlier work and twelve in this expansion. No new article routes, deletions, mergers or redirects were introduced. Historical URL casing, encoded spaces and nested slugs remain intact.

The blog landing page and the general Punta Cana guide expose 20 planning topics. Compatible questions about health, packing, connectivity, rules and resort logistics are sections of the general guide, with stable anchor links. Other topics use their existing specialized article. `src/data/travel-topics.js` is the complete A–T mapping.

New replacements: `punta-cana`, `do-you-need-a-passport-for-punta-cana`, `punta-cana-drinking-age`, `airportshuttle`, `atmsinpuntacana`, `puntacanalocalcustoms`, `besttimetovisitpuntacana`, `is-punta-cana-safe-to-visit`, `allinclusivepuntacana`, `transfer/hotel`, `carrental/car-rental`, `lopesan-costa-bavaro-excursions`.

Each replacement supplies a unique title/H1, description, topic tags, related article choices, visible sources and actual revision date. Original publication dates and CMS assets are retained. Existing BlogPosting/BreadcrumbList schema receives the revised metadata. No invented author, review score or FAQ rich-result promise is introduced. Canonicals and sitemap behavior remain as established in the technical foundation; the route inventory has not expanded.

All articles have access to the planning index and general guide. Contextual body links connect entry forms, airport arrivals, hotel pickups, money, tips, weather, sargassum and activities. Existing service links lead to relevant tours, transfers and car rental. No mass hotel-name substitution or new competing service pages.

Important source decisions:

- Passport exceptions have an explicit December 31, 2026 deadline and are not universal.
- Aduanas' manual states a five-liter adult alcohol allowance while the tourism entry page says three. The disagreement is disclosed and the customs authority is the verification destination.
- IDAC's current drone guidance is preferred over the older tourism FAQ threshold.
- PUJ services link to the airport's current maps, Uber pickup information and optional VIP terms; no fixed waiting times or fares are asserted.
- Sargassum outlooks remain dated, regional information, separate from hotel observations and local forecasts.
- Health advice refers to CDC and individual clinical assessment; no prescriptions or universal prevention regimen.

Validation: 19 automated tests cover server rendering, single H1, schema, metadata, publication preservation, route inventory, all 20 topic destinations, rendered anchor targets, recommendations and media. The complete Gatsby build still needs the local Contentful delivery credentials. Static captured-layout previews are review artifacts, not deployable production output.

Content ownership: these revisions live in the repository and override matching Contentful fields during builds. Contentful entries themselves have not been edited. To restore CMS ownership, migrate the reviewed text and metadata first, then remove the corresponding override. Other historical articles are not represented as fully rewritten or fact-checked by this expansion.

Publication: user authorization received. The GitHub connector still returns 403 (integration cannot write). Browser repository access exists, but the attempted directory import did not complete. No production publication has been confirmed. Do not upload the static preview as a replacement for the Gatsby site.
