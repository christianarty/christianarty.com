import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { CardLink } from "./CardLink"

const Card = styled("div")`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0 1rem;
  box-shadow: 9px 9px 10px 0px rgba(0, 100, 255, 0.2);

  .subtitle {
    margin-top: 0;
  }
  .link {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`

const PostPreview = ({ post }) => {
  return (
    <Card>
      <h2 className="title">{post.frontmatter.title}</h2>
      <h6 className="subtitle">Posted on {post.frontmatter.date}</h6>
      <p className="excerpt">{post.excerpt}</p>
      <div className="link">
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
