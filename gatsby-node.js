const path = require("path");
const { blogPath } = require("./src/utils/editorial");
const { relatedGuides } = require("./src/utils/interlinking");
const { applyEditorialUpdate } = require("./src/utils/editorial-updates");
require("dotenv").config();

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulTours {
        nodes {
          id
          name
          price
          url
          category
          mainImage {
            url
            gatsbyImage(quality: 80, width: 400, placeholder: DOMINANT_COLOR, formats: WEBP)
          }
          description1 {
            description1
          }
        }
      }
      allContentfulHotelsOrHostel {
        nodes {
          id
          urlSlug
        }
      }
      allContentfulProperty {
        nodes {
          id
          urlSlug
        }
      }
      allContentfulLayout {
        edges {
          node {
            logo {
              gatsbyImage(quality: 80, width: 150, formats: WEBP)
            }
            footerBackground {
              url
              gatsbyImage(quality: 85, width: 1920, formats: WEBP)
            }
            email
            facebook
            instagram
            whatsApp
          }
        }
      }
      allContentfulBlogPost {
        nodes {
          slug
          id
          title
          description
          category
          tags
          backgroundImage {
            gatsbyImage(quality: 80, width: 400, placeholder: DOMINANT_COLOR, formats: WEBP)
            url
          }
        }
      }
    }
  `);

  const tourTemplate = path.resolve(`src/templates/tour.js`);
  if (queryResults.errors) {
    throw new Error(
      `Contentful page query failed: ${queryResults.errors
        .map((error) => error.message)
        .join("; ")}`,
    );
  }
  const travelAgentTemplate = path.resolve(`src/templates/travelAgent.js`);
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const propertyTemplate = path.resolve(`src/templates/property.js`);
  const hotelTemplate = path.resolve(`src/templates/hotel.js`);
  const reviewsTemplate = path.resolve(`src/templates/reviews.js`);
  queryResults.data.allContentfulTours.nodes.forEach((node) => {
    createPage({
      path: `/tours/${node.url?.trim()}`,
      component: tourTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id,
        tour: node,
        tourList: queryResults.data.allContentfulTours.nodes,
        logo: queryResults.data.allContentfulLayout.edges[0].node.logo
          .gatsbyImage,
        footerBackground:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .url,
        facebook: queryResults.data.allContentfulLayout.edges[0].node.facebook,
        whatsApp: queryResults.data.allContentfulLayout.edges[0].node.whatsApp,
        instagram:
          queryResults.data.allContentfulLayout.edges[0].node.instagram,
        email: queryResults.data.allContentfulLayout.edges[0].node.email,
        gImage:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .gatsbyImage,
      },
    });
    createPage({
      path: `/reviews/${node.url?.trim()}`,
      component: reviewsTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id,
        tour: node,
        // Reviews are fetched client-side (see src/templates/reviews.js); no
        // build-time Firestore reads.
        tourReviews: [],
        logo: queryResults.data.allContentfulLayout.edges[0].node.logo
          .gatsbyImage,
        footerBackground:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .url,
        facebook: queryResults.data.allContentfulLayout.edges[0].node.facebook,
        whatsApp: queryResults.data.allContentfulLayout.edges[0].node.whatsApp,
        instagram:
          queryResults.data.allContentfulLayout.edges[0].node.instagram,
        email: queryResults.data.allContentfulLayout.edges[0].node.email,
        gImage:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .gatsbyImage,
      },
    });
    createPage({
      path: `/travelagent/tours/${node.url?.trim()}`,
      component: travelAgentTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id,
        tour: node,
        logo: queryResults.data.allContentfulLayout.edges[0].node.logo
          .gatsbyImage,
        footerBackground:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .url,
        facebook: queryResults.data.allContentfulLayout.edges[0].node.facebook,
        whatsApp: queryResults.data.allContentfulLayout.edges[0].node.whatsApp,
        instagram:
          queryResults.data.allContentfulLayout.edges[0].node.instagram,
        email: queryResults.data.allContentfulLayout.edges[0].node.email,
        gImage:
          queryResults.data.allContentfulLayout.edges[0].node.footerBackground
            .gatsbyImage,
      },
    });
  });
  const blogPaths = new Set();
  // Preserve entries verified against production page-data on 2026-09-18
  // for known duplicate CMS slugs. Unexpected collisions still fail below.
  const publishedEntries = require("./src/data/published-blog-entries.json");
  const sourcePosts = queryResults.data.allContentfulBlogPost.nodes;
  const blogPosts = sourcePosts.filter(node => {
    const preferred = publishedEntries[blogPath(node.slug)];
    return !preferred || node.id === preferred || !sourcePosts.some(post => post.id === preferred);
  }).map(node => applyEditorialUpdate(node, false));
  blogPosts.forEach((node) => {
    if (!node.slug?.trim()) throw new Error(`Blog ${node.id} is missing its slug`);
    const route = blogPath(node.slug);
    const key = new URL(route, "https://puntacanatourstore.com").pathname;
    if (blogPaths.has(key)) throw new Error(`Duplicate blog route: ${key}`);
    blogPaths.add(key);
    createPage({
      path: route,
      component: blogTemplate,
      context: {
        id: node.id,
        blog: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
        blogList: relatedGuides(
          blogPosts,
          node,
        ),
      },
    });
  });
  queryResults.data.allContentfulProperty.nodes.forEach((node) => {
    createPage({
      path: `/properties/${node.urlSlug?.trim()}`,
      component: propertyTemplate,
      context: {
        id: node.id,
        property: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
      },
    });
  });
  queryResults.data.allContentfulHotelsOrHostel.nodes.forEach((node) => {
    createPage({
      path: `/hotels/${node.urlSlug?.trim()}`,
      component: hotelTemplate,
      context: {
        id: node.id,
        hotel: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
      },
    });
  });
};
