import React from "react";
import Layout from "../components/layout";

import BlogBody from "../components/BlogComponents/BlogBody";
import HeroImage from "../components/BlogComponents/HeroImage";
import Seo from "../components/seo";
import Recommendations from "../components/BlogComponents/Recommendations";
const blog = ({ pageContext }) => {
  let recommendationList = [];
  pageContext.blogList.forEach((blog) => {
    if (pageContext.blog.category === blog.category) {
      recommendationList.push(blog);
    }
  });
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
      <Recommendations list={recommendationList} />
    </Layout>
  );
};

export const Head = ({ pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.blog.title}
        description={pageContext.blog.description}
        keywords={pageContext.blog.tags.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/contact/" />
    </>
  );
};

export default blog;
