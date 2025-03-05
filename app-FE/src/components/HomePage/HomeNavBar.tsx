import React from 'react'

const dashboard = '/HomePage/dashboard.svg';
const cart = '/HomePage/cart.svg';
const message = '/HomePage/message.svg';
const profile = '/HomePage/profile.svg';
export default function HomeNavBar() {
  return (
    <div>
      <div className='fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 text-sm'>
        <div className='grid h-full  max-w-lg grid-cols-4 mx-auto font-medium '>
            <button className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50'>
                <img src={dashboard} alt="" className='w-10 h-10'/>
                <p>Dashboard</p>
            </button>

            <button className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50'>
                <img src={cart} alt="" className='w-10 h-10'/>
                <p>Cart</p>
            </button>

            <button className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50'>
                <img src={message} alt="" className='w-10 h-10'/>
                <p>Message</p>
            </button>

            <button className='inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50'>
                <img src={profile} alt="" className='w-10 h-10'/>
                <p className='text-primary'>Profile</p>
            </button>
        </div>
      </div>
    </div>
  )
}
