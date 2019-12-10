const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          next {
            frontmatter {
              title
              slug
            }
          }
          node {
            id
            frontmatter {
              slug
            }
          }
          previous {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges
  // you'll call `createPage` for each result
  posts.forEach((nodes, index) => {
    createPage({
      path: nodes.node.frontmatter.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/BlogPostLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: nodes.node.id, next: nodes.next, prev: nodes.previous },
    })
  })
}
