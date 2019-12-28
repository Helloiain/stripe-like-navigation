import styled from 'styled-components'

export const DropdownEl = styled.div`
    display: inline-block;
    white-space: nowrap;
`

export const DropdownSection = styled.div`
    display: flex;
    z-index: 1;
    @media (max-width: 760px) {
        display: block;
    }
`

export const Heading = styled.h3`
    font-weight: bold;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
    color: #000;
`;

export const HeadingLink = Heading.withComponent(`li`)

export const ListSection = styled.ul`
    padding: 0 1rem;
    list-style-type: none;
    li {
        display: flex;
        margin-bottom: .5rem;
    }
`