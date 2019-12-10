import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"
import Img from "gatsby-image"
import useHero from "../hooks/useHero"

const NavLink = styled(Link)`
  text-shadow: none;
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

const StyledHeader = styled("div")`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 0.5rem;
  align-items: flex-start;
  border-bottom: 1px solid #aaa;
  transition: clip-path 0.2s ease-in-out;
  height: ${props => (props.home ? "40vh" : null)};
  max-height: ${props => (props.home ? "40vh" : "100px")};
  clip-path: ${props =>
    props.home ? "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0 75%)" : null};
`

const Header = ({ home }) => {
  const theme = useTheme()
  const image = useHero()
  return (
    <StyledHeader home={home} theme={theme}>
      <Img fluid={image} />
      <nav
        css={css`
          align-content: flex-start;
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
    </StyledHeader>
  )
}

export default Header
