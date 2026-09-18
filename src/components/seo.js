/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({
  description,
  title,
  children,
  schemaMarkup,
  type = "website",
  canonical,
  image,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="X6o1J7WFsPmCozyJoUl7AQ"
        defer
      ></script>
      <title>{title ? (defaultTitle ? `${title} | ${defaultTitle}` : title) : defaultTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaultTitle} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description} />
      {children}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}

export default Seo;
