import styled, { keyframes } from "styled-components"
import { promoteLayer } from "./utils"

const getDropdownRootKeyFrame = ({ animatingOut, direction }) => {
  if (!animatingOut && direction) return null
  return keyframes`
    from {
        transform: ${animatingOut ? "rotateX(0)" : "rotateX(-15deg)"};
        opacity: ${animatingOut ? 1 : 0}
    }
    to {
        transform: ${animatingOut ? "rotateX(-15deg)" : "rotateX(0)"};
        opacity: ${animatingOut ? 0 : 1};
    }
    `
}

export const DropdownRoot = styled.div`
    transform-origin: 0 0;
    ${promoteLayer}
    animation-name: ${getDropdownRootKeyFrame}
    animation-duration: ${props => props.duration}ms;
    /* use 'forwards' to prevent flicker on leave animation */
    animation-fill-mode: forwards;
    /* flex styles will center the caret child component */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 20px;
`

export const Caret = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
  top: -20px;
  left: calc(50% - 10px);
  z-index: 1;
`

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    z-index: -1;
    width: 280px;
    height: 100%;
    position: absolute;
    background-color: rgba(247, 249, 252, 1);
  }
`

export const InvertedDiv = styled.div`
    ${promoteLayer}
    position: ${props => (props.absolute ? "absolute" : "relative")}
    top: 0;
    left: 0;
    &:first-of-type {
        z-index: 1;
    }
    &:not(:first-of-type) {
        z-index: -1;
    }
`
