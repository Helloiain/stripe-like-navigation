import React, { Component, Children, createRef } from "react"
import PropTypes from "prop-types"
import { Flipped } from "react-flip-toolkit"
import {
  DropdownRoot,
  Caret,
  DropdownBackground,
  InvertedDiv,
} from "./Components.js"
import FadeContents from "./FadeContents"

class DropdownContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    animatingOut: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right"]),
    duration: PropTypes.number
  }

  currentDropdownEl = createRef()
  prevDropdownEl = createRef()

  render() {
    const {
      children,
      direction,
      animatingOut,
      duration
    } = this.props
    const [currentDropdown, prevDropdown] = Children.toArray(children)
    return (
      <DropdownRoot
        direction={direction}
        animatingOut={animatingOut}
        duration={duration}
      >
        <Flipped flipId="dropdown-caret">
          <Caret />
        </Flipped>
        <Flipped flipId="dropdown">
          <DropdownBackground>
            <Flipped inverseFlipId="dropdown">
              <InvertedDiv>
                <FadeContents
                  direction={direction}
                  duration={duration}
                  ref={this.currentDropdownEl}
                >
                  {currentDropdown}
                </FadeContents>
              </InvertedDiv>
            </Flipped>

            <Flipped inverseFlipId="dropdown" scale>
              <InvertedDiv absolute>
                {prevDropdown && (
                  <FadeContents
                    animatingOut
                    direction={direction}
                    duration={duration}
                    ref={this.prevDropdownEl}
                  >
                    {prevDropdown}
                  </FadeContents>
                )}
              </InvertedDiv>
            </Flipped>
          </DropdownBackground>
        </Flipped>
      </DropdownRoot>
    )
  }
}

export default DropdownContainer
