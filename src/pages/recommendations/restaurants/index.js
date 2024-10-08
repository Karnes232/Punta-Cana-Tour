import React from "react";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";
import HeroComponent from "../../../components/HeroComponent/HeroComponent";
import TextComponent from "../../../components/TextComponent/TextComponent";
import PostList from "../../../components/BlogComponents/PostList";
import RichTextComponent from "../../../components/TextComponent/RichTextComponent";

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
        imageUrl={
          data.allContentfulRecommendationPagesLayout.edges[0].node.mainImage
            .file.url
        }
        gImage={
          data.allContentfulRecommendationPagesLayout.edges[0].node.mainImage
            .gatsbyImage
        }
        heroText=""
        heroText2=""
        button={false}
      />

      <TextComponent
        title={data.allContentfulRecommendationPagesLayout.edges[0].node.title}
        className="my-5 text-3xl md:text-4xl"
      />
      <RichTextComponent
        context={data.allContentfulRecommendationPagesLayout.edges[0].node.body}
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
    allContentfulSeo(filter: { page: { eq: "Restaurants" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulBlogPost(filter: { category: { eq: "Restaurants" } }) {
      nodes {
        title
        description
        slug
        backgroundImage {
          gatsbyImage(formats: WEBP, width: 400, placeholder: BLURRED)
        }
      }
    }
    allContentfulRecommendationPagesLayout(
      filter: { page: { eq: "Restaurants" } }
    ) {
      edges {
        node {
          title
          body {
            raw
          }
          mainImage {
            gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
            file {
              url
            }
          }
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
        href="https://puntacanatourstore.com/recommendations/restaurants/"
      />
    </>
  );
};

export default Index;
