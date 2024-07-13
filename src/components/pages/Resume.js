import React from 'react';
import '../../App.css';
import './Resume.css';
import profilePic from './profile-pic.jpg';
import resumePDF from './skapuria_resume.pdf'; // Make sure to place your resume PDF in the appropriate directory

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
                        <li>Automated the process of call logs and dispositions being FTP'd from Five9 to the local server using Python and MySQL, subsequently uploading them to Retool, significantly improving agent KPI tracking by management.</li>
                        <li>Resolved numerous technical tickets through the Jira ticketing system, addressing hardware and software issues with Five9, Front, and Slack.</li>
                        <li>Developed, designed, and implemented rate cards using React.js, HTML, and CSS, resolving any bugs or issues with rate card code.</li>
                        <li>Utilized Google Calendar API and Google Apps Script to automate creating, editing events triggered by certain conditions.</li>
                        <li>Maintained servers to ensure smooth operation, promptly addressing any issues or bugs to minimize downtime and optimize performance.</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h3>NYC DEPARTMENT OF HEALTH AND MENTAL HYGIENE</h3>
                    <p>COLLEGE AIDE - ASSIGNMENT LEVEL II (INFORMATION TECHNOLOGY)</p>
                    <p>November 2019 - January 2023</p>
                    <ul>
                        <li>Utilized SQL to query CIR databases for immunization records, providing essential information to healthcare providers and parents regarding the retrieval of immunization records.</li>
                        <li>Assisted provider offices with vaccine orders and Vaccine for Children (VFC) Program re-enrollment and assist with providing education and information about the VFC program and its requirements.</li>
                        <li>Successfully installed and configured various software applications across multiple platforms, including Windows, Mac, and Linux systems.</li>
                        <li>Troubleshot Digital Data Logger software issues by conducting thorough analysis, identifying root causes, and implementing effective solutions to ensure seamless operation.</li>
                        <li>Conducted investigations into provider site temperature excursion incidents; coordinates activities to resolve problems.</li>
                        <li>During the COVID-19 pandemic, collaborated with cross-functional teams, including healthcare professionals, government agencies, and pharmaceutical companies, to streamline the COVID-19 vaccine distribution process and optimize resource allocation.</li>
                        <li>Develop and conduct trainings for PQA and provider office staff on immunization best practices.</li>
                        <li>Train providers on vaccine ordering and management, CIR reporting and vaccine accountability issues.</li>
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
                        <li>Created an operator stack to translate an infix expression into a postfix expression and an operand stack to evaluate the postfix expression. Detect illegal expressions like missing operands or division by zero through exception handling.</li>
                    </ul>
                </div>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Python</li>
                    <li>React</li>
                    <li>Swift</li>
                    <li>C++</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Git</li>
                    <li>Responsive Design</li>
                </ul>
            </section>
            <button className="download-button" onClick={handleDownload}>
                <i className="fas fa-download"></i> Download Resume
            </button>
        </div>
    );
}
