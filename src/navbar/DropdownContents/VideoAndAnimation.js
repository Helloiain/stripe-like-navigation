import React from 'react'
import { DropdownEl, DropdownSection, Heading, ListSection } from './Components.js'

export const VideoAndAnimationDropdown = () => {
    return (
        <DropdownEl>
            <DropdownSection>
                <ListSection>
                    <li>
                        <Heading>Animation</Heading>
                    </li>
                    <li>
                        Whiteboard & Animation Explainers
                    </li>
                    <li>
                        Logo Animation
                    </li>
                    <li>
                        3D Product Animation
                    </li>
                    <li>
                        Character Animation
                    </li>
                    <li>
                        <Heading>Live Action</Heading>
                    </li>
                    <li>
                        Live Action Explainers
                    </li>
                    <li>
                        Spokespersons Videos
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Photography</Heading>
                    </li>
                    <li>
                        Product Photography
                    </li>
                    <li>
                        Local Photography
                    </li>
                    <li>
                        <Heading>Editing & Post Production</Heading>
                    </li>
                    <li>
                        Video Editing
                    </li>
                    <li>
                        Subtitles & Captions
                    </li>
                    <li>
                        Visual Effects
                    </li>
                    <li>
                        Intros & Outros
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Social & Marketing</Heading>
                    </li>
                    <li>
                        Short Video Ads
                    </li>
                    <li>
                        Slideshows & Proms Videos
                    </li>
                    <li>
                        Lyric & Music Videos
                    </li>
                </ListSection>
            </DropdownSection>
        </DropdownEl>
    )
}