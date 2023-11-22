import { graphql } from "gatsby";
import React from "react";
import CartLayout from "../../components/cartLayout";
import TourCard from "../../components/PaymentComponents/TourCard";
import CustomPayPal from "../../components/PayPalButtonWrapper/CustomPayPal";

const Index = ({ data, location }) => {
  const params = new URLSearchParams(location.search);
  const clientName = params.get("name");
  const clientEmail = params.get("email");
  const tours = params.getAll("tourSelect");
  const guests = params.getAll("guests");

  let totalCost = 0;

  const newList = tours.map((tour, index) => {
    let tourPrice = data.allContentfulTour.nodes.find(
      (tour) => tour.name === tours[index],
    ).price;

    totalCost += parseInt(tourPrice) * parseInt(guests[index]);

    return {
      tourName: tour,
      guestCount: guests[index],
      tour: data.allContentfulTour.nodes.find(
        (tour) => tour.name === tours[index],
      ),
    };
  });

  return (
    <CartLayout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      email={data.allContentfulLayout.edges[0].node.email}
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
    >
      <main className="flex flex-col lg:flex-row lg:gap-24 lg:max-w-6xl lg:mx-auto">
        {/* <main className="mt-28 md:mt-32 xl:mt-40"> */}
        <div className="flex flex-col justify-center">
          <section className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5">
            <div className="font-lato tracking-wider text-3xl border-b-2 border-gray-400/75 w-full text-center py-2">
              Booking Details
            </div>
            <div className="my-5 space-y-1">
              <div className="text-gray-500">{clientName}</div>
              <div className="text-gray-500">{clientEmail}</div>
            </div>
          </section>

          <section className="flex flex-col justify-center items-center">
            <CustomPayPal
              price={totalCost}
              tourList={newList}
              clientName={clientName}
              clientEmail={clientEmail}
            />
          </section>
        </div>
        <div className="max-w-xs mx-auto lg:mx-0 flex flex-col justify-center">
          {newList.map((tour, index) => {
            return <TourCard tour={tour} key={index} />;
          })}
        </div>
      </main>
      <section className="my-5 max-w-xs mx-auto">
        <section className="space-x-16 flex justify-between mx-auto">
          <div className="text-lg font-bold">Total Cost</div>
          <div className="text-lg">${totalCost}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto my-1">
          <div className="text-lg font-bold">Deposit</div>
          <div className="text-lg">${totalCost * 0.3}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto">
          <div className="text-lg font-bold">Remaining Balance</div>
          <div className="text-lg">${totalCost * 0.7}</div>
        </section>
      </section>
    </CartLayout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulLayout {
      edges {
        node {
          logo {
            gatsbyImage(width: 150, formats: WEBP)
          }
          footerBackground {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          email
          facebook
          instagram
          whatsApp
        }
      }
    }
    allContentfulTour {
      nodes {
        name
        price
        mainImage {
          gatsbyImage(width: 400, formats: WEBP)
          file {
            url
          }
        }
      }
    }
  }
`;

export default Index;
