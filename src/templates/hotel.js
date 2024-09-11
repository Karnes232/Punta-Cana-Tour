import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import HotelInfo from "../components/HotelComponents/HotelInfo";
import Amenities from "../components/PropertyComonents/Amenities";
import PropertyBody from "../components/PropertyComonents/PropertyBody";
import ContactForm from "../components/HotelComponents/Form/ContactForm";
import CarouselLightBox from "../components/PropertyComonents/CarouselLightBox";
import Video from "../components/TourPageComponents/Video";
import { graphql } from "gatsby";
import HotelRoomCard from "../components/HotelComponents/HotelRoomCard";
import HotelCardSwiper from "../components/HotelComponents/HotelCardSwiper";

const Hotel = ({ pageContext, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    hotel: data?.allContentfulHotelsOrHostel?.nodes[0].title,
    hotelRoom: "",
    price: "",
  });
  console.log(data.allContentfulHotelsOrHostel.nodes[0].hotelType);
  return (
    <Layout
      logo={pageContext.layout.logo}
      footerBackground={pageContext.layout.footerBackground.url}
      facebook={pageContext.layout.facebook}
      instagram={pageContext.layout.instagram}
      whatsApp={pageContext.layout.whatsApp}
      email={pageContext.layout.email}
      gImage={pageContext.layout.footerBackground.gatsbyImage}
      color="black"
    >
      <div className="lg:hidden">
        <HeroComponent
          imageUrl={data?.allContentfulHotelsOrHostel?.nodes[0]?.url}
          gImage={data?.allContentfulHotelsOrHostel?.nodes[0]?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
      </div>
      <div className="hidden lg:flex max-w-6xl mx-auto">
        <PhotoGrid
          tourPhotos={data?.allContentfulHotelsOrHostel?.nodes[0]?.images}
        />
      </div>
      <div className="max-w-6xl my-5 mx-5 md:mx-10  xl:mx-auto">
        <HotelInfo
          title={data?.allContentfulHotelsOrHostel?.nodes[0].title}
          propertyType={data?.allContentfulHotelsOrHostel?.nodes[0].hotelType}
          location={data?.allContentfulHotelsOrHostel?.nodes[0].generalLocation}
          price={data?.allContentfulHotelsOrHostel?.nodes[0].price}
        />
        <Amenities
          amenities={data?.allContentfulHotelsOrHostel?.nodes[0].amenities}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl xl:mx-auto">
        <PropertyBody
          context={data?.allContentfulHotelsOrHostel?.nodes[0].description}
        />
        <div className="flex flex-col-reverse lg:flex-col lg:w-6/12 flex-grow lg:ml-5">
          <ContactForm
            property={data?.allContentfulHotelsOrHostel?.nodes[0]}
            email={pageContext.layout.email}
            formName="HotelForm"
          />
          <CarouselLightBox
            photoList={data?.allContentfulHotelsOrHostel?.nodes[0].images}
          />
        </div>
      </div>
      <div className="max-w-6xl w-full mx-5 xl:mx-auto text-xl font-bold">
        Choose your room
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row lg:flex-wrap max-w-6xl xl:mx-auto justify-around xl:justify-between xl:gap-14">
        {data?.allContentfulHotelsOrHostel?.nodes[0]?.hotel_room?.map(
          (hotelRoom, index) => {
            return (
              <>
                {hotelRoom.dormRoom === false ? (
                  <>
                    <HotelRoomCard
                      hotelRoom={hotelRoom}
                      key={index}
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            );
          },
        )}
      </div>
      <div className="flex flex-col lg:hidden lg:flex-row justify-evenly items-start xl:justify-center xl:space-x-24">
        <HotelCardSwiper
          hotelList={data?.allContentfulHotelsOrHostel?.nodes[0]?.hotel_room}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      {data.allContentfulHotelsOrHostel.nodes[0].hotelType === "Hostel" && (
        <>
          <div className="max-w-6xl w-full mx-5 xl:mx-auto text-xl font-bold">
            Dorm rooms
          </div>
          <div className="hidden lg:flex flex-col lg:flex-row lg:flex-wrap max-w-6xl xl:mx-auto justify-around xl:justify-between xl:gap-14">
            {data?.allContentfulHotelsOrHostel?.nodes[0]?.hotel_room?.map(
              (hotelRoom, index) => {
                return (
                  <>
                    {hotelRoom.dormRoom ? (
                      <>
                        <HotelRoomCard
                          hotelRoom={hotelRoom}
                          key={index}
                          formData={formData}
                          setFormData={setFormData}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              },
            )}
          </div>
          <div className="flex flex-col lg:hidden lg:flex-row justify-evenly items-start xl:justify-center xl:space-x-24">
            <HotelCardSwiper
              hotelList={
                data?.allContentfulHotelsOrHostel?.nodes[0]?.hotel_room
              }
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </>
      )}

      {data?.allContentfulHotelsOrHostel?.nodes[0]?.videoUrl?.map(
        (video, index) => {
          return (
            <div className="" key={index}>
              <Video url={video} />
            </div>
          );
        },
      )}
    </Layout>
  );
};

export default Hotel;

export const Head = ({ data }) => {
  return (
    <>
      <Seo
        title={data?.allContentfulHotelsOrHostel?.nodes[0].seoTitle}
        description={data?.allContentfulHotelsOrHostel?.nodes[0].seoDescription}
        keywords={data?.allContentfulHotelsOrHostel?.nodes[0].seoKeywords?.join(
          ", ",
        )}
        schemaMarkup={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: data?.allContentfulHotelsOrHostel?.nodes[0].title,
          image: `https://www.puntacanatourstore.com${data?.allContentfulHotelsOrHostel?.nodes[0].mainImage.gatsbyImage.images.fallback.src}`,
          description:
            data?.allContentfulHotelsOrHostel?.nodes[0].seoDescription,
        }}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/hotels/${data?.allContentfulHotelsOrHostel?.nodes[0].urlSlug}`}
      />
    </>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    allContentfulHotelsOrHostel(filter: { id: { eq: $id } }) {
      nodes {
        title
        urlSlug
        hotelType
        price
        generalLocation
        mainImage {
          gatsbyImage(width: 2000, formats: WEBP, placeholder: BLURRED)
          title
          url
        }
        images {
          title
          gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
          url
          width
          height
        }
        description {
          raw
        }
        seoTitle
        seoDescription
        seoKeywords
        videoUrl
        amenities
        hotel_room {
          roomName
          dormRoom
          images {
            gatsbyImage(width: 400, placeholder: BLURRED, formats: WEBP)
            title
          }
          description
          sleeps
          bedType
          price
        }
      }
    }
  }
`;
