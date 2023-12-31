const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulTour {
        nodes {
          name
          price
          url
          included
          whatToBring
          importantNotes
          duration1
          featured
          category
          keywords
          images {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          mainImage {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          description1 {
            description1
          }
          tourPageDescription1 {
            tourPageDescription1
          }
          tourPageDescription2 {
            tourPageDescription2
          }
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
    }
  `);
  const tourTemplate = path.resolve(`src/templates/tour.js`);
  const travelAgentTemplate = path.resolve(`src/templates/travelAgent.js`);
  queryResults.data.allContentfulTour.nodes.forEach((node) => {
    createPage({
      path: `/tours/${node.url}`,
      component: tourTemplate,
      context: {
        // This time the entire product is passed down as context
        tour: node,
        tourList: queryResults.data.allContentfulTour.nodes,
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
      path: `/travelagent/tours/${node.url}`,
      component: travelAgentTemplate,
      context: {
        // This time the entire product is passed down as context
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
};
