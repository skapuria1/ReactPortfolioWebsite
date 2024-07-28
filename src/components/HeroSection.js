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
          a dedicated and skilled software developer with a commitment to excellence. 
          With several years of hands-on experience, my expertise encompasses Java, 
          Python, Java, .NET, C++, HTML, CSS, JavaScript, and ReactJS, enabling the creation 
          of dynamic and user-centric solutions. I continuously refine my skills to 
          deliver innovative and impactful digital experiences that engage and captivate 
          users.
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