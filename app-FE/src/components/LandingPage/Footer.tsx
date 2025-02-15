import React from 'react'
import Logo from '../../../public/images/YumBoxLogo.png'

export default function Footer() {

  function Menu(){
    return(
      <div className='flex desktop:flex-col justify-between space-y-3'>
        <p className='text-yellow-700 hidden desktop:flex'>Menu</p>
        <p>Home</p>
        <p>Category</p>
        <p>New</p>
        <p>Shop</p>
      </div>
    )
  }

  return (
    <div className='p-5 desktop:p-10 space-y-5 desktop:space-y-16'>
      <div className='flex items-center justify-center gap-5'>
        <img src={Logo} alt="Logo Icon" className='w-14 h-14 desktop:w-20 desktop:h-20 '/>
        <p className='font-bold text-yellow-600 text-3xl desktop:text-5xl'>YUMBOX</p>
      </div>


      <div className='space-y-5 desktop:flex desktop:gap-10'>
        <div className='space-y-5 desktop:w-1/2'>
          <p className='font-bold text-3xl desktop:text-5xl'>savor your meal and delight in its flavors.</p>
          <p>Join and be the first to get the lastest news about trend, promotions, and much more!</p>
          <div className='relative flex items-center text-base desktop:text-3xl'>
            <input type="email" placeholder='Enter your email address' className=' border border-yellow-600 w-full bg-black p-2 rounded-lg'/>
            <button className='bg-yellow-600 absolute right-2 rounded-lg w-[100px] desktop:w-[200px] hover:bg-yellow-700'>Join now</button>
          </div>
        </div>

        <div className='flex space-x-10 justify-around desktop:w-1/2'>
          <div className='hidden desktop:flex'>
            {Menu()}
          </div>

          <div className='space-y-3'>
              <p className='text-yellow-700'>Get a promo</p>
              <p>50% Off</p>
              <p>Promo code</p>
              <p>Daily promo</p>
          </div>
          
          <div className='space-y-3'>
              <p className='text-yellow-700'>About us</p>
              <p>About</p>
              <p>Contact</p>
              <p>Career</p>
          </div>
      </div>

      </div>
      <div className='desktop:hidden '>
        {Menu()}
      </div>

      <div className='text-center text-gray-500'>
          <p>2021 Ibey Design.</p>
          <p>Allright reserved</p>
      </div>


    </div>
  )
}
