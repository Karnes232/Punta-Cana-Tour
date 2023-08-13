import React from "react";
import Layout from "../components/layout";
import HeroImage from "../components/TourPageComponents/HeroImage";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground, facebook, instagram, email } =
    pageContext;
  console.log(tour);
  return (
    <Layout
      logo={logo}
      footerBackground={footerBackground}
      facebook={facebook}
      instagram={instagram}
      email={email}
    >
      <HeroImage image={tour.mainImage?.url} />
      <h1 className="mt-5">{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.included}</h1>
      <h1>{tour.duration1}</h1>
      <h1>{tour.description1.description1}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.included}</h1>
      <h1>{tour.duration1}</h1>
      <h1>{tour.description1.description1}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
      <h1>{tour.name}</h1>
      <h1>{tour.price}</h1>
    </Layout>
  );
};

export default tour;
