
import React from 'react';
import { ServiceData } from '../../../src/data/Service.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { Pagination, Navigation} from 'swiper/modules';
import { DiVim } from 'react-icons/di';

export default function Service() {
  return (
    <div className='text-xl desktop:text-2xl space-y-5 desktop:space-y-10 p-5 desktop:p-10'>
      <div className='text-center space-y-5 desktop:space-y-10'>
        <h1 className='text-3xl desktop:text-5xl font-bold'>Best Choice</h1>
        <p>
          Your ultimate destination for mouthwatering meals, crafted to perfection and delivered
          with care. Make the best choice for quality, taste, and satisfaction!
        </p>
      </div>
      <div className='flex items-center justify-center '>
        <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}

        pagination={{clickable:true}}
        modules={[Navigation, Pagination]}
        >
          {ServiceData.map((item, index)=>{
            return(
              <SwiperSlide key={index}>
              <div className='border h-[350px] p-5 desktop:p-10 flex flex-col items-center justify-center space-y-5'>
                <img src={item.image} alt="" className='w-20 h-20'/>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  );
}
