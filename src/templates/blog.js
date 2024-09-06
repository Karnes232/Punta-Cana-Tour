import React from "react";
import Layout from "../components/layout";

import BlogBody from "../components/BlogComponents/BlogBody";
import HeroImage from "../components/BlogComponents/HeroImage";
import Seo from "../components/seo";
import Recommendations from "../components/BlogComponents/Recommendations";
import ActivityLink from "../components/BlogComponents/ActivityLink";
import TransferLink from "../components/BlogComponents/TransferLink";
const blog = ({ pageContext }) => {
  let recommendationList = [];
  pageContext.blogList.forEach((blog) => {
    if (blog.category === "Tours") {
      if (pageContext.blog.category === blog.category) {
        recommendationList.push(blog);
      }
    } else {
      if (pageContext.blog.category !== "Tours") {
        recommendationList.push(blog);
      }
    }
  });
  console.log(pageContext.blog.category);
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
      <HeroImage backgroundImages={pageContext.blog.backgroundImage} />
      <BlogBody context={pageContext.blog.body} />

      {pageContext.blog.category === "Tours" &&
        pageContext.blog.reference !== null && (
          <ActivityLink
            name={pageContext.blog?.reference?.name}
            url={`/${pageContext?.blog?.category
              .toLowerCase()
              .replaceAll(/\s/g, "")}/${pageContext?.blog?.reference?.url}`}
          />
        )}
      {pageContext.blog.category === "Transfer" &&
        pageContext.blog.reference !== null && (
          <TransferLink name={pageContext.blog?.reference?.page} />
        )}
      <Recommendations
        list={recommendationList}
        title={"You Might Also Like"}
      />
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.blog.title}
        description={pageContext.blog.description}
        keywords={pageContext.blog?.tags?.join(", ")}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/blog/${pageContext.blog.slug}`}
      />
    </>
  );
};

export default blog;
