import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import Button from "../components/TourPageComponents/Button";
import Price from "../components/TourPageComponents/Price";
import TourInfo from "../components/TourPageComponents/TourInfo";
import TextComponent from "../components/TourPageComponents/TextComponent";
import SwiperCarousel from "../components/TourPageComponents/SwiperCarousel";
const tour = ({ pageContext }) => {
  const { tour, logo, footerBackground, facebook, instagram, email, gImage } =
    pageContext;
  console.log(tour);
  return (
    <Layout
      logo={logo}
      footerBackground={footerBackground}
      facebook={facebook}
      instagram={instagram}
      email={email}
      gImage={gImage}
    >
      <HeroComponent
        imageUrl={tour.mainImage?.url}
        gImage={tour.mainImage?.gatsbyImage}
        heroText=""
        heroText2=""
        button={false}
      />
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
        
          <TourInfo name={tour.name} category={tour.category} />
          <Button text="Book Now" customClass="mb-2" />
          <Price price={tour.price} />
          <TextComponent
            paragraph={tour.tourPageDescription1.tourPageDescription1}
          />
   
      </div>
      <SwiperCarousel className="mt-5" photoList={tour.images} />
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
      <TextComponent
            paragraph={tour.tourPageDescription2.tourPageDescription2}
          />
      </div>
      <div className="min-h-screen"></div>
    </Layout>
  );
};

export default tour;

export const Head = ({ pageContext }) => (
  <title>{pageContext.tour.name} Page</title>
);
