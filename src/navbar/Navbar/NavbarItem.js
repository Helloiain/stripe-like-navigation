import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {DropdownBackground} from '../DropdownContainer/Components.js'
import {DropdownSection} from '../DropdownContents/Components.js'

const NavbarItemTitle = styled.button`
    background: transparent;
    border: 0;
    font-family: inherit;
    font-size: 1.2rem;
    color: rgba(126,126,126,1);
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    transition: opacity 250ms;
    cursor: pointer;
    /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
    position: relative;
    z-index: 2;
    &hover, &focus {
        opacity: 0.7;
        outline: none;
    }
`

const NavbarItemEl = styled.li`
    position: relative;
    ${DropdownSlot}:nth-child(1) ${DropdownBackground}{
        left: 150px;
        @media(max-width:790px){
            width: 600px;
            ${DropdownSection} {
                display: flex;
            }
        }
    }
    ${DropdownSlot}:nth-child(2) ${DropdownBackground}{
        left: 50px;
        @media(max-width:790px){
            width: 600px;
        }
    }
    ${DropdownSlot}:nth-child(3) ${DropdownBackground}{
        left: -50px;
        @media(max-width:790px){
            width: 600px;
        }
    }
    ${DropdownSlot}:nth-child(4) ${DropdownBackground}{
        left: -150px;
        @media(max-width:790px){
            width: 600px;
        }
    }
    ${DropdownSlot}:nth-child(5) ${DropdownBackground}{
        left: -260px;
        @media(max-width:790px){
            width: 600px;
        }
    }
`

const DropdownSlot = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    perspective: 1500px;
`

class NavbarItem extends Component {
    static propTypes = {
        onMouseEnter: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        children: PropTypes.node
    }

    onMouseEnter = () => {
        this.props.onMouseEnter(this.props.index)
    }

    render() {
        const { title, children } = this.props
        return (
            <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
                <NavbarItemTitle>{title}</NavbarItemTitle>
                <DropdownSlot>{children}</DropdownSlot>
            </NavbarItemEl>
        )
    }
}

export default NavbarItem