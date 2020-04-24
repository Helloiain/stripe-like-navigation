import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { DropdownBackground } from "../DropdownContainer/Components.js"

const NavbarItemTitle = styled.span`
  background: transparent;
  padding-right: 1rem;
  color: rgba(126, 126, 126, 1);
  display: flex;
  white-space: nowrap;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &hover,
  &focus {
    opacity: 0.7;
    outline: none;
  }
`

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`

const NavbarItemEl = styled.li`
  position: relative;
  ${DropdownSlot}:nth-child(1) ${DropdownBackground} {
    left: 200px;
    @media(max-width: 937px){
      left: 250px;
    }
  }
  ${DropdownSlot}:nth-child(2) ${DropdownBackground} {
    left: 115px;
  }
  ${DropdownSlot}:nth-child(3) ${DropdownBackground} {
    left: -20px;
  }
  ${DropdownSlot}:nth-child(4) ${DropdownBackground} {
    left: -150px;
  }
  ${DropdownSlot}:nth-child(5) ${DropdownBackground} {
    left: -260px;
  }
`

class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node,
  }

  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl
        onMouseEnter={this.onMouseEnter}
        onFocus={this.onMouseEnter}
      >
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}

export default NavbarItem
