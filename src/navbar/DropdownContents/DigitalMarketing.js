import React from "react"
import ImagePlaceholder from "../assets/IMAGE_PLACEHOLDER.png"
import {
  DropdownEl,
  DropdownSection,
  Heading,
  ListSection,
  Logo,
  ListPrimary,
  DropdownButton,
  DropdownTitle,
} from "./Components.js"

export const DigitalMarketingDropdown = () => {
  const condition = window.innerWidth <= 937

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
            <DropdownTitle>Digital Marketing</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Digital Marketing Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Social & Content</Heading>
          </li>
          <li>Social Media Marketing</li>
          <li>Influencer Marketing</li>
          <li>Content Marketing</li>
          <li>Email Marketing</li>
          <li>Video Marketing</li>
          <li>Music Promotion</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Search</Heading>
          </li>
          <li>SEO</li>
          <li>SEM</li>
          <li>Local listings</li>
          <li>
            <Heading>Research & Stratagy</Heading>
          </li>
          <li>Marketing Stratagy</li>
          <li>Domain Research</li>
          <li>Web Analytics</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Platform & Industries</Heading>
          </li>
          <li>Mobile Marketing & Advertising</li>
          <li>E-Commerce Marketing</li>
          <li>Crowdfunding</li>
          <li>
            <Heading>Misc.</Heading>
          </li>
          <li>Web Traffic</li>
          <li>Surveys</li>
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
            <DropdownTitle>Digital Marketing</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Digital Marketing Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Social & Content</Heading>
          </li>
          <li>Social Media Marketing</li>
          <li>Influencer Marketing</li>
          <li>Content Marketing</li>
          <li>Email Marketing</li>
          <li>Video Marketing</li>
          <li>Music Promotion</li>
          <li>
            <Heading>Platform & Industries</Heading>
          </li>
          <li>Mobile Marketing & Advertising</li>
          <li>E-Commerce Marketing</li>
          <li>Crowdfunding</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Search</Heading>
          </li>
          <li>SEO</li>
          <li>SEM</li>
          <li>Local listings</li>
          <li>
            <Heading>Research & Stratagy</Heading>
          </li>
          <li>Marketing Stratagy</li>
          <li>Domain Research</li>
          <li>Web Analytics</li>
          <li>
            <Heading>Misc.</Heading>
          </li>
          <li>Web Traffic</li>
          <li>Surveys</li>
        </ListSection>
      </DropdownSection>
    </DropdownEl>
  )
}
