import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/global/Hero"
import Info from "../components/Home/Info"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid}
      title="Joe Mama's coffee"
      styleClass="default-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
