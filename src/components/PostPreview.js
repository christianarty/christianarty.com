import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { CardLink } from "./CardLink"

const Card = styled("div")`
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0 1rem;
  h6 {
    margin-top: 0;
  }
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`

const PostPreview = ({ post }) => {
  return (
    <Card>
      <h2>{post.frontmatter.title}</h2>
      <h6>Created on {post.frontmatter.date}</h6>
      <p>{post.excerpt}</p>
      <div>
        <CardLink to={post.frontmatter.slug}> Read more &rarr; </CardLink>
      </div>
    </Card>
  )
}

PostPreview.defaultProps = {
  post: {
    frontmatter: {
      title: "There was a problem with this post",
      date: new Date(Date.now()).toString(),
      slug: "/404/",
    },
    excerpt: "Please contact me at my email down below",
  },
}

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostPreview
