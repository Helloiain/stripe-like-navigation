import React from 'react'
import { DropdownEl, DropdownSection, Heading, ListSection } from './Components.js'

export const WritingAndTranslationDropdown = () => {
    return (
        <DropdownEl>
            <DropdownSection>
                <ListSection>
                    <li>
                        <Heading>Brand & Marketing Copy</Heading>
                    </li>
                    <li>
                        Product Descriptions
                    </li>
                    <li>
                        Email Copy
                    </li>
                    <li>
                        Press Releases
                    </li>
                    <li>
                        Business Names & Slogans
                    </li>
                    <li>
                        Sales Copy
                    </li>
                    <li>
                        <Heading>Translation & Transcripts</Heading>
                    </li>
                    <li>
                        Translation
                    </li>
                    <li>
                        Transcripts
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>OnlineContent</Heading>
                    </li>
                    <li>
                        Articles & Blog Posts
                    </li>
                    <li>
                        Website Content
                    </li>
                    <li>
                        <Heading>Career Writing</Heading>
                    </li>
                    <li>
                        Resumes & Cover Letters
                    </li>
                    <li>
                        <Heading>Editing & Feedback</Heading>
                    </li>
                    <li>
                        Proofreading & Editing
                    </li>
                    <li>
                        Beta Reading
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Storytelling</Heading>
                    </li>
                    <li>
                        Scriptwriting
                    </li>
                    <li>
                        Creative Writing
                    </li>
                    <li>
                        Speechwriting
                    </li>
                    <li>
                        <Heading>Technical</Heading>
                    </li>
                    <li>
                        Legal Writing
                    </li>
                    <li>
                        Techinal Writing
                    </li>
                    <li>
                        Research & Summaries
                    </li>
                </ListSection>
            </DropdownSection>
        </DropdownEl>
    )
}