import HeadingPage from "./components/LandingPage/HeadingPage"
import NavBar from "./components/LandingPage/NavBar"
import { useState } from "react"
import Service from "./components/LandingPage/Service"
import About from "./components/LandingPage/About"
import FavoriteFood from "./components/LandingPage/FavoriteFood"
import Footer from "./components/LandingPage/Footer"

function App() {
  const [openMenu, setOpenMenu] =useState(false)

  const toggleMenu = () => {
    setOpenMenu((prev)=> {
      return !prev;
    })
  }
  return (
    <div className="">
        <div className="bg-gradient-to-bl from-brickRed via-goldenPeach ">
        <NavBar openMenu={openMenu} toggleMenu={toggleMenu}/>
        <HeadingPage openMenu={openMenu} toggleMenu={toggleMenu}/>
        </div>

      <Service/>

      <About/>
      
      <div className="bg-gradient-to-bl from-brickRed via-goldenPeach">
        <FavoriteFood/>
      </div>
      
      <div className="bg-black text-white text-xl desktop:text-3xl">
        <Footer/>
      </div>
    </div>
  )
}

export default App
