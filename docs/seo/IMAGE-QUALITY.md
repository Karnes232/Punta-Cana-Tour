# Photography and related guide updates — 2026-09-18

Seven owner-supplied files were processed without generative reconstruction. Originals on the Desktop were not modified. Adjustments use mild edge sharpening; only the two large Saona photographs receive small brightness increases. No artificial upscaling, object removal, sky replacement or invented texture was applied. Small files still contain limited original detail.

Full-resolution JPEG review copies and WebP derivatives are in the task workspace's `outputs/imagenes-mejoradas/` folder, alongside original copies and a manifest with dimensions, source SHA-256 hashes and derivative sizes. The web variants never exceed the source dimensions; their maximum width is 2560 pixels. Some enhanced copies are larger than the compressed source because preserving detail requires more data.

## Website integration

- The two high-resolution Saona originals are prepended to Saona blog galleries and recommendation cards. Existing CMS images are retained.
- The supplied `PARTY-1.jpg` is used in the party-boat blog guide with a visible illustrative-image caption. It is not asserted to depict a verified Punta Cana vessel or booking.
- `caption.jpg` visibly includes Mexico branding and is not used as a Punta Cana service photo. The hammock, lounger and aerial images are enhanced review assets, pending location/usage identification; filenames alone do not establish their geography.
- Static assets include descriptive alt text, explicit dimensions and responsive WebP candidates. Article schema resolves their relative URLs against the site origin.
- Contentful's installed image resolver defaults to quality 50. Queries without explicit settings now request quality 80 for smaller images and 85 for large images. The blog hero requests 2400 pixels at quality 85. This improves derivative encoding, not detail missing from a low-resolution CMS original.
- The shared photo grid consumes responsive image candidates while preserving its existing column layout. New colors or a separate blog design were not introduced.

## Existing content improved

Rewrote `Saona-Island-travel-guide` and `what-to-expect-party-boat-excursion-punta-cana` at their existing URLs. Removed generic promises of wildlife, universal activities and inclusions. Added practical itinerary, pickup, conditions and packing questions. Saona cites the Ministry of Tourism; party-boat water-safety advice cites CDC. These additions bring repository-managed rewrites to six. No content consolidation or redirects have been activated.

## Verification and limits

The image manifest and integration tests check asset availability, responsive dimensions, retention of CMS media, duplicate prevention and the party-photo caption. All changed JavaScript and GraphQL documents are parsed. Contentful-backed production build, mobile performance and live CDN output still require the pending environment/access setup. The larger quality settings may increase delivered bytes; review a deploy preview before release.

Nothing has been uploaded to Contentful or deployed. Repository-managed article overrides continue to take precedence over CMS title/body edits for their six matching slugs; see CONTENT-UPDATES.md.
