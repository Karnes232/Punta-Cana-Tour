import React from "react";
import Layout from "../components/layout";

import BlogBody from "../components/BlogComponents/BlogBody";
import HeroImage from "../components/BlogComponents/HeroImage";
import Seo from "../components/seo";
import Recommendations from "../components/BlogComponents/Recommendations";
import Button from "../components/BlogComponents/Button";
import ActivityLink from "../components/BlogComponents/ActivityLink";
const blog = ({ pageContext }) => {
  let recommendationList = [];
  pageContext.blogList.forEach((blog) => {
    if (pageContext.blog.category === blog.category) {
      recommendationList.push(blog);
    }
  });
  console.log(pageContext.blog.category.toLowerCase());
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
      {/* <Button text="Book Now" url={pageContext.blog.reference.url} /> */}
      <BlogBody context={pageContext.blog.body} />
      <ActivityLink
        name={pageContext.blog.reference.name}
        url={`/${pageContext.blog.category.toLowerCase()}/${pageContext.blog.reference.url}`}
      />
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
