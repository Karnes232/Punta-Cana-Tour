import React, { useEffect, useState } from "react";

import CartLayout from "../../components/cartLayout";
import { graphql } from "gatsby";

const Tour = ({ data }) => {
  const [tour, setTour] = useState([]);
  const [price, setPrice] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search);
    setTour(searchParams.getAll("tour"));
    setPrice(searchParams.getAll("price"));
    setQuantity(searchParams.getAll("quantity"));
  }, []);
  console.log(tour);
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
      <div>{tour[0]}</div>
      <div>{price[0]}</div>
      <div>{quantity[0]}</div>
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

export default Tour;
