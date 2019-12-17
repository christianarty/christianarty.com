import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"
import PageLayout from "../templates/PageLayout"
import SEO from "../components/GatsbySEO"
import { DiscussionEmbed } from "disqus-react"
const BlogPostLayout = ({ data: { mdx }, pageContext: context }) => {
  const { next, prev } = context
  const { title, date, slug } = mdx.frontmatter
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
  return (
    <>
      <SEO title={title} description={mdx.excerpt} />
      <PageLayout>
        <div>
          <h1 style={{ marginBottom: 0 }}>{title} </h1>
          <h6 style={{ marginTop: 0, color: "#999999" }}>{date}</h6>
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
            <Link
              css={css`
                margin-top: 0;
              `}
              to={prev.frontmatter.slug}
            >
              &larr; {prev.frontmatter.title}
            </Link>
          )}

          <Link
            css={css`
              margin-top: 0;
            `}
            to="/"
          >
            {" "}
            Back to home
          </Link>
          {next && (
            <Link
              css={css`
                margin-top: 0;
              `}
              to={next.frontmatter.slug}
            >
              {next.frontmatter.title} &rarr;
            </Link>
          )}
        </div>
        <DiscussionEmbed {...disqusConfig} />
      </PageLayout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      frontmatter {
        title
        date(formatString: "dddd, MMMM Do YYYY")
        slug
      }
    }
  }
`

export default BlogPostLayout
