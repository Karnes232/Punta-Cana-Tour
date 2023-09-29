import React from 'react'
import Seo from '../../components/seo';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import TextComponent from '../../components/TextComponent/TextComponent';

const Index = ({data}) => {
  return (
    <Layout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      email={data.allContentfulLayout.edges[0].node.email}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color='black'
    >
       <TextComponent
        title='TRANSFERS'
        paragraph='TRANSFERS TO ANY LOCATION IN THE DOMINICAN REPUBLIC ARE PROVIDED BY COMFORTABLE MINIVANS, BUSES AND LUXURY CARS. OUR VEHICLES ADHERE TO THE HIGHEST STANDARDS, AND OUR SAFETY MEASURES WILL LEAVE YOU WITH A SENSE OF SECURITY.'
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
    </Layout>
    
  )
}

export const query = graphql`
  query MyQuery {
    
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
        }
      }
    }

    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }


  }
`;

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/" />
    </>
  );
};

export default Index