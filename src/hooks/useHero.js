import { graphql, useStaticQuery } from "gatsby"

const useHero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      image: imageSharp(fluid: { originalName: { eq: "hero.jpg" } }) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return data.image
}

export default useHero
