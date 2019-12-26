import React from 'react'
import { DropdownEl, DropdownSection, Heading, ListSection } from './Components.js'

export const ProgrammingAndTechDropdown = () => {
    return (
        <DropdownEl>
            <DropdownSection>
                <ListSection>
                    <li>
                        <Heading>Websites</Heading>
                    </li>
                    <li>
                        Wordpress
                    </li>
                    <li>
                        Website Builders & CMS
                    </li>
                    <li>
                        Web Programming
                    </li>
                    <li>
                        E-Commerce Development
                    </li>
                    <li>
                        <Heading>Testing & Support</Heading>
                    </li>
                    <li>
                        Support & IT
                    </li>
                    <li>
                        Convert Files
                    </li>
                    <li>
                        User Testing
                    </li>
                    <li>
                        QA
                    </li>
                </ListSection>
                <ListSection>
                    <li>
                        <Heading>Software Development</Heading>
                    </li>
                    <li>
                        Mobile Apps
                    </li>
                    <li>
                        Desktop Applications
                    </li>
                    <li>
                        Chatbots
                    </li>
                    <li>
                        <Heading>Data Management</Heading>
                    </li>
                    <li>
                        Data Analysis & Reports
                    </li>
                    <li>
                        Databases
                    </li>
                </ListSection>
            </DropdownSection>
        </DropdownEl>
    )
}