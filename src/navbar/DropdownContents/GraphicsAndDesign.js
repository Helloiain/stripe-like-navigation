import React from "react"
import {
  DropdownEl,
  DropdownSection,
  Heading,
  ListSection,
  Logo,
  DropdownTitle,
  DropdownButton,
  ListPrimary,
} from "./Components.js"
import ImagePlaceholder from "../assets/IMAGE_PLACEHOLDER.png"

export const GraphicsAndDesignDropdown = () => {
  const condition = window.innerWidth <= 990
  return <>{condition ? <Compact /> : <Primary />}</>
}

const Primary = () => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <li>
            <Logo src={ImagePlaceholder} />
          </li>
          <li>
            <DropdownTitle>Graphics & Design</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Graphics & Design Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Logo & Brand Identity</Heading>
          </li>
          <li>Logo Design</li>
          <li>Brand Style Guides</li>
          <li>Business Cards And Stationary</li>
          <li>
            <Heading>Web & Mobile</Heading>
          </li>
          <li>Web & Mobile Design</li>
          <li>Social Media Design</li>
          <li>Banner Ads</li>
          <li>
            <Heading>Product & Characters Design</Heading>
          </li>
          <li>3D Modeling & Product Design</li>
          <li>Character Modeling</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Print Design</Heading>
          </li>
          <li>Flyer Design</li>
          <li>Brochure Design</li>
          <li>Poster Design</li>
          <li>Catalog Design</li>
          <li>Menu Design</li>
          <li>Postcard Design</li>
          <li>Invitation Design</li>
          <li>
            <Heading>Architecture & Building Design</Heading>
          </li>
          <li>Architecture & Interior Design</li>
          <li>Landscape Design</li>
          <li>Building Information Modeling</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Packaging & Labels</Heading>
          </li>
          <li>Book & Album Covers</li>
          <li>Packaging Design</li>
          <li>Car Whaps?</li>
          <li>
            <Heading>Visual Design</Heading>
          </li>
          <li>Photoshop Editing</li>
          <li>Presentation Design</li>
          <li>Info Graphic Design</li>
          <li>Vector Tracing</li>
          <li>
            <Heading>Merchandise</Heading>
          </li>
          <li>T-Shirts & Merchandise</li>
        </ListSection>
      </DropdownSection>
    </DropdownEl>
  )
}

const Compact = () => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <li>
            <Logo src={ImagePlaceholder} />
          </li>
          <li>
            <DropdownTitle>Graphics & Design</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Graphics & Design Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Logo & Brand Identity</Heading>
          </li>
          <li>Logo Design</li>
          <li>Brand Style Guides</li>
          <li>Business Cards And Stationary</li>
          <li>
            <Heading>Web & Mobile</Heading>
          </li>
          <li>Web & Mobile Design</li>
          <li>Social Media Design</li>
          <li>Banner Ads</li>
          <li>
            <Heading>Product & Characters Design</Heading>
          </li>
          <li>3D Modeling & Product Design</li>
          <li>Character Modeling</li>
          <li>
            <Heading>Print Design</Heading>
          </li>
          <li>Flyer Design</li>
          <li>Brochure Design</li>
          <li>Poster Design</li>
          <li>Catalog Design</li>
          <li>Menu Design</li>
          <li>Postcard Design</li>
          <li>Invitation Design</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Architecture & Building Design</Heading>
          </li>
          <li>Architecture & Interior Design</li>
          <li>Landscape Design</li>
          <li>Building Information Modeling</li>
          <li>
            <Heading>Packaging & Labels</Heading>
          </li>
          <li>Book & Album Covers</li>
          <li>Packaging Design</li>
          <li>Car Whaps?</li>
          <li>
            <Heading>Visual Design</Heading>
          </li>
          <li>Photoshop Editing</li>
          <li>Presentation Design</li>
          <li>Info Graphic Design</li>
          <li>Vector Tracing</li>
          <li>
            <Heading>Merchandise</Heading>
          </li>
          <li>T-Shirts & Merchandise</li>
        </ListSection>
      </DropdownSection>
    </DropdownEl>
  )
}
