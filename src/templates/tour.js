import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
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
      <HeroComponent
        imageUrl={
          tour.mainImage?.url
        }
        gImage={
          tour.mainImage?.gatsbyImage
        }
        heroText=""
        heroText2=""
        button={false}
      />
    
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

export const Head = ({ pageContext }) => <title>{pageContext.tour.name} Page</title>;