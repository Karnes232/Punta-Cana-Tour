import * as React from "react"
import Layout from "../components/layout"
import HeroComponet from "../components/HeroComponent/HeroComponet"
import TextComponent from "../components/TextComponent/TextComponent"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"

const IndexPage = () => {
  const carouselPhotos = [
    "https://images.unsplash.com/photo-1510267790222-d919ba2cbcbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    "https://plus.unsplash.com/premium_photo-1663076048357-9c109db6a2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ]
  return (
    <Layout>
      <HeroComponet />
      <TextComponent
        title="Welcome to ThrillQuest Punta Cana!"
        paragraph="We are the best tour company in Punta Cana, and we&#39;re committed to giving you the best vacation possible there. We have been in the tourism industry for over ten years, and we take great delight in designing unique itineraries for each of our visitors."
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph="ThrillQuest Punta Cana provides a wide variety of exciting pursuits and mind-blowing excursions since we know that each visitor has unique vacation goals. We&#39;ve got an excursion that&#39;ll suit anybody from history buffs to nature lovers to thrill seekers to those just looking to unwind in paradise."
      />
      <SwiperCarousel className="mt-5" photoList={carouselPhotos} />
      <TextComponent
        paragraph="Our team of dedicated professionals is focused on providing you with an experience that is unparalleled to anything you&#39;ve ever had before. We make sure that everything runs well and that you have access to advisors who are well-versed in the area&#39;s history, culture, and natural attractions. Our team works relentlessly to ensure your comfort and happiness while making lifelong memories for you."
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph="ThrillQuest Punta Cana is the perfect travel companion whether you&#39;re in the Dominican Republic to explore the beautiful beaches, experience the thrill of water sports, explore the exotic rainforests, or learn about the country&#39;s fascinating history."
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph="Come with us on a fantastic adventure through Punta Cana&#39;s beautiful scenery, and we&#39;ll help you live out your holiday fantasies. We guarantee an exciting and memorable day that will leave you wanting more, thanks to our years of industry knowledge and commitment to providing excellent service."
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph="Here at ThrillQuest Punta Cana, adventure, discovery, and magic are just waiting for you"
        pClassName="mb-4 lg:mb-0"
      />
      <section className="h-screen"></section>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
