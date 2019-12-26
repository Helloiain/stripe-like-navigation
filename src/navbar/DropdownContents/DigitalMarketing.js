import React from 'react'
import { DropdownEl, DropdownSection, Heading, ListSection} from './Components.js'

export const DigitalMarketingDropdown = () => {
    return (
        <DropdownEl>
            <DropdownSection>
                <ListSection>
                    <li>
                        <Heading>Social & Content</Heading>
                    </li>
                    <li>
                        Social Media Marketing
                    </li>
                    <li>
                        Influencer Marketing
                    </li>
                    <li>
                        Content Marketing
                    </li>
                    <li>
                        Email Marketing
                    </li>
                    <li>
                        Video Marketing
                    </li>
                    <li>
                        Music Promotion
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Search</Heading>
                    </li>
                    <li>
                        SEO
                    </li>
                    <li>
                        SEM
                    </li>
                    <li>
                        Local listings
                    </li>
                    <li>
                        <Heading>Research & Stratagy</Heading>
                    </li>
                    <li>
                        Marketing Stratagy
                    </li>
                    <li>
                        Domain Research
                    </li>
                    <li>
                        Web Analytics
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Platform & Industries</Heading>
                    </li>
                    <li>
                        Mobile Marketing & Advertising
                    </li>
                    <li>
                        E-Commerce Marketing
                    </li>
                    <li>
                        Crowdfunding
                    </li>
                    <li>
                        <Heading>Misc.</Heading>
                    </li>
                    <li>
                        Web Traffic
                    </li>
                    <li>
                        Surveys
                    </li>
                </ListSection>
            </DropdownSection>
        </DropdownEl>
    )
}