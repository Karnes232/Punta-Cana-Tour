import React, { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase";
import { graphql, navigate } from "gatsby";
import Seo from "../../components/seo";
import Layout from "../../components/TravelAgentComponents/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import WhoWhatWhyComponent from "../../components/TravelAgentComponents/WhoWhatWhy/WhoWhatWhyComponent";
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel";
import TextComponent from "../../components/TextComponent/TextComponent";
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
  console.log(data.allContentfulTravelAgentWelcomePage.edges[0].node);
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
          <HeroComponent
            imageUrl={
              data.allContentfulTravelAgentWelcomePage.edges[0].node.heroImage
                .url
            }
            gImage={
              data.allContentfulTravelAgentWelcomePage.edges[0].node.heroImage
                .gatsbyImage
            }
            button={false}
          />
          <WhoWhatWhyComponent
            data={data.allContentfulTravelAgentWelcomePage.edges[0].node}
          />
          <SwiperCarousel
            className="mt-5"
            photoList={
              data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
            }
          />
          <TextComponent
            paragraph={
              data.allContentfulTravelAgentWelcomePage.edges[0].node.paragraph1
                .paragraph1
            }
            className="mt-5 2xl:mt-10"
            pClassName="mb-4 lg:mb-0"
          />
          <TextComponent
            paragraph={
              data.allContentfulTravelAgentWelcomePage.edges[0].node.paragraph2
                .paragraph2
            }
            className="mt-5 2xl:mt-10"
            pClassName="mb-4 lg:mb-0"
          />
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
    allContentfulTravelAgentWelcomePage {
      edges {
        node {
          heroImage {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          faqsIcon1 {
            gatsbyImage(formats: WEBP, width: 300)
          }
          faqsIcon2 {
            gatsbyImage(formats: WEBP, width: 300)
          }
          faqsIcon3 {
            gatsbyImage(formats: WEBP, width: 300)
          }
          faqsTitle1
          faqsTitle2
          faqsTitle3
          faqsDescription1 {
            faqsDescription1
          }
          faqDescription3 {
            faqDescription3
          }
          faqDescription2 {
            faqDescription2
          }
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
        }
      }
    }
    allContentfulSwiperPhotoCarousel(
      filter: { page: { eq: "Travel Agent Welcome" } }
    ) {
      edges {
        node {
          photoList {
            title
            gatsbyImage(width: 1920, formats: WEBP)
            url
          }
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
