import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import TextComponent from "../../components/TextComponent/TextComponent";

const Privacy = ({ data }) => {
  return (
    <Layout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      email={data.allContentfulLayout.edges[0].node.email}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color="black"
    >
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title1}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph1?.paragraph1
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title2}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph2?.paragraph2
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title3}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph3?.paragraph3
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title4}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph4?.paragraph4
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title5}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph5?.paragraph5
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        title={data.allContentfulInformationLayout.nodes[0].title6}
        paragraph={
          data.allContentfulInformationLayout.nodes[0].paragraph6?.paragraph6
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
    </Layout>
  );
};

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
          whatsApp
        }
      }
    }
    allContentfulInformationLayout(filter: { page: { eq: "Privacy" } }) {
      nodes {
        page
        title1
        paragraph1 {
          paragraph1
        }
        title2
        paragraph2 {
          paragraph2
        }
        title3
        paragraph3 {
          paragraph3
        }
        title4
        paragraph4 {
          paragraph4
        }
        title5
        paragraph5 {
          paragraph5
        }
        title6
        paragraph6 {
          paragraph6
        }
      }
    }
  }
`;

export default Privacy;
