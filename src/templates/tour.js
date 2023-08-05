import React from "react";
import Layout from "../components/layout";
import HeroImage from "../components/TourPageComponents/HeroImage";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground } = pageContext;

  return (
    <Layout logo={logo} footerBackground={footerBackground}>
      <HeroImage image={tour.mainImage.file.url} />
    </Layout>
  );
};

export default tour;
