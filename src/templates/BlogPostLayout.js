import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PageLayout from "../templates/PageLayout"

const BlogPostLayout = ({ data: { mdx } }) => {
  return (
    <PageLayout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <hr />
      <Link to="/">&larr; Back to home</Link>
    </PageLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default BlogPostLayout
