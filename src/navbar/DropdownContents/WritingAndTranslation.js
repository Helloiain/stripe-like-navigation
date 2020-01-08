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

export const WritingAndTranslationDropdown = () => {
  const condition = window.innerWidth <= 955
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
            <DropdownTitle>Writing & Translation</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Writing & Translation Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Brand & Marketing Copy</Heading>
          </li>
          <li>Product Descriptions</li>
          <li>Email Copy</li>
          <li>Press Releases</li>
          <li>Business Names & Slogans</li>
          <li>Sales Copy</li>
          <li>
            <Heading>Translation & Transcripts</Heading>
          </li>
          <li>Translation</li>
          <li>Transcripts</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>OnlineContent</Heading>
          </li>
          <li>Articles & Blog Posts</li>
          <li>Website Content</li>
          <li>
            <Heading>Career Writing</Heading>
          </li>
          <li>Resumes & Cover Letters</li>
          <li>
            <Heading>Editing & Feedback</Heading>
          </li>
          <li>Proofreading & Editing</li>
          <li>Beta Reading</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Storytelling</Heading>
          </li>
          <li>Scriptwriting</li>
          <li>Creative Writing</li>
          <li>Speechwriting</li>
          <li>
            <Heading>Technical</Heading>
          </li>
          <li>Legal Writing</li>
          <li>Techinal Writing</li>
          <li>Research & Summaries</li>
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
            <DropdownTitle>Writing & Translation</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Writing & Translation Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Brand & Marketing Copy</Heading>
          </li>
          <li>Product Descriptions</li>
          <li>Email Copy</li>
          <li>Press Releases</li>
          <li>Business Names & Slogans</li>
          <li>Sales Copy</li>
          <li>
            <Heading>Translation & Transcripts</Heading>
          </li>
          <li>Translation</li>
          <li>Transcripts</li>
          <li>
            <Heading>Technical</Heading>
          </li>
          <li>Legal Writing</li>
          <li>Techinal Writing</li>
          <li>Research & Summaries</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>OnlineContent</Heading>
          </li>
          <li>Articles & Blog Posts</li>
          <li>Website Content</li>
          <li>
            <Heading>Career Writing</Heading>
          </li>
          <li>Resumes & Cover Letters</li>
          <li>
            <Heading>Editing & Feedback</Heading>
          </li>
          <li>Proofreading & Editing</li>
          <li>Beta Reading</li>
          <li>
            <Heading>Storytelling</Heading>
          </li>
          <li>Scriptwriting</li>
          <li>Creative Writing</li>
          <li>Speechwriting</li>
        </ListSection>
      </DropdownSection>
    </DropdownEl>
  )
}
