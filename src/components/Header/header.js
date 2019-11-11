import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav className={styles.navbar}>
      <div>
        <h1 style={{margin:0}}>
          <Link to="/" className={styles.link}>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </div>
      <div className={styles.navlinks}>
        <h3 style={{margin:0}}>
          <Link to="/" className={styles.link}>
            About
          </Link>
        </h3>
        <h3 style={{margin:0}}>
          <Link to="/" className={styles.link}>
            Projects
          </Link>
        </h3>
      </div>
    </nav>
  )
}

export default Header
