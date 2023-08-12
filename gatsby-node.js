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
            gatsbyImage(width: 2000, formats: WEBP)
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
            gatsbyImage(width: 2000, formats: WEBP)
            file {
              url
            }
          }
          url
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
            }
            email
            facebook
            instagram
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
        logo: queryResults.data.allContentfulLayout.edges[0].node.logo
          .gatsbyImage,
        footerBackground:
          queryResults.data.allContentfulLayout.edges[0].node
            .footerBackground.url,
        facebook:
          queryResults.data.allContentfulLayout.edges[0].node.facebook,
        instagram:
          queryResults.data.allContentfulLayout.edges[0].node
            .instagram,
        email:
          queryResults.data.allContentfulLayout.edges[0].node.email,
      },
    });
  });
};
