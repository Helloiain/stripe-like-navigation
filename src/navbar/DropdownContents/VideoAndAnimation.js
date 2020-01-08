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

export const VideoAndAnimationDropdown = () => {
  return (
    <DropdownEl>
      <DropdownSection>
        <ListPrimary>
          <li>
            <Logo src={ImagePlaceholder} />
          </li>
          <li>
            <DropdownTitle>Video & Animation</DropdownTitle>
          </li>
          <li>
            Bring Your vision to life with the assistance of one of out artists.
          </li>
          <li>
            <DropdownButton>All Video & Animation Services</DropdownButton>
          </li>
        </ListPrimary>
        <ListSection>
          <li>
            <Heading>Animation</Heading>
          </li>
          <li>Whiteboard & Animation Explainers</li>
          <li>Logo Animation</li>
          <li>3D Product Animation</li>
          <li>Character Animation</li>
          <li>
            <Heading>Live Action</Heading>
          </li>
          <li>Live Action Explainers</li>
          <li>Spokespersons Videos</li>
          <li>
            <Heading>Social & Marketing</Heading>
          </li>
          <li>Short Video Ads</li>
          <li>Slideshows & Proms Videos</li>
          <li>Lyric & Music Videos</li>
        </ListSection>
        <ListSection>
          <li>
            <Heading>Photography</Heading>
          </li>
          <li>Product Photography</li>
          <li>Local Photography</li>
          <li>
            <Heading>Editing & Post Production</Heading>
          </li>
          <li>Video Editing</li>
          <li>Subtitles & Captions</li>
          <li>Visual Effects</li>
          <li>Intros & Outros</li>
        </ListSection>
      </DropdownSection>
    </DropdownEl>
  )
}
