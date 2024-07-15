import React from 'react'
import '../App.css'
import { ResumeButton } from './ResumeButton'
import { ProjectButton } from './ProjectButton'
import './HeroSection.css'



function HeroSection() {
  return (
    <div className='hero-container'>
        <video src= {process.env.PUBLIC_URL +'videos/hoodie.mp4'} autoPlay loop muted />
        <h1>Sammy Kapuria,</h1>
        <p>
          a skilled fullstack developer dedicated to crafting engaging web experiences. 
          With several years of hands-on experience, my expertise lies in Java, Python, HTML, CSS, JavaScript, Java, C++, ReactJS, ensuring
          the creation of dynamic and user-centric websites. I thrive on employing innovative techniques to craft engaging web experiences 
          that captivate users and leave a lasting impact.
        </p>
        <div className='hero-btns'>
            <ResumeButton className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>RESUME</ResumeButton>
            <ProjectButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>PROJECTS&nbsp;
            <i className='fa-solid fa-diagram-project'/></ProjectButton>
            {/*<Link to = '/services' className='resume-btn'>
              Resume
  </Link>*/}
        </div>
    </div>
  );
}

export default HeroSection