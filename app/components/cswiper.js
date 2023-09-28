'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Image from "next/image";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow  } from 'swiper/modules';
const MySwiperComponent = ({ cats }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    
    if (!cats || cats.length === 0) {
      return null; 
    }
  
    return (
      <Swiper
        modules={[Navigation]} // Add EffectCoverflow module
        spaceBetween={50}
  
        slidesPerView={1}
      
        
        effect="coverflow" // Enable coverflow effect
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          console.log('slide change', swiper.activeIndex);
          setActiveSlideIndex(swiper.activeIndex);
        }}

        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          
        }}

      >
        {cats.map((cat, index) => (
          <SwiperSlide key={cat.title}>
             <div className="bg-ffffff  sm:pl-9 pl-3 sm:pr-7 pr-4 flex flex-col rounded-2xl sm:w-64 sm:h-60 w-28 h-24 content-end sm:mb-0 mb-3 shrink-0 sm:mr-7 mr-6 hov">
            <Image className='sm:pt-9 pt-3 sm:w-fit sm:h-20 w-fit sm:h-10 h-7 m'  src={cat.path} alt="Search Icon"></Image>
            <h4 className='sm:font-black font-bold sm:text-xl text-xxs sm:pt-7 pt-2 sm:pr-10 '>{cat.title}</h4>
            <p className="sm:text-xxs text-xxxs sm:pt-7 pt-2 sm:pb-9  text-8a8a8a">{cat.content}</p>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  

export default MySwiperComponent;


