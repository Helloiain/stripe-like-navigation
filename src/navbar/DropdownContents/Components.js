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
  margin: 1rem 0 0.5rem 0;
  color: rgba(126, 126, 126, 1);
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
  padding: .75rem;
  white-space: nowrap;
  margin: 1.5rem 0;
  font-weight: bold;
  color: rgba(19, 103, 204, 1);
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`

export const ListPrimary = styled.ul`
  background-color: rgba(247, 249, 252, 1);
  padding: 2rem;
  margin-right: 3rem;
  list-style-type: none;
`

export const ListSection = styled.ul`
  padding: 3rem;
  padding-left: 0;
  list-style-type: none;
  li {
    display: flex;
    white-space: nowrap;
  }
`
