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
  relatedPosts,
} from "../utils/editorial";
import { breadcrumbsFor } from "../data/blog-categories";
import Recommendations from "../components/BlogComponents/Recommendations";
import ActivityLink from "../components/BlogComponents/ActivityLink";
import TransferLink from "../components/BlogComponents/TransferLink";
import CarRentalLink from "../components/BlogComponents/CarRentalLink";
import PropertyLink from "../components/BlogComponents/PropertyLink";
import HotelLink from "../components/BlogComponents/HotelLink";
import { graphql } from "gatsby";
const blog = ({ pageContext, data }) => {
  const post = data.allContentfulBlogPost.nodes[0];
  const recommendationList = relatedPosts(pageContext.blogList, post);
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
        backgroundImages={data?.allContentfulBlogPost?.nodes[0].backgroundImage}
      />
      <ArticleHeader post={post} />
      <BlogBody context={post.body} title={post.title} />

      {data?.allContentfulBlogPost?.nodes[0].category === "Tours" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <ActivityLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.name}
            url={`/${data?.allContentfulBlogPost?.nodes[0]?.category
              .toLowerCase()
              .replaceAll(
                /\s/g,
                "",
              )}/${data?.allContentfulBlogPost?.nodes[0]?.reference?.url?.trim()}`}
            page={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      {data?.allContentfulBlogPost?.nodes[0].category === "Transfer" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <TransferLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      {data?.allContentfulBlogPost?.nodes[0].category === "Flights" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <TransferLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      {data?.allContentfulBlogPost?.nodes[0].category === "Car Rental" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <CarRentalLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      {data?.allContentfulBlogPost?.nodes[0].category === "Property" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <PropertyLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.title}
            url={data?.allContentfulBlogPost?.nodes[0]?.reference?.urlSlug?.trim()}
            page={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      {data?.allContentfulBlogPost?.nodes[0].category === "Hotel" &&
        data?.allContentfulBlogPost?.nodes[0].reference !== null && (
          <HotelLink
            name={data?.allContentfulBlogPost?.nodes[0]?.reference?.title}
            url={data?.allContentfulBlogPost?.nodes[0]?.reference?.urlSlug?.trim()}
            page={data?.allContentfulBlogPost?.nodes[0]?.reference?.page}
          />
        )}
      <Recommendations
        list={recommendationList}
        title={"You Might Also Like"}
      />
    </Layout>
  );
};

export const Head = ({ data }) => {
  const post = data.allContentfulBlogPost.nodes[0];
  const canonical = canonicalUrl(blogPath(post.slug));
  return (
    <>
      <Seo
        title={data?.allContentfulBlogPost?.nodes[0].title}
        description={data?.allContentfulBlogPost?.nodes[0].description}
        keywords={data?.allContentfulBlogPost?.nodes[0]?.tags?.join(", ")}
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
          gatsbyImage(width: 2000, placeholder: DOMINANT_COLOR, formats: WEBP)
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
              gatsbyImage(
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
