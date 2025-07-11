import React from "react";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";
import HeroComponent from "../../../components/HeroComponent/HeroComponent";
import TextComponent from "../../../components/BlogComponents/TextComponent";
import PostList from "../../../components/BlogComponents/PostList";

const Index = ({ data }) => {
  return (
    <Layout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      email={data.allContentfulLayout.edges[0].node.email}
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color="black"
    >
      <HeroComponent
        gImage={
          data.allContentfulBlogLayout.nodes[0].localBusinessImage.gatsbyImage
        }
        heroText="Local Business Blogs"
        button={false}
      />
      <TextComponent
        title="Blog Posts"
        className="my-5 2xl:mb-2 2xl:mt-10 text-2xl md:text-3xl"
        paragraph={
          data.allContentfulBlogLayout.nodes[0].localBusinessDescription
            .localBusinessDescription
        }
        pClassName="my-2 2xl:mb-10"
      />
      <PostList list={data.allContentfulBlogPost.nodes} />
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
    allContentfulBlogLayout {
      nodes {
        localBusinessImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 2000)
        }
        localBusinessDescription {
          localBusinessDescription
        }
      }
    }
    allContentfulBlogPost(
      filter: { category: { eq: "Local Business" } }
      sort: { createdAt: DESC }
    ) {
      nodes {
        title
        description
        slug
        backgroundImage {
          gatsbyImage(formats: WEBP, width: 400, placeholder: BLURRED)
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Blog Page" } }) {
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
      <link
        rel="canonical"
        href="https://puntacanatourstore.com/blog/local-business/"
      />
    </>
  );
};

export default Index;
