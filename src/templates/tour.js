import React, { useEffect, useState } from "react";
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
import YouMayLikeSwiper from "../components/YouMayLikeSwiper/YouMayLikeSwiper";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import Video from "../components/TourPageComponents/Video";
import Recommendations from "../components/BlogComponents/Recommendations";
import { graphql } from "gatsby";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";
const Tour = ({ pageContext, data }) => {
  const {
    tourList,
    logo,
    footerBackground,
    facebook,
    whatsApp,
    instagram,
    email,
    gImage,
  } = pageContext;
  const tour = data.allContentfulTours.nodes[0];
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
  const notifyCartFull = (tour) =>
    toast.error(`Your Cart is Full!`, {
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

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position

      // Define the scroll position at which the button should become sticky
      const triggerPosition = 500; // Adjust this value based on your page layout

      // Set the sticky state based on scroll position
      if (scrollY > triggerPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

  let blogList = [];

  if (tour.blogReference !== null) {
    tour.blogReference.forEach((blog) => {
      blogList.push(blog);
    });
  }
  if (tour.blog_post !== null) {
    tour.blog_post.forEach((blog) => {
      blogList.push(blog);
    });
  }

  const newList = blogList.filter(
    (obj1, i, arr) => arr.findIndex((obj2) => obj2.slug === obj1.slug) === i,
  );

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
        <div className="relative">
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
            <TourInfo name={tour.name} category={tour.category} />
            <Button
              text="Book Now"
              customClass=""
              tour={tour}
              notifyAddedToCart={notifyAddedToCart}
              notifyRemovedFromCart={notifyRemovedFromCart}
              notifyCartFull={notifyCartFull}
              sticky={isSticky}
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
          {tour.videoUrl ? (
            <div className="">
              <Video url={tour.videoUrl} />
            </div>
          ) : (
            <></>
          )}
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
            <ReviewComponent tour={tour} />
          </div>

          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto">
            <h5 className="font-bold text-lg">You Might Also Like</h5>
            <YouMayLikeSwiper tourList={maybeYouLike} />
          </div>
          {newList.length !== 0 ? (
            <>
              <Recommendations list={newList} title={"Related Articles"} />
            </>
          ) : (
            <></>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Tour;

export const Head = ({ data }) => {
  const urlHref = `https://puntacanatourstore.com/tours/${data.allContentfulTours.nodes[0].url?.trim()}`;
  return (
    <>
      <Seo
        title={data.allContentfulTours.nodes[0].name}
        description={data.allContentfulTours.nodes[0].description1.description1}
        keywords={data.allContentfulTours.nodes[0].keywords?.join(", ")}
        schemaMarkup={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: data.allContentfulTours.nodes[0].name,
          image: `https://www.puntacanatourstore.com${data.allContentfulTours.nodes[0].mainImage.gatsbyImage.images.fallback.src}`,
          description:
            data.allContentfulTours.nodes[0].description1.description1,
          offers: `{
            "@type": "Offer",
            "url": "${urlHref}",
            "priceCurrency": "USD",
            "price": "${data.allContentfulTours.nodes[0].price.toString()}",
          }`,
        }}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/tours/${data.allContentfulTours.nodes[0].url?.trim()}`}
      />
    </>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    allContentfulTours(filter: { id: { eq: $id } }) {
      nodes {
        name
        price
        url
        included
        whatToBring
        importantNotes
        duration1
        featured
        category
        keywords
        daysAvailable
        videoUrl
        blogReference {
          title
          description
          slug
          backgroundImage {
            id
            gatsbyImage(width: 300, placeholder: BLURRED, formats: WEBP)
          }
        }
        images {
          url
          title
          gatsbyImage(width: 1920, formats: WEBP)
        }
        mainImage {
          url
          gatsbyImage(width: 1920, formats: WEBP)
        }
        description1 {
          description1
        }
        tourPageDescription1 {
          tourPageDescription1
        }
        tourPageDescription2 {
          tourPageDescription2
        }
        blog_post {
          title
          description
          slug
          backgroundImage {
            gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
          }
        }
      }
    }
  }
`;
