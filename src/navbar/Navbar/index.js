import React, { Component } from "react"
import styled from "styled-components"

const NavbarEl = styled.nav`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  justify-content: space-between;
`

const Logo = styled.span`
  font-weight: bold;
  font-size: 18px;
`

const SignIn = styled.span`
  font-size: 1.2rem;
`

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 250px;
  @media(max-width: 790px) {
    margin: 0;
  }
`

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <Logo>DIVERSE</Logo>
        <NavbarList>{children}</NavbarList>
        <SignIn>Sign in 🡢</SignIn>
      </NavbarEl>
    )
  }
}

export default Navbar