import React from "react";
import Layout from "../components/layout";

import BlogBody from "../components/BlogComponents/BlogBody";
import HeroImage from "../components/BlogComponents/HeroImage";
import Seo from "../components/seo";
import ArticleHeader from "../components/BlogComponents/ArticleHeader";
import {
  articleSchema,
  blogPath,
  canonicalUrl,
} from "../utils/editorial";
import { breadcrumbsFor } from "../data/blog-categories";
import EditorialLinks from "../components/BlogComponents/EditorialLinks";
import TravelTopics from "../components/BlogComponents/TravelTopics";
import { applyEditorialUpdate } from "../utils/editorial-updates";
import { graphql } from "gatsby";
const blog = ({ pageContext, data }) => {
  const post = applyEditorialUpdate(data.allContentfulBlogPost.nodes[0]);
  const recommendationList = (pageContext.blogList || []);
  return (
    <Layout
      logo={pageContext.layout.logo}
      footerBackground={pageContext.layout.footerBackground.url}
      facebook={pageContext.layout.facebook}
      instagram={pageContext.layout.instagram}
      whatsApp={pageContext.layout.whatsApp}
      email={pageContext.layout.email}
      gImage={pageContext.layout.footerBackground.gatsbyImage}
      color="black"
    >
      <HeroImage
        backgroundImages={post.backgroundImage}
      />
      <ArticleHeader post={post} />
      {post.slug === 'punta-cana' && <TravelTopics />}
      <BlogBody context={post.body} title={post.title} relatedGuides={recommendationList.slice(0, 2)} />
      <EditorialLinks post={post} guides={recommendationList.slice(2)} />
    </Layout>
  );
};

export const Head = ({ data }) => {
  const post = applyEditorialUpdate(data.allContentfulBlogPost.nodes[0], false);
  const canonical = canonicalUrl(blogPath(post.slug));
  return (
    <>
      <Seo
        title={post.title}
        description={post.description}
        keywords={post.tags?.join(", ")}
        type="article"
        canonical={canonical}
        schemaMarkup={articleSchema(post, breadcrumbsFor(post))}
      />
      <link rel="canonical" href={canonical} />
    </>
  );
};

export default blog;

export const query = graphql`
  query MyQuery($id: String) {
    allContentfulBlogPost(filter: { id: { eq: $id } }) {
      nodes {
        slug
        id
        title
        tags
        publishedDate
        description
        category
        backgroundImage {
          title
          gatsbyImage(width: 2400, quality: 85, placeholder: DOMINANT_COLOR, formats: WEBP)
          url
        }
        reference {
          ... on ContentfulTours {
            name
            url
          }
          ... on ContentfulTransferPageContent {
            page
          }
          ... on ContentfulProperty {
            title
            urlSlug
          }
          ... on ContentfulPageContent {
            page
          }
          ... on ContentfulHotelsOrHostel {
            title
            urlSlug
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
              gatsbyImage(quality: 85,
                placeholder: DOMINANT_COLOR
                formats: WEBP
                width: 2000
              )
            }
          }
        }
      }
    }
  }
`;
