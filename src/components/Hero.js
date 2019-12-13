import React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 100%;
  width: 100%;
`
const Overlay = styled("div")`
  background-image: linear-gradient(to top, #25a7f4cc 5rem, #ffffff00);
  margin-top: 0;
  height: 100%;
`

export default ({ children, image }) => (
  <ImageBackground Tag="section" fluid={image.fluid} fadeIn="soft">
    <Overlay>{children}</Overlay>
  </ImageBackground>
)
