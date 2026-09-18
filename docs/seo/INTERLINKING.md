# Editorial interlinking — 2026-09-18

Articles now connect to up to six relevant published CMS articles: two after the opening paragraph and four at the end. Links use visible titles and ordinary crawlable anchors. The category hub remains accessible. Existing CMS prose and authored links are preserved.

The build ranks twelve topic groups from titles and existing tags, prioritizing shared island destinations over broad themes. It permits cross-category relationships and uses stable source-specific tie-breaking to distribute equally relevant links. Unknown topics fall back to the same category. Self-links and duplicate routes are excluded. This is a rule-based first pass, not a substitute for editorial review or a complete information architecture migration.

Explicit CMS service references take priority. Up to two internal service links and one relevant specialist link appear after the guide. Internal destinations cover tours, transfers, car rental and explicitly referenced accommodation. Specialist ownership routes proposals and weddings to Sertuin Events, vacation photography to Punta Cana Photo Edition, and corporate events to Punta Cana Venue Collection. Replaced the legacy conditional CTAs, including their possible empty transfer URLs.

Obvious proposal-package, wedding-planner and photographer sales titles are excluded as new recommendation targets pending consolidation review. This does not delete, deindex or redirect those articles and does not remove existing body links. Broader commercial-intent detection and contextual paragraph editing still need human editorial review.

## Validation

- 13 component and logic tests, including cross-category relevance, deterministic ordering, service ownership, CMS references and server-rendered anchors.
- Public-crawl simulation: 173 article pages, 928 proposed related links, 3 without related suggestions and 9 without new incoming related links. These counts exclude category indexes and do not measure existing body/navigation links. Categories were inferred from category-page links; CMS tags and explicit service references were unavailable in the simulation.
- `outputs/mapa-interlinking.json` in the task workspace records every simulated source and destination. Inspect remaining coverage gaps and commercial-review flags before editorial migration.
- Full Gatsby build and CMS-backed visual QA still require Contentful environment variables. Changes are local, not deployed.

## Verified specialist destinations

Checked the public service pages on 2026-09-18:

- https://sertuinevents.com/proposal/
- https://sertuinevents.com/puntacana-wedding-planner/
- https://puntacanaphotoedition.com/photoshoots
- https://puntacanavenuecollection.com/

No new article URLs, redirects, CMS edits or external-site edits are part of this commit.
