import React from 'react'
import pizza from '../../../public/images/Classic-Pepperoni-Pizza.jpg'

export default function About() {
  return (
    <div className='p-5 desktop:p-10 text-xl desktop:text-2xl desktop:flex flex justify-center items-center '>
      <div className='desktop:w-1/2 space-y-5'>
        <p>About</p>
        <p className='text-3xl desktop:text-5xl font-bold'>The Best and Most Delicious Quality Food that Can Make Your Day</p>
        <img src={pizza} alt="Pizza" className='desktop:hidden rounded-3xl'/>
        <p>At YumBox, we pride ourselves on delivering the best and most delicious quality food that will brighten your day. From sizzling pizzas and juicy burgers to refreshing drinks and delightful kids' meals, every dish is crafted with the finest ingredients and a passion for perfection. Whether you're craving a quick bite or a hearty feast, we’re here to make every meal unforgettable</p>
      </div>

      <div className='hidden desktop:flex  h-[600px] desktop:w-1/2 justify-center rounded-3xl'>
        <img src={pizza} alt="" className='rounded-lg w-[600px]'/>
      </div>
    </div>
  )
}
