import React from 'react';
import { SplideSlide } from "@splidejs/react-splide";
import './Home.css'

const HomeBanner = ({banner}) => {
    const {image, name, description} = banner;
    
    return (
      <SplideSlide>
        <img className="w-[100vw] h-[80vh] bannerimage" src={image} alt="" />
        <div className='absolute text-accent lg:top-[75%] top-[50%] -translate-y-[50%] lg:left-[35%] left-[50%] -translate-x-[50%] lg:text-start zindx'>
          <p className="lg:text-6xl text-xl text-white mb-6">{name}</p>
          <p className="lg:text-3xl text-white">{description}</p>
        </div>
      </SplideSlide>
    );
};

export default HomeBanner;