import React from 'react'
import { graphql } from "gatsby";
import Layout from "../../components/layout";
const index = ({ data }) => {
  return (
    <Layout
      logo={data.allContentfulIndexPageImages.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulIndexPageImages.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulIndexPageImages.edges[0].node.facebook}
      instagram={data.allContentfulIndexPageImages.edges[0].node.instagram}
      email={data.allContentfulIndexPageImages.edges[0].node.email}
    >
        Tours
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulIndexPageImages {
      edges {
        node {
          email
          facebook
          instagram
          heroText1
          heroText2
          footerBackground {
            gatsbyImageData(width: 1920)
            url
          }
          indexHero {
            gatsbyImageData(width: 1920)
            url
          }
          logo {
            gatsbyImage(formats: WEBP, width: 150)
            url
          }
        }
      }
    }
  }
`;

export const Head = () => <title>About Page</title>;

export default index