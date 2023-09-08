import { graphql } from "gatsby";
import React, { useState } from "react";
import CartLayout from "../../components/cartLayout";
import InfoInputs from "../../components/PaymentComponents/InfoInputs";
import TourInfo from "../../components/PaymentComponents/TourInfo";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Create = ({ data }) => {
  const [tourAmount, setTourAmount] = useState(1);

  const incrementCount = (e) => {
    e.preventDefault();
    if (tourAmount < 4) {
      setTourAmount(tourAmount + 1);
    }
  };

  const decrementCount = (e) => {
    e.preventDefault();
    if (tourAmount > 0) {
      setTourAmount(tourAmount - 1);
    }
  };
  const componentArray = Array(tourAmount).fill(null);
  return (
    <CartLayout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      email={data.allContentfulLayout.edges[0].node.email}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
    >
      <main className="mt-28 md:mt-32 xl:mt-40">
        <form
          name="payment"
          method="GET"
          action="/payment/"
          id="payment"
          className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
        >
          <>
            <InfoInputs />
          </>
          {componentArray.map((_, index) => (
            <>
              <TourInfo tourList={data.allContentfulTour.nodes} key={index} />
            </>
          ))}
          <div className="flex my-4 w-1/3 justify-between">
            <button onClick={decrementCount}>
              <AiOutlineMinus size={25} />
            </button>
            <button onClick={incrementCount}>
              <AiOutlinePlus size={25} />
            </button>
          </div>

          <button
            type="submit"
            className="text-secondary-color bg-primary-color  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </main>
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
        }
      }
    }
    allContentfulTour {
      nodes {
        name
      }
    }
  }
`;

export default Create;
