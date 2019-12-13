import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"
import useHero from "../hooks/useHero"
import ConditionalWrapper from "./ConditionalWrapper"
import Hero from "./Hero"

const NavLink = styled(Link)`
  text-shadow: none;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  margin: 0 1rem 0 0;
  padding: 1rem 0rem 0.15rem 0;
  &.current-link {
    border-bottom: 2px solid #fff;
  }
  &:hover {
    font-weight: 500;
  }
`

const StyledHeader = styled("div")`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  padding: 0;
  align-items: flex-start;
  justify-content: space-between;
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
      <ConditionalWrapper
        condition={home}
        wrapper={children => <Hero image={image}>{children}</Hero>}
      >
        <nav
          css={css`
            align-content: flex-start;
            margin-top: 0;
            padding: 1rem 0.5rem;
          `}
        >
          <NavLink to="/" activeClassName="current-link">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="current-link">
            About
          </NavLink>
        </nav>
      </ConditionalWrapper>
    </StyledHeader>
  )
}

export default Header
