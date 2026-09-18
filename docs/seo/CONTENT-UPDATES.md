# Existing-page rewrites — 2026-09-18

Four existing articles have reviewed replacements in `src/data/editorial-updates.js`. They are applied consistently to page rendering, head metadata, schema, category cards and build-time recommendations. This is repository-managed content over the corresponding Contentful records; it does not edit the CMS. Later CMS edits to these four titles/bodies will not replace the checked-in versions until these overrides are removed or migrated back to Contentful.

| Preserved slug | Change |
| --- | --- |
| `punta-cana-seaweed-season` | Rewritten around observations, satellite data, forecast uncertainty, exact-beach checks and flexible trip planning. Includes dated USF August 2026 context, NOAA forecasting limits and CDC health information. No fabricated live conditions, monthly guarantees or sargassum-free beaches. |
| `dominicanrepubliceticket` | Replaced outdated 72-hour advice, clarified family forms and QR storage/correction, linked the free government portal and official guidance. Removed universal transit claims and unsupported health-form detail. |
| `what-does-punta-cana-mean-in-english` | Replaced unsupported literal “white palm” etymology with attributed company history and useful destination context. |
| `where-to-propose-in-punta-cana-dominican-republic-a-practical-guide` | Removed blanket access/privacy promises, unverified venue recommendations and the claim that Saona is in Bayahibe. Reframed as permission, timing, weather and transport planning, with a contextual specialist link. |

Every replacement has a unique title and description, one template H1, visible source links, manually set update/verification dates and a matching schema modification date. The original publication date is retained when supplied by Contentful. These dates record this actual editorial review, not an automatic refresh. The dated sargassum paragraph must be reviewed against a newer bulletin before it is presented as current after this review period; the text explicitly labels its date and is not a live feed.

Original slugs, hero media and embedded CMS image references are preserved. No articles were deleted, consolidated or redirected. No new public article routes were created. Broader consolidation and the remaining content rewrites are still outstanding.

## Shared site appearance

The blog keeps the existing Layout, Header, Footer, contact controls, base background and Montserrat typography. New links and borders use the existing secondary navy and primary orange design tokens. Desktop blog media reuse the tour PhotoGrid in a stable order; the mobile hero retains the existing 50vh presentation using GatsbyImage. Global colors and shared navigation were not redesigned.

## Review and deployment

The local preview inserts actual rendered article components into captured public HTML, retaining the existing surrounding site structure and media. Hydration is disabled there; it is not a Gatsby production build, and dynamic menu/cart interactions are not validated by that preview. Publication dates cannot be shown in this crawl-only preview because the original HTML did not expose them.

Component tests cover preserved URLs/publication dates/media, matching card titles, visible sources, single H1 and schema freshness. Full Gatsby build validation still needs the Contentful environment variables. Nothing in this change has been pushed or deployed.

Rollback: revert this commit or remove an individual entry from `src/data/editorial-updates.js`; the underlying CMS record remains intact.
