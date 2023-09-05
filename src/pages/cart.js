import React, { useState } from "react";
import CartComponent from "../components/CartComponent/CartComponent";

import { graphql } from "gatsby";
import CartLayout from "../components/cartLayout";
import HiddenInputs from "../components/CartComponent/HiddenInputs";
import ContactInfo from "../components/CartComponent/ContactInfo";
import MoreInfo from "../components/CartComponent/MoreInfo";

const Cart = ({ data }) => {
  const [name, setName] = useState("");
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
      <form
        name="cart"
        method="POST"
        action={`/contact/thankyou/?name=${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="cart"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value="cart" />
        <HiddenInputs />
        <CartComponent />
        <ContactInfo name={name} setName={setName}/>
        <MoreInfo />
        <button
            type="submit"
            className="px-4 py-2 my-3 bg-[#FFB24C] text-[#002447] text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {}}
          >
            Contact Us
          </button>
      </form>
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

    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
  }
`;

export default Cart;
