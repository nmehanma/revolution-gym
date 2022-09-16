import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ImageCarousel() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "indexImages" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                height: 300
                width: 600
                quality: 70
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: CENTER, fit: COVER }
              )
            }
          }
        }
      }
    }
  `)

  const carouselImages = data.allFile.edges.map(({ node }) => (
    <Carousel.Item key={node.id}>
      <GatsbyImage
        className="d-block w-50 mx-auto "
        image={node.childImageSharp.gatsbyImageData}
      />
    </Carousel.Item>
  ))

  return <Carousel>{carouselImages}</Carousel>
}
