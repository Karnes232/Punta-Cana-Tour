import React from "react";
import { graphql } from "gatsby";
import CartLayout from "../../components/cartLayout";
import TourCard from "../../components/PaymentComponents/TourCard";

const Thankyou = ({ data, location }) => {
  const params = new URLSearchParams(location.search);
  const clientName = params.get("name");
  const totalPrice = params.get("totalPrice");
  const deposit = params.get("deposit");
  const tours = params.getAll("tourSelect");
  const guests = params.getAll("guests");

  const newList = tours.map((tour, index) => {
    return {
      tourName: tour,
      guestCount: guests[index],
      tour: data.allContentfulTour.nodes.find(
        (tour) => tour.name === tours[index],
      ),
    };
  });

  const balance = parseInt(totalPrice) - parseInt(deposit);
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
        <div className="flex flex-col items-center max-w-xs xl:max-w-sm mx-auto mb-5">
          <div className="">
            <div className="flex flex-col justify-center items-center text-slate-600 ">
              <div className="text-2xl xl:text-4xl font-serif text-center mt-6">
                Thank you {clientName}, our team will reach out to you shortly!
              </div>

              <div className="text-center text-sm xl:text-base mt-2 xl:mt-6">
                Please feel free to{" "}
                <a
                  href={`mailto:${data.allContentfulLayout.edges[0].node.email}`}
                  aria-label="Gmail"
                  rel="noreferrer"
                  className="underline"
                >
                  contact us
                </a>{" "}
                with any questions or concerns.
              </div>
            </div>
          </div>
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
          <div className="text-lg">${parseInt(totalPrice).toFixed(2)}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto my-1">
          <div className="text-lg font-bold">Deposit</div>
          <div className="text-lg">${deposit}</div>
        </section>
        <section className="space-x-16 flex justify-between mx-auto">
          <div className="text-lg font-bold">Remaining Balance</div>
          <div className="text-lg">${balance.toFixed(2)}</div>
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

export default Thankyou;
