import React from 'react'
import '../../App.css'
import './Projects.css'

export default function Projects() {
    return (
        <div className="project-page">
            <div className="background"></div>
            <header>My Projects</header>
            <div className="content">
                <h1>My Projects</h1>
                <div className="repository">
                    <p>Check out my projects on GitHub:</p>
                    <a href="https://github.com/skapuria1" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>&nbsp;GitHub</a>
                </div>
            </div>
        </div>
    );
}