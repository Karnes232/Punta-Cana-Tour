import React from "react";
import CartComponent from "../components/CartComponent/CartComponent";

import { graphql } from "gatsby";
import CartLayout from "../components/cartLayout";

const Cart = ({ data }) => {
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
        action={`/contact/thankyou/?name=james`}
        // action={`/contact/thankyou/?name=${name}`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="cart"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value="cart" />
        <CartComponent />
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
