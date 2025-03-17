import React from 'react'
import DisplayMenu from '../components/HomePage/DisplayMenu'
import YourCart from '../components/HomePage/Cart'
import NavBar from '../components/LandingPage/NavBar'
import {HomeNavBar} from '../components/HomePage/BottomNavBar'
import {SideBar} from '../components/HomePage/BottomNavBar'
import TopNavBar from '../components/HomePage/TopNavBar'
import Dashboard from '../components/HomePage/Dashboard'
export default function MenuPage() {

  return (
      <div className=''>
        <TopNavBar/>
        <SideBar/>
        <HomeNavBar/>
      </div>
  )
}
