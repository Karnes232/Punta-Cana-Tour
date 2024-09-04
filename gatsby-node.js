const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulTours {
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
          daysAvailable
          videoUrl
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
          blog_post {
            title
            description
            slug
            backgroundImage {
              gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
            }
          }
        }
      }
      allContentfulProperty {
        nodes {
          title
          urlSlug
          saleOrRent
          propertyType
          price
          generalLocation
          bedrooms
          bathrooms
          amenities
          videoUrl
          description {
            raw
          }
          seoTitle
          seoDescription
          seoKeywords
          mainImage {
            gatsbyImage(width: 2000, formats: WEBP, placeholder: BLURRED)
            title
            url
          }
          squareFeet
          images {
            title
            gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
            url
            width
            height
          }
        }
      }
      allContentfulHotelsOrHostel {
        nodes {
          title
          urlSlug
          hotelType
          price
          generalLocation
          mainImage {
            gatsbyImage(width: 2000, formats: WEBP, placeholder: BLURRED)
            title
            url
          }
          images {
            title
            gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
            url
            width
            height
          }
          description {
            raw
          }
          seoTitle
          seoDescription
          seoKeywords
          videoUrl
          amenities
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
          title
          tags
          slug
          publishedDate(formatString: "MMMM do, YYYY")
          description
          category
          backgroundImage {
            gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
            url
          }
          reference {
            ... on ContentfulTours {
              name
              url
            }
          }
          body {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                title
                file {
                  url
                }
                gatsbyImage(placeholder: BLURRED, formats: WEBP, width: 2000)
              }
            }
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
  queryResults.data.allContentfulTours.nodes.forEach((node) => {
    createPage({
      path: `/tours/${node.url}`,
      component: tourTemplate,
      context: {
        // This time the entire product is passed down as context
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
  queryResults.data.allContentfulBlogPost.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogTemplate,
      context: {
        blog: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
        blogList: queryResults.data.allContentfulBlogPost.nodes,
      },
    });
  });
  queryResults.data.allContentfulProperty.nodes.forEach((node) => {
    createPage({
      path: `/properties/${node.urlSlug}`,
      component: propertyTemplate,
      context: {
        property: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
      },
    });
  });
  queryResults.data.allContentfulHotelsOrHostel.nodes.forEach((node) => {
    createPage({
      path: `/hotels/${node.urlSlug}`,
      component: hotelTemplate,
      context: {
        hotel: node,
        layout: queryResults.data.allContentfulLayout.edges[0].node,
      },
    });
  });
};
