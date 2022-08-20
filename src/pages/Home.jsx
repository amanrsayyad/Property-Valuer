import React from 'react';
import Aboutus from '../component/Aboutus/Aboutus';
import Hero from '../component/Hero/Hero';
import Services from '../component/Services/Services';
import WhatWeDo from '../component/WhatWeDo/WhatWeDo';

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <WhatWeDo />
        <Aboutus />
    </div>
  )
}

export default Home;