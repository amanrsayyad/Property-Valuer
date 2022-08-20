import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_card'>
          <h2>Contact</h2>
          <a href='#'>
            <i class='fa-solid fa-envelope'></i> info@innovative.com
          </a>
          <a href='#'>
            <i class='fa-solid fa-phone'></i> +91 9635201523
          </a>
        </div>
        <div className='footer_card'>
          <h2>Services</h2>
          <Link to='/'>Industry Solutions</Link>
          <Link to='/'>Valuation Services</Link>
          <Link to='/'>TEV/Feasibility Study</Link>
          <Link to='/'>Advisory Services</Link>
          <Link to='/'>Detailed Project Report Services</Link>
          <Link to='/'>Contact us</Link>
        </div>
        <div className='footer_card'>
          <h2>Social Media</h2>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i> Linkedin</a>
          <a href="#"><i class="fa-brands fa-twitter"></i> Twitter</a>
        </div>
        <div className='footer_card'>
          <h2>Logo</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
