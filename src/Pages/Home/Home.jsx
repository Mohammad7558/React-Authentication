import React from 'react';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Service from '../../components/Service/Service';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    return (
        <div className='mb-10'>
          <Slider/>
          <WhyChooseUs/>
          <Service/>
        </div>
    );
};

export default Home;