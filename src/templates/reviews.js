import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "../config/firebase";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import TourInfo from "../components/TourPageComponents/TourInfo";
import { CiCircleInfo } from "react-icons/ci";
import AllReviewPageOverall from "../components/ReviewComponent/AllReviewPageOverall";
import ReviewPhotoGrid from "../components/ReviewComponent/ReviewPhotoGrid";
import TourReview from "../components/ReviewComponent/TourReview";
const Reviews = ({ pageContext, data }) => {
  const [reviews, setReviews] = useState(pageContext.tourReviews[0]);
  const [sortedBy, setSortedBy] = useState("Highest Rated");
  const [imageArray, setImageArray] = useState([]);
  const {
    logo,
    footerBackground,
    facebook,
    whatsApp,
    instagram,
    email,
    gImage,
  } = pageContext;
  const tour = data.allContentfulTours.nodes[0];

  let reviewCollectionName = `reviews-${pageContext.tour.url}`;
  const findReviews = async (loadMore = false) => {
    const reviewRef = collection(db, reviewCollectionName);
    let reviewsQuery = query(reviewRef, orderBy("createdAt", "desc"));
    const reviewsSnapshot = await getDocs(reviewsQuery);
    const runtimeReviews = reviewsSnapshot.docs.map((doc) => doc.data());
    const mergedReviews = [
      ...reviews,
      ...runtimeReviews.filter(
        (rtReview) => !reviews.some((bReview) => bReview.id === rtReview.id),
      ),
    ];
    setReviews(
      mergedReviews?.sort((a, b) =>
        a.overAllRating > b.overAllRating ? -1 : 1,
      ),
    );
    reviewsSnapshot.forEach((doc) => {
      const data = doc.data();
      data.ImagesUrl.forEach((image) => {
        setImageArray((prevImages) => [...prevImages, { url: image }]);
      });
    });
  };

  useEffect(() => {
    findReviews();
  }, []);

  const handleSortChange = (value) => {
    setSortedBy(value);
    if (value === "Highest Rated") {
      setReviews(
        reviews?.sort((a, b) => (a.overAllRating > b.overAllRating ? -1 : 1)),
      );
    }
    if (value === "Lowest Rated") {
      setReviews(
        reviews?.sort((a, b) => (a.overAllRating > b.overAllRating ? 1 : -1)),
      );
    }
    if (value === "Most Recent") {
      setReviews(
        reviews?.sort(
          (a, b) =>
            new Date(b.createdAt._seconds * 1000) -
            new Date(a.createdAt._seconds * 1000),
        ),
      );
    }
  };

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
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto pb-5 border-b">
            <TourInfo name={tour.name} category={tour.category} />
          </div>
          <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto pb-5">
            <div className="flex flex-col">
              <h4 className="text-2xl font-medium">Reviews of {tour.name}</h4>

              <div className="flex w-fit p-4 items-center gap-3 rounded-lg shadow mt-5 bg-white text-sm">
                <CiCircleInfo className="text-6xl md:text-4xl lg:text-2xl text-secondary-color" />{" "}
                We're all about trust. Our community relies on honest reviews to
                help you make those big decisions with ease.
              </div>
              <AllReviewPageOverall reviews={reviews} tour={tour} />

              {imageArray.length > 0 && <ReviewPhotoGrid photos={imageArray} />}

              <div className="flex mt-5">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 text-sm/6  shadow-inner shadow-white/10 focus:outline-none ">
                    <span className="font-semibold mr-2"> Sort By: </span>
                    {sortedBy}
                  </MenuButton>
                  <MenuItems
                    anchor="bottom"
                    className="z-50 bg-white py-4 px-4 flex flex-col gap-4 rounded-lg shadow-lg w-48"
                  >
                    <MenuItem>
                      <button
                        onClick={() => handleSortChange("Most Recent")}
                        className="block w-full text-left data-[focus]:bg-blue-100"
                      >
                        Most Recent
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={() => handleSortChange("Highest Rated")}
                        className="block w-full text-left data-[focus]:bg-blue-100"
                      >
                        Highest Rated
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button
                        onClick={() => handleSortChange("Lowest Rated")}
                        className="block w-full text-left data-[focus]:bg-blue-100"
                      >
                        Lowest Rated
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>

              <div className="flex flex-col gap-6 mt-5">
                {reviews.map((review, index) => {
                  return <TourReview review={review} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Reviews;

export const myQuery = graphql`
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
