import React from 'react'
import DisplayMenu from './DisplayMenu'
import {menu} from '../../data/Menu.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Navigation} from 'swiper/modules';
import { DiVim } from 'react-icons/di';


export default function Dashboard() {
  return (
    <div className='text-primaryText p-5 desktop:p-10'>
      <h1 className='text-3xl desktop:text-5xl font-bold'>Hey Nhi!</h1>
      <div className='mt-5 text-3xl desktop:text-5xl bg-containerBackground'>
        <h1>Categories</h1>
        <div className='flex items-center content-center justify-center mt-5 p-5 text-xl desktop:text-2xl '>
          <Swiper
            slidesPerView={2}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}
            breakpoints={{
              1024:{slidesPerView:3},
              1440:{slidesPerView:5},
            }}
          >
            {menu.map((category, index)=>{
              return (
                <SwiperSlide key={index} className='bg-gray-600 text-center justify-center'>
                  <div className=''>
                    <p>{category.category}</p>
                    <img src={category.catImg} alt="" className='w-[100px] h-[100px]'/>
                  </div>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </div>
      </div>
    </div>
  )
}


