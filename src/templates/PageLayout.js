import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/useSiteMetadata"
import Header from "../components/Header"
import { Global, css } from "@emotion/core"
const Layout = ({ children, home }) => {
  const { author } = useSiteMetadata()

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              margin: 0;
            }
            * + * {
              margin-top: 1rem;
            }
            html,
            body {
              height: 100vh;
              margin: 0;
              color: #555;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif, "Apple Color Emoji",
                "Segoe UI Emoji", "Segoe UI Symbol";
              font-size: 18px;
              line-height: 1.4;

              /* Remove margin for main div that gatsby mounts into  */
              > div {
                margin-top: 0;
              }
            }
          `}
        />

        <Header home={home} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: "960px",
            minWidth: "400px",
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main style={{ flex: "1 0 auto" }}>{children}</main>
          <footer style={{ flexShrink: 0 }}>
            {author} © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout