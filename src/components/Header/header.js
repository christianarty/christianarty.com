import { Link } from "gatsby"
import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin: 0 0.5rem 0 0;
  padding: 0;
  &.current-link {
    border-bottom: 2px solid #222;
  }
  &:hover {
    border-bottom: 2px solid #eee;
  }
`
const HomeLink = styled(NavLink)`
  padding: 0;
  font-weight: bold;
`

const Header = () => {
  const { title } = useSiteMetadata()
  const theme = useTheme()

  return (
    <div
      css={css`
        display: flex;
        background-color: ${theme.colors.primary};
        padding: 1rem 0.5rem;
        align-items: center;
        justify-content: space-between;
        max-height: 100px;
        border-bottom: 1px solid #aaa;
      `}
    >
      <div>
        <HomeLink to="/">{title}</HomeLink>
      </div>
      <nav
        css={css`
          display: flex;
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-link">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="current-link">
          About
        </NavLink>
        <NavLink to="/projects" activeClassName="current-link">
          Projects
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
