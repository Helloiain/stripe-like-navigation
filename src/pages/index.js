import React, { Component } from "react"
import AnimatedNavbar from "../navbar"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    * {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: rgba(123,123,123,1);
    }
    body {
      max-width: 100%;
      overflow-x: hidden;
    }
`

export default class Index extends Component {
  state = { duration: 300 }

  render() {
    return (
      <>
        <GlobalStyle />
        <AnimatedNavbar duration={this.state.duration} />
      </>
    )
  }
}
