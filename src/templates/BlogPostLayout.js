import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"
import PageLayout from "../templates/PageLayout"

const BlogPostLayout = ({ data: { mdx }, pageContext: context }) => {
  const { next, prev } = context

  return (
    <PageLayout>
      <div>
        <h1>
          {mdx.frontmatter.title}{" "}
          <h6 style={{ marginTop: 0, color: "#999999" }}>
            {mdx.frontmatter.date}
          </h6>
        </h1>
      </div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <hr />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {/* TODO: Style the previous and next posts to have the tag and name on top of one another */}
        {prev && (
          <>
            <div css={css``}>
              <Link to={prev.frontmatter.slug}>
                &larr; {prev.frontmatter.title}
              </Link>
            </div>
          </>
        )}

        <Link to="/"> Back to home</Link>
        {next && (
          <Link to={next.frontmatter.slug}>
            {next.frontmatter.title} &rarr;
          </Link>
        )}
      </div>
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
        date(formatString: "dddd, MMMM Do YYYY")
      }
    }
  }
`

export default BlogPostLayout
