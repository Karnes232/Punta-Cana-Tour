import React from "react";
import Layout from "../components/layout";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground } = pageContext;
  console.log(tour);
  return (
    <Layout logo={logo} footerBackground={footerBackground}>
      tour
    </Layout>
  );
};

export default tour;
