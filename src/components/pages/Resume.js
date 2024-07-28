import React from 'react';
import '../../App.css';
import './Resume.css';
import profilePic from './profile-pic.jpg';
import resumePDF from './skapuria-resume.pdf'; // resume pdf

export default function Resume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Sammy_Kapuria_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume">
            <header>
                <div className="profile-pic">
                    <img src={profilePic} alt="Profile" />
                </div>
                <div className="header-details">
                    <h1>Sammy Kapuria</h1>
                    <p>Fullstack Developer</p>
                    <p>Email: sammykapuria@gmail.com</p>
                </div>
            </header>

            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>CUNY Hunter College</h3>
                    <p>Bachelors in Computer Science</p>
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
                    <p>Junior Developer</p>
                    <p>February 2023 - Present</p>
                    <ul>
                        <li>Led multiple projects, specializing in maximizing workflow efficiency and productivity by fully utilizing the G Suite platform, including comprehensive user management and feature utilization.</li>
                        <li>Enhanced and maintained multiple React-based applications by developing reusable and efficient React components, resulting in a 20% improvement in development speed for new features, and collaborated with senior developers, UX/UI designers, and QA teams to ensure optimal performance and timely delivery of updates.</li>
                        <li>Automated call log processing with Python and MySQL.</li>
                        <li>Resolved technical issues using Jira.</li>
                        <li>Developed, designed, and implemented rate cards using React.js, HTML, and CSS, resolving any bugs or issues with rate card code.</li>
                        <li>Automated Google Calendar events with Apps Script.</li>
                        <li>Maintained server operations and resolved bugs.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>NYC DEPARTMENT OF HEALTH AND MENTAL HYGIENE</h3>
                    <p>COLLEGE AIDE - ASSIGNMENT LEVEL II (INFORMATION TECHNOLOGY)</p>
                    <p>November 2019 - January 2023</p>
                    <ul>
                        <li>Assisted with vaccine orders and VFC program re-enrollment.</li>
                        <li>Queried CIR databases with SQL for immunization records.</li>
                        <li>Installed and configured software across Windows, Mac, and Linux.</li>
                        <li>Troubleshot Digital Data Logger software issues.</li>
                        <li>Investigated and resolved provider site temperature excursions.</li>
                        <li>During the COVID-19 pandemic, collaborated with healthcare, government, and pharmaceutical sectors to streamline vaccine distribution and resource allocation.</li>
                        <li>Trained staff and providers on immunization best practices and vaccine management.</li>
                    </ul>
                </div>
            </section>

            <section className="proj">
                <h2>Projects</h2>
                <div className="project-item">
                    <h3>Computer Science Final Project</h3>
                    <ul>
                        <li>Assumed leadership for a four-person team tasked with creating a React based organizational app.</li>
                        <li>Facilitated brainstorming sessions to generate ideas and proficiently assigned technical responsibilities to team members.</li>
                        <li>Conducted weekly Discord meetings for task delegation, ensuring the team's collective focus and progress.</li>
                        <li>Delivered a fully operational web based React App with Firebase Authentication and presented a successful team demonstration to a class of 35.</li>
                    </ul>
                </div>
                <div className="project-item">
                    <h3>Evaluating Infix Arithmetic Expressions</h3>
                    <ul>
                        <li>Created an operator stack to translate an infix expression into a postfix expression and an operand stack to evaluate the postfix expression.</li>
                        <li>Implemented exception handling for illegal expressions like missing operands or division by zero through exception handling.</li>
                    </ul>
                </div>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>.NET</li>
                    <li>ReactJS</li>
                    <li>Swift</li>
                    <li>C++</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Git</li>
                </ul>
            </section>
            <button className="download-button" onClick={handleDownload}>
                <i className="fas fa-download"></i> <span>Download Resume (.pdf)</span>
            </button>
        </div>
    );
}
