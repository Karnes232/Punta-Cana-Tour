# Editorial SEO implementation — 2026-09-18

## Technical foundation

- Fixed the paragraph renderer that emitted an empty H1 for every paragraph.
- Added a template-owned article H1, visible breadcrumbs and the existing CMS publication date. Demoted body H1s, removed empty headings and duplicate opening titles, and repaired skipped heading levels without changing CMS text.
- Removed delayed opacity animations from article text so server-rendered content remains visible without JavaScript.
- Aligned article canonicals and card links with the existing trailing-slash URLs. Also aligned tour, hotel, property and agent-template canonicals.
- Preserved historical slug spelling, case and spaces. Removed literal tab/newline characters during article route generation, with collision detection. The Saona photography entry was inspected in Contentful and contains an internal tab; its public encoded URL is retained rather than replaced with a new slug.
- Added BlogPosting and BreadcrumbList JSON-LD matching visible metadata. No fabricated authors, reviews, ratings, verification dates or modification dates.
- Assigned unique titles and descriptions to the blog index and ten existing category indexes; category cards no longer emit H1s.
- Restricted related cards to six unique articles in the same category, excluding the current article. Reduced serialized page context accordingly.
- Replaced the randomly ordered editorial photo grid with a deterministic responsive Gatsby gallery, preserving all available editorial images. Only the first image loads eagerly. Missing optional images no longer crash the article hero, recommendation card or embedded-asset renderer.
- Excluded agent, cart, payment, invoice, thank-you, placeholder and file paths from the sitemap. Added noindex to operational HTML pages while retaining crawl access. Robots now points to the sitemap index.

## Validation and deployment

Run `npm ci` and `npm run test:seo` using Node 22 as configured in the repository. The test suite renders the actual editorial components and validates URLs, JSON-LD, sitemap policy, recommendations, SSR noindex and Gatsby page creation.

Local full-build validation requires CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN. The browser's authenticated Contentful session does not populate these environment variables. The attempted build stops at Contentful plugin option validation. Do not treat component tests as a successful Gatsby production build; a Netlify deploy preview using the existing CMS environment is required before merging.

After deployment, inspect the generated HTML, mobile layout, sitemap index, an operational noindex page, and the Saona photography URL. Confirm single H1, canonical 200, parseable schema and correct breadcrumb links.

## Not performed by this change

No CMS articles have been rewritten, deleted, unpublished or consolidated. No new articles or Spanish copies have been created. No content-migration redirects have been activated. The audit's MERGE targets remain candidates pending full content/authority review. Source research, editorial consolidation and verified living-content dates remain outstanding.

The CMS schema exposes `publishedDate`; content update/verification dates and public author attribution require dedicated editorial fields or reviewed source data. Do not substitute Contentful system updates or deploy timestamps for a factual review.

## Evidence and references

The baseline audit in this directory was generated before changes from the 2026-09-17 public crawl. It contains 191 editorial URLs (including six historical 404s found through search), with provisional per-URL actions. It is not a migration configuration.

- [Gatsby sitemap plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)
- [Gatsby trailingSlash configuration](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#trailingslash)
- [Inspected Contentful Saona photography entry](https://app.contentful.com/spaces/h9wjlzs95u7s/environments/master/entries/553cVc2LJgzcZ0WMvb0dPy)

Rollback: revert the technical commit. CMS content and slugs have not been mutated.
