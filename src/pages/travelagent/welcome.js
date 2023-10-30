import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { graphql, navigate } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/TravelAgentComponents/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const Welcome = ({ data }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  const findUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setUser(docSnap.data());
    const user = docSnap.data();
    if (user.isAdmin) {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        findUser(currentUser.uid);
        setLoggedIn(true);
      } else {
        navigate("/travelagent");
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
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
    >
      {loggedIn ? (
        <>
          {" "}
          <div className="flex flex-col justify-center items-center">
            I am hidden
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="flex flex-col justify-center items-center">
            You are not authorized
          </div>
        </>
      )}
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

export default Welcome;

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/cart" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </>
  );
};
