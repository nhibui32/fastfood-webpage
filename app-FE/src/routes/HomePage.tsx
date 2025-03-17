import React from 'react'
import { useState } from 'react'
import DisplayMenu from '../components/HomePage/DisplayMenu'
import YourCart from '../components/HomePage/Cart'
import NavBar from '../components/LandingPage/NavBar'
import {HomeNavBar} from '../components/HomePage/BottomNavBar'
import {SideBar} from '../components/HomePage/BottomNavBar'
import TopNavBar from '../components/HomePage/TopNavBar'
import Dashboard from '../components/HomePage/Dashboard'
import Cart from '../components/HomePage/Cart'
export default function MenuPage() {
  const [cartItems, setCartItems] = useState([]);
  return (
      <div className=''>
        <div className=''>
          <SideBar/>
        </div>

        <div className='desktop:ml-64 desktop:mr-[400px]'>
          <TopNavBar/>
          <Dashboard cartItems={cartItems} setCartItems={setCartItems}/>
        </div>

        <div className='fixed top-10 right-0 z-40 w-[350px] h-screen hidden desktop:flex text-xl desktop:text-2xl'>
          <Cart items={cartItems} />
        </div>
        
        <HomeNavBar/>
      </div>
  )
}
