import React from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Get in touch!
            </p>
            <p className="footer-subscription-text">
                If you have any questions, opportunities for 
                collaboration, or just want to connect, please feel free to reach out by 
                by entering your email down below. I'll get back to you as soon as possible.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder= "Your Email" 
                    className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
       {/* <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

            </div>

            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

            </div>
        </div> */}
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                    <i class="fa-solid fa-power-off"></i> SK 
                    </Link>
                </div>
                <small className="website-rights">SK 2020</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to="/"
                    target="_blank"
                    aria-label='Instagram'
                    >
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="social-icon-link youtube"
                    to="/"
                    target="_blank"
                    aria-label='Youtube'
                    >
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer