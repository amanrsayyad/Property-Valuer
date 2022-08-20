import React from 'react';
import './Head.css';

const Head = () => {
  return (
    <div className='head'>
        <div className="head_contact">
            <li><a href="#"><i class="fa-solid fa-envelope"></i> info@innovative.com</a></li>
            <li className="head_none">|</li>
            <li><a href="#"><i class="fa-solid fa-phone"></i> +91 9635201523</a></li>
        </div>
        <div className="head_social">
            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
            <li>|</li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        </div>
    </div>
  )
}

export default Head;