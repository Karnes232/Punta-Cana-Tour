import React, { useState } from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import ClientInfo from "../../components/InvoiceComponents/ClientInfo";
import TourInfo from "../../components/InvoiceComponents/TourInfo";
import axios from "axios";
import DatePickerComponent from "../../components/InvoiceComponents/DatePickerComponent";

const Create = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: "Bavaro Adventure Park",
    guests: "",
    date: "",
    time: "",
  });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const tour = data.allContentfulTours.nodes.filter((tour) => {
      if (formData.tour === tour.name) {
        return tour;
      }
    });

    axios.post("/api/invoice", {
      formData: formData,
      tour: tour,
    });
  };

  console.log(formData);
  return (
    <Layout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      email={data.allContentfulLayout.edges[0].node.email}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color="black"
    >
      <main className="mt-28 md:mt-32 xl:mt-40">
        <form
          name="payment"
          method="GET"
          action="/invoice/"
          id="invoice"
          className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
          onSubmit={handleSubmit}
        >
          <ClientInfo formData={formData} setFormData={setFormData} />
          <TourInfo
            tourList={data.allContentfulTours.nodes}
            formData={formData}
            setFormData={setFormData}
          />
          <div className="flex justify-around my-2">
            <div className="relative z-10 w-2/5 group">
              <DatePickerComponent
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            <div className="relative z-0 w-2/5  group">
              <input
                type="time"
                name="time"
                id="time"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="pickupTime"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Pick Up Time
              </label>
            </div>
          </div>

          <button>Submit</button>
        </form>
      </main>
    </Layout>
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
    allContentfulTours {
      nodes {
        name
        mainImage {
          url
          file {
            url
          }
        }
        price
      }
    }
  }
`;

export default Create;
