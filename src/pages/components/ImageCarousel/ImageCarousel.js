import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { image1 } from "../ImageCarousel/image1.jpeg"
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
              )
            }
          }
        }
      }
    }
  `)

  const carouselImages = data.allFile.edges.map(({ node }) => (
    <Carousel.Item key={node.id}>
      <GatsbyImage image={node.childImageSharp.gatsbyImageData} />
    </Carousel.Item>
  ))

  return <Carousel>{carouselImages}</Carousel>
}
