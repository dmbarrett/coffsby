import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function Hero({ img, styleClass, title, children }) {
  return (
    <BackgroundImage tag="hero" className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

BackgroundImage.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}
