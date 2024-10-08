import { graphql, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/TravelAgentComponents/Layout";
import Seo from "../../../components/seo";
import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import PaidClientList from "../../../components/TravelAgentComponents/PaidClientList";
import PaidClientListMobile from "../../../components/TravelAgentComponents/PaidClientListMobile";
const PaidClients = ({ data }) => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [clientes, setClientes] = useState([]);
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    // setUser(docSnap.data());
    const user = docSnap.data();
    if (user.isAdmin) {
      setIsAdmin(true);
    } else {
      navigate("/travelagent");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        findUser(currentUser.uid);
        // setLoggedIn(true);

        const paidRef = collection(db, "reservationsClientes");
        const q = query(paidRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setClientes((prevUsers) => [...prevUsers, doc.data()]);
        });
      } else {
        navigate("/travelagent/signin");
      }
    });
  }, []);

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
      {" "}
      {isAdmin ? (
        <>
          <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:p-2 mx-auto">
            <table className="mx-auto text-sm text-left text-gray-500 hidden md:block shadow rounded-xl overflow-hidden">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Purchased Date:
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tour
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((client, index) => {
                  return <PaidClientList key={index} client={client} />;
                })}
              </tbody>
            </table>

            <div className="md:hidden min-w-[90vw] my-5 space-y-4">
              {clientes.map((client, index) => {
                return <PaidClientListMobile key={index} client={client} />;
              })}
            </div>
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export const querie = graphql`
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

export default PaidClients;

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
        href="https://puntacanatourstore.com/travelagent/reserved"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
};
