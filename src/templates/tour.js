import React from "react";
import Layout from "../components/layout";
import HeroImage from "../components/TourPageComponents/HeroImage";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground, facebook, instagram, email } =
    pageContext;
  console.log(tour)
  return (
    <Layout
      logo={logo}
      footerBackground={footerBackground}
      facebook={facebook}
      instagram={instagram}
      email={email}
    >
      <HeroImage image={tour.mainImage.file.url} />
    </Layout>
  );
};

export default tour;
