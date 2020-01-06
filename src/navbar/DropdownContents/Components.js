import styled from "styled-components"

export const DropdownEl = styled.div`
  display: flex;
`

export const DropdownSection = styled.div`
  display: flex;
  z-index: 1;
`

export const Heading = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  color: rgba(126,126,126,1);
`

export const HeadingLink = Heading.withComponent(`li`)

export const Logo = styled.img`
  width: 170px;
`

export const DropdownTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: rgba(19, 103, 204, 1);
`

export const DropdownButton = styled.div`
  background-color: #fff
  padding: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: rgba(19, 103, 204, 1);
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

export const ListPrimary = styled.ul`
  background-color: rgba(247, 249, 252, 1);
  padding: 1.5rem 1.5rem;
  list-style-type: none;
  li {
    width: 175px;
  }
`

export const ListSection = styled.ul`
  padding: 1.5rem 1rem;
  list-style-type: none;
  li {
    width: 175px;
    display: flex;
    
  }
`
