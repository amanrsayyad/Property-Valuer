import React from 'react';
import CopyFooter from './CopyFooter';
import './Map.css';

const Map = () => {
  return (
    <div className='map'>
      <div className='map_container'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15205.014684778991!2d73.9905258!3d17.6854728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8245efe68107900d!2sPrashant%20Sawant%20(INNOVATIVE)%20Property%20Valuer!5e0!3m2!1sen!2sin!4v1659800221526!5m2!1sen!2sin'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
        ></iframe>
      </div>
        <p>
          We offer valuation services of fixed assets of land and building,
          plant and machinery for different purposes. The company also does
          valuation of intellectual property rights such as patents, copyrights,
          trademarks, G.I., Goodwill etc.
        </p>
        <CopyFooter />
    </div>
  );
};

export default Map;
