import React, { useEffect, useState } from "react";
import Layout from "../../components/TravelAgentComponents/Layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import IndividualAgentClientList from "../../components/TravelAgentComponents/IndividualAgentClientList";
import IndividualAgentClientListMobile from "../../components/TravelAgentComponents/IndividualAgentClientListMobile";
const TourRep = ({ location, data }) => {
  const [user, setUser] = useState({});
  const [bookingList, setBookingList] = useState([]);
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
  };
  const findBookedTours = async (id) => {
    const q = query(
      collection(db, "travelAgent"),
      where("tourRepId", "==", id),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setBookingList((oldArray) => [...oldArray, doc.data()]);
    });
  };
  const userId = location.pathname.split("/");
  useEffect(() => {
    findUser(userId[2]);
    findBookedTours(userId[2]);
  }, [userId]);
  return (
    <Layout
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
      {user && (
        <>
          <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:p-2 mx-auto">
            <table className="mx-auto text-sm text-left text-gray-500 hidden md:block shadow rounded-xl overflow-hidden">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Client Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Client Email
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Purchased Date:
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Deposit
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookingList.map((booking, index) => {
                  return (
                    <IndividualAgentClientList key={index} booking={booking} />
                  );
                })}
              </tbody>
            </table>

            <div className="md:hidden min-w-[90vw] my-5 space-y-4">
              {bookingList.map((booking, index) => {
                return (
                  <IndividualAgentClientListMobile
                    key={index}
                    booking={booking}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default TourRep;

export const queryGraph = graphql`
  query MyQuery {
    allContentfulLayout {
      edges {
        node {
          logo {
            gatsbyImage(width: 150, formats: WEBP)
          }
          travelAgentImage {
            gatsbyImage(width: 720, formats: WEBP)
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

    allContentfulSeo(filter: { page: { eq: "Travel Agent" } }) {
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

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link
        rel="canonical"
        href="https://puntacanatourstore.com/travelagent/"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
};
