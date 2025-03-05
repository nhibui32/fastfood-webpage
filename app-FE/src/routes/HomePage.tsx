import React from 'react'
import DisplayMenu from '../components/HomePage/DisplayMenu'
import YourCart from '../components/HomePage/Cart'
import NavBar from '../components/LandingPage/NavBar'
import BottomNavBar from '../components/HomePage/HomeNavBar'
import ThemeToggle from '../components/HomePage/ThemeToggle'
export default function MenuPage() {

  return (
      <div className=''>
        <ThemeToggle/>
        <BottomNavBar/>
      </div>
  )
}
