import React from 'react'
import { menu } from '../../data/Menu.js'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function FavoriteFood() {
  return (
    <div className='p-5 desktop:p-10 '>
      <h1 className='text-3xl desktop:text-5xl font-bold'>Most Favorite Food</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {menu.map((category, indexCat) =>
          category.items.map((item, index) => (
            <SwiperSlide key={`${indexCat}-${index}`} className="flex flex-col">
              <div className="bg-white shadow-lg rounded-lg p-4 items-center flex-col justify-center content-center">
                <div className='items-center flex flex-col'>
                  <img src={item.image} alt={item.name} className="w-full h-[300px] rounded-lg object-cover" />
                </div>
                <p className="text-lg font-semibold mt-3">{item.name}</p>
                <p className='text-red-700'>$ {item.price}</p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}
