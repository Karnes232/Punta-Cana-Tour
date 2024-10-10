const path = require("path");
const admin = require("firebase-admin");
// const serviceAccount = require('./src/data/punta-cana-tour-store-firebase-adminsdk-jrnbr-ee3468fd7b.json');
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }), // You can add this for clarity but it's optional
});
const db = admin.firestore();
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
            gatsbyImage(width: 1920, formats: WEBP)
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
              gatsbyImage(width: 150, formats: WEBP)
            }
            footerBackground {
              url
              gatsbyImage(width: 1920, formats: WEBP)
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
          backgroundImage {
            gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
            url
          }
        }
      }
    }
  `);

  const tourTemplate = path.resolve(`src/templates/tour.js`);
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
    let tourReviews = [];
    const fetchReviews = async () => {
      const reviewsSnapshot = await db.collection(`reviews-${node.url}`).get();
      const reviews = reviewsSnapshot.docs.map((doc) => doc.data());
      tourReviews.push(reviews);
      return reviews;
    };
    fetchReviews();
    createPage({
      path: `/reviews/${node.url?.trim()}`,
      component: reviewsTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id,
        tour: node,
        tourReviews: tourReviews,
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
  queryResults.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug?.trim()}`,
      component: blogTemplate,
      context: {
        id: node.id,
        blog: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
        blogList: queryResults.data.allContentfulBlogPost.nodes,
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
