import { graphql, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/TravelAgentComponents/Layout";
import Seo from "../../../components/seo";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../config/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import UserList from "../../../components/TravelAgentComponents/UserList";
import UserListMobile from "../../../components/TravelAgentComponents/UserListMobile";
const Touroperators = ({ data }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
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
        setLoggedIn(true);
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          setUsers((prevUsers) => [...prevUsers, doc.data()]);
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
      <div className="flex flex-col items-center justify-center text-center max-w-5xl lg:p-2 mx-auto">
        <table className="mx-auto text-sm text-left text-gray-500 hidden md:block shadow rounded-xl overflow-hidden">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3">
                Tour Rep
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return <UserList key={index} user={user} />;
            })}
          </tbody>
        </table>

        <div className="md:hidden min-w-[90vw] my-5 space-y-4">
          {users.map((user, index) => {
            return <UserListMobile key={index} user={user} />;
          })}
        </div>
      </div>
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

export default Touroperators;

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
        href="https://puntacanatourstore.com/travelagent/touroperators"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </>
  );
};
