import React from "react";
import Layout from "../components/TravelAgentComponents/Layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import Price from "../components/TourPageComponents/Price";
import TourInfo from "../components/TourPageComponents/TourInfo";
import TextComponent from "../components/TourPageComponents/TextComponent";
import SwiperCarousel from "../components/TourPageComponents/SwiperCarousel";
import ListGroup from "../components/TourPageComponents/ListGroup";
import Seo from "../components/seo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TourButton from "../components/TravelAgentComponents/TourButton";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
const tour = ({ pageContext }) => {
  const {
    tour,
    logo,
    footerBackground,
    facebook,
    whatsApp,
    instagram,
    email,
    gImage,
  } = pageContext;
  const newPrice = tour.price * 0.85;
  const notifyAddedToCart = (tour) =>
    toast.success(`${tour.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#fff",
        color: "#000",
      },
    });

  const notifyRemovedFromCart = (tour) =>
    toast.error(`${tour.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });
  return (
    <Layout
      logo={logo}
      footerBackground={footerBackground}
      facebook={facebook}
      instagram={instagram}
      whatsApp={whatsApp}
      email={email}
      gImage={gImage}
      color="black"
    >
      <ToastContainer />
      <div className="lg:hidden">
        <HeroComponent
          imageUrl={tour.mainImage?.url}
          gImage={tour.mainImage?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
      </div>
      <div className="hidden lg:flex max-w-6xl mx-auto">
        <PhotoGrid tourPhotos={tour.images} />
      </div>
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
        <TourInfo name={tour.name} category={tour.category} />
        <TourButton
          text="Book Now"
          customClass=""
          tour={tour}
          notifyAddedToCart={notifyAddedToCart}
          notifyRemovedFromCart={notifyRemovedFromCart}
        />
        <Price price={newPrice.toFixed(2)} duration={tour.duration1} />
        <TextComponent paragraph={tour.description1.description1} />
      </div>
      <SwiperCarousel className="mt-5" photoList={tour.images} />
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
        <TextComponent
          paragraph={tour.tourPageDescription1.tourPageDescription1}
        />
        <TextComponent
          paragraph={tour.tourPageDescription2.tourPageDescription2}
        />

        <ListGroup tour={tour} />
      </div>
    </Layout>
  );
};

export default tour;

export const Head = ({ pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.tour.name}
        description={pageContext.tour.description1.description1}
        keywords={pageContext.tour.keywords?.join(", ")}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/travelagent/tours/${pageContext.tour.url}`}
      />
    </>
  );
};
