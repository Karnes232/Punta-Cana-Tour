import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    startAfter,
  } from "firebase/firestore";
  import { db } from "../config/firebase";
const Reviews = ({ pageContext, data }) => {
  const {
    logo,
    footerBackground,
    facebook,
    whatsApp,
    instagram,
    email,
    gImage,
  } = pageContext;
  console.log(pageContext);
  return (
    <>
      <Layout
        logo={logo}
        footerBackground={footerBackground}
        facebook={facebook}
        instagram={instagram}
        whatsApp={whatsApp}
        email={email}
        gImage={gImage}
        color="black"
      ></Layout>
    </>
  );
};

export default Reviews;

