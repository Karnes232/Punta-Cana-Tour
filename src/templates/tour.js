import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import Button from "../components/TourPageComponents/Button";
import Price from "../components/TourPageComponents/Price";
import TourInfo from "../components/TourPageComponents/TourInfo";
import TextComponent from "../components/TourPageComponents/TextComponent";
import SwiperCarousel from "../components/TourPageComponents/SwiperCarousel";
import ListGroup from "../components/TourPageComponents/ListGroup";
import Seo from "../components/seo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaybeLikeTourCard from "../components/TourCardComponent/MaybeLikeTourCard";
import YouMayLikeSwiper from "../components/YouMayLikeSwiper/YouMayLikeSwiper";
const tour = ({ pageContext }) => {
  const {
    tour,
    tourList,
    logo,
    footerBackground,
    facebook,
    instagram,
    email,
    gImage,
  } = pageContext;

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

  let maybeYouLike = [];
  tourList.forEach((individualTour) => {
    individualTour.category.forEach((category) => {
      if (tour.category.includes(category)) {
        if (individualTour.name !== tour.name) {
          maybeYouLike.push(individualTour);
        }
      }
    });
  });
  return (
    <>
      <Layout
        logo={logo}
        footerBackground={footerBackground}
        facebook={facebook}
        instagram={instagram}
        email={email}
        gImage={gImage}
        color="black"
      >
        <ToastContainer />
        <HeroComponent
          imageUrl={tour.mainImage?.url}
          gImage={tour.mainImage?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
        <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
          <TourInfo name={tour.name} category={tour.category} />
          <Button
            text="Book Now"
            customClass=""
            tour={tour}
            notifyAddedToCart={notifyAddedToCart}
            notifyRemovedFromCart={notifyRemovedFromCart}
          />
          <Price price={tour.price} duration={tour.duration1} />
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
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
        <h5 className="font-bold text-lg">You Might Also Like</h5>
        <YouMayLikeSwiper tourList={maybeYouLike} />
      </div>
    </>
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
        href={`https://puntacanatourstore.com/tours/${pageContext.tour.url}`}
      />
    </>
  );
};
