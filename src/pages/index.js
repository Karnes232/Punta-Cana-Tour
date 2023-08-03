import * as React from "react"
import Layout from "../components/layout"
import HeroComponet from "../components/HeroComponent/HeroComponet"
import TextComponent from "../components/TextComponent/TextComponent"
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel"
import { graphql } from "gatsby"
import FeaturedTours from "../components/FeaturedToursComponent/FeaturedTours"

const IndexPage = ({ data }) => {
  let carouselPhotos = []

  data?.allContentfulSwiperPhotoCarousel.edges[0].node.photoList.forEach(e => {
    let photoList = {
      title: e.fields.title.en_US,
      image: e.fields.file.en_US.url
    }
    carouselPhotos.push(photoList)
  })

  const { title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6 } = data?.allContentfulIndexPageContent.edges[0].node

  return (
    <Layout>
      <HeroComponet />
      <TextComponent
        title={title}
        paragraph={paragraph1.paragraph1}
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={paragraph2.paragraph2}
      />
      <SwiperCarousel className="mt-5" photoList={carouselPhotos} />
      <TextComponent
        paragraph={paragraph3.paragraph3}
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={paragraph4.paragraph4}
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={paragraph5.paragraph5}
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={paragraph6.paragraph6}
        pClassName="mb-4 lg:mb-0"
      />
      <FeaturedTours />
      <section className="h-screen"></section>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>


export const query = graphql`
  query MyQuery {
    allContentfulIndexPageContent {
      edges {
        node {
          title
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          paragraph4 {
            paragraph4
          }
          paragraph5 {
            paragraph5
          }
          paragraph6 {
            paragraph6
          }
        }
      }
    }
    allContentfulSwiperPhotoCarousel {
      edges {
        node {
          photoList {
            fields {
              file {
                en_US {
                  url
                }
              }
              title {
                en_US
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage