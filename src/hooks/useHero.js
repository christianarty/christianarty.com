import { graphql, useStaticQuery } from "gatsby"

const useHero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      image: imageSharp(fluid: { originalName: { eq: "hero.jpg" } }) {
        fluid(fit: COVER, maxWidth: 700, maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return data.image.fluid
}

export default useHero
