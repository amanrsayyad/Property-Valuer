import React from 'react';
import { Link } from 'react-router-dom';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus_container'>
        <div className='aboutus_card'>
          <h2>About Us</h2>
        </div>
        <div className='aboutus_card'>
          <p>
            Mr. Shekhar Laxman Thite, a postgraduate degree holder from the
            renowned IIT, Bombay, formed his privately owned company in 1984,
            with the guiding principle that not only the future but the present
            also belongs to those who know the latest techniques. He has always
            been updating and using his knowledge in the latest developments in
            the valuation practice, his engineering disciplines and information
            technology. Throughout his career he has scrupulously observed two
            watchwords – honesty and integrity. As a result, this company has
            made its presence felt at both the national and international
            levels. This is a private limited company, duly registered with the
            Registrar of companies under the Ministry of Corporate Affairs.
          </p>
          <Link to="/">Know More</Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
