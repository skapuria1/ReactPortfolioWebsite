import React, { useEffect, useState } from 'react';
import '../../App.css';
import './Projects.css';

export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/skapuria1/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
            .catch(error => console.error('Error fetching repositories:', error));
    }, []);

    return (
        <div className="project-page">
            <div className="background"></div>
            
            <div className="content">
                <h1>My Projects</h1>
                <div className="repository">
                    <p>Check out my projects on GitHub:</p>
                    <a href="https://github.com/skapuria1" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i>&nbsp;GitHub
                    </a>
                    <div className="repos">
                        {repos.map(repo => (
                            <div className="repo" key={repo.id}>
                                <h2><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h2>
                                <p>{repo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
