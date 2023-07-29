import { graphql, useStaticQuery } from "gatsby"

export const useStaticImageRequest = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allContentfulIndexPageImages {
        edges {
          node {
            logo {
              file {
                url
              }
            }
            footerBackground {
              file {
                url
              }
            }
            indexHero {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return images.allContentfulIndexPageImages.edges[0].node
}
