import React from 'react';
import './WhatWeDo.css';
import whatdo from '../../assets/whatdo.jpg';

const WhatWeDo = () => {
  return (
    <div className='whatwedo'>
      <div className='what_container'>
        <div className='what_card'>
          <h2>What We Do</h2>
          <p>
            We are a leading company in the profession of Valuation and
            Chartered Engineering Services. We possess excellent and wide range
            of satisfied clients. Our technical and secretarial staff is one of
            our strong points.
          </p>
          <p>
            We believe that by doing good and honest work we are helping the
            finance sector and in turn, the country.
          </p>
        </div>
        <div className='what_card'>
          <img src={whatdo} alt='' />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
