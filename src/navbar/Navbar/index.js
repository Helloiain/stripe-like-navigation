import React, { Component } from "react"
import styled from "styled-components"

const NavbarEl = styled.nav`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`

const Logo = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  margin: 0 auto 0 0;
`

const SignIn = styled.span`
  color: rgba(126, 126, 126, 1);
  margin: 0 0 0 2rem;
`

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
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
