import React from "react"
import { graphql } from "gatsby"
import PostPreview from "../components/PostPreview"
import PageLayout from "../templates/PageLayout"
const IndexPage = props => {
  const posts = props.data.allMdx.nodes

  return (
    <PageLayout home>
      <h1> These are my blog posts</h1>
      {posts.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </PageLayout>
  )
}

export const PostQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        excerpt
      }
    }
  }
`

export default IndexPage
