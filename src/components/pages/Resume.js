import React from 'react'
import '../../App.css'
import './Resume.css'
import profilePic from './profile-pic.jpg'

export default function Resume() {
    return (
        <div className="resume">
            <header>
                <div className="profile-pic">
                    <img src={profilePic} alt="Profile" />
                </div>
                <div className="header-details">
                    <h1>Sammy Kapuria</h1>
                    <p>Front End Developer</p>
                    <p>Email: sammykapuria@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </header>

            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>CUNY Hunter College</h3>
                    <p>Bachelors Computer Science</p>
                    <p>Graduated: 2022</p>
                    <p><u>Undergraduate Coursework:</u> Operating Systems; Data Structures and Algorithms; Object Oriented Programming; Calculus; Computer Architecture; Discrete Structures; Intro to Robotics; Networks and Communication; Databases</p>
                </div>
                <div className="education-item">
                    <h3>Brooklyn Technical High School</h3>
                    <p>Major Diploma: Software Engineering</p>
                </div>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <div className="experience-item">
                    <h3>GRIT PPO</h3>
                    <p>Software Operations Specialist</p>
                    <p>February 2023 - Present</p>
                    <ul>
                        <li>Automated the process of call logs and dispositions being FTP'd from Five9 to the local server using Python and MySQL, subsequently uploading them to Retool, significantly improving agent KPI tracking by management.</li>
                        <li>Created an AI call center agent using Happitu, improving customer service response times and efficiency.</li>
                        <li>Developed and enhanced rate cards using HTML and CSS, incorporating a generalized checklist to streamline sales processes for agents, resulting in increased efficiency and accuracy.</li>
                        <li>Successfully managed and resolved numerous technical tickets through Atlassian ticketing system, addressing various hardware and software issues including Five9, Front, and Slack.</li>
                        <li>Integrated live chat features using Zoho, enhancing communication channels and customer support capabilities.</li>
                        <li>Implemented visual improvements to rate cards, enhancing user experience and readability for agents.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>NYC DEPARTMENT OF HEALTH AND MENTAL HYGIENE</h3>
                    <p>COLLEGE AIDE - ASSIGNMENT LEVEL II (INFORMATION TECHNOLOGY)</p>
                    <p>November 2019 - February 2023</p>
                    <ul>
                        <li>Utilized SQL to query CIR databases for immunization records, providing essential information to healthcare providers and parents regarding the retrieval of immunization records.</li>
                        <li>Assisted provider offices with vaccine orders and Vaccine for Children (VFC) Program re-enrollment and assist with providing education and information about the VFC program and its requirements.</li>
                        <li>Successfully installed and configured various software applications across multiple platforms, including Windows, Mac, and Linux systems.</li>
                        <li>Troubleshot Digital Data Logger software issues by conducting thorough analysis, identifying root causes, and implementing effective solutions to ensure seamless operation.</li>
                        <li>Conducted investigations into provider site temperature excursion incidents; coordinates activities to resolve problems.</li>
                        <li>During the COVID-19 pandemic, collaborated with cross-functional teams, including healthcare professionals, government agencies, and pharmaceutical companies, to streamline the COVID-19 vaccine distribution process and optimize resource allocation.</li>
                        <li>Develop and conduct trainings for PQA and provider office staff on immunization best practices.</li>
                        <li>Answer routine vaccine-related questions from providers, parents, health plans, and the public at large, and make appropriate referrals.</li>
                        <li>Train providers on vaccine ordering and management, CIR reporting and vaccine accountability issues.</li>
                        <li>Develop strategies to promote uptake of Digital Data Logger thermometers and appropriate vaccine storage units by vaccine provider.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h3>COMPUTER SCIENCE CLUB AT HUNTER COLLEGE</h3>
                    <p>PROJECT MANAGER</p>
                    <p>July 2018 - May 2021</p>
                    <ul>
                        <li>Assumed leadership for a four-person team tasked with creating a React based organizational app.</li>
                        <li>Facilitated brainstorming sessions to generate ideas and proficiently assigned technical responsibilities to team members.</li>
                        <li>Conducted weekly Discord meetings for task delegation, ensuring the team's collective focus and progress.</li>
                        <li>Delivered a fully operational web based React App with Firebase Authentication and presented a successful team demonstration to a class of 35.</li>
                    </ul>
                </div>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>Git</li>
                    <li>Responsive Design</li>
                </ul>
            </section>
        </div>
    );
}