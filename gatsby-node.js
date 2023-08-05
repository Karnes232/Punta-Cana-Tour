const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulTour {
        nodes {
          name
          price
          mainImage {
            file {
              url
            }
          }
          description1 {
            description1
          }
          included
          duration1
          images {
            file {
              url
            }
          }
          url
        }
      }
      allContentfulIndexPageImages {
        edges {
          node {
            footerBackground {
              url
            }
            logo {
              url
            }
          }
        }
      }
    }
  `);
  const tourTemplate = path.resolve(`src/templates/tour.js`);
  queryResults.data.allContentfulTour.nodes.forEach((node) => {
    createPage({
      path: `/tours/${node.url}`,
      component: tourTemplate,
      context: {
        // This time the entire product is passed down as context
        tour: node,
        logo: queryResults.data.allContentfulIndexPageImages.edges[0].node.logo
          .url,
        footerBackground:
          queryResults.data.allContentfulIndexPageImages.edges[0].node
            .footerBackground.url,
      },
    });
  });
};
