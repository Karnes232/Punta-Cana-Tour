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
import PhotoAlbum from "react-photo-album";
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

  let photoList = [];

  tour.images.forEach((image, key) => {
    const srcSet = image.gatsbyImage.images.fallback.srcSet.split(",");
    const photoObject = {
      src: image.url,
      width: image.gatsbyImage.width,
      height: image.gatsbyImage.height,
      // srcSet: [
      //   {
      //     src: srcSet[2],
      //     width: 1920,
      //   },
      //   {
      //     src: srcSet[1],
      //     width: 640,
      //   },
      //   {
      //     src: srcSet[0],
      //     width: 480,
      //   },
      // ],
    };
    photoList.push(photoObject);
  });
  photoList = photoList.sort(() => Math.random() - 0.5);

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
          <PhotoAlbum
            layout="columns"
            photos={photoList.slice(0, 6)}
            defaultContainerWidth={1920}
            padding={0}
            spacing={0}
          />
        </div>
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
        <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
          <h5 className="font-bold text-lg">You Might Also Like</h5>
          <YouMayLikeSwiper tourList={maybeYouLike} />
        </div>
      </Layout>
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
