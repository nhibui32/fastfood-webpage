import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../../../public/images/YumBoxLogo.png'


const shoppingCart = "/CredentialsPageImages/ShoppingCart.svg";
const userProfile = "/CredentialsPageImages/UserCircle.svg";


export default function NavBar({openMenu,toggleMenu}) {
    const navigate = useNavigate();
    const[loggedIn, setLoggedIn] = useState<boolean>(true);

    const goToSignInPage = () => {
        navigate('/credentials');
    }

    const HomePage = () => {
        navigate('/')
    }
    
    const MenuPage = () =>{
        navigate('/menu')
    }
    

    const menu = () => {
        return (
                <ul className=' flex-row desktop:flex desktop:justify-between items-center desktop:text-2xl '>
                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left' onClick={HomePage}>Home</li>

                    <li className='relative cursor-pointer inline-block  after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left' onClick={MenuPage}>Menu</li>

                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Service</li>

                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Promo</li>

                    {loggedIn ? 
                        <div className='flex items-center gap-10'>
                            <img src={shoppingCart} alt="Shopping Cart Icon" className="w-12 h-12 cursor-pointer" />
                            <img src={userProfile} alt="User Profile Icon" className="w-12 h-12 cursor-pointer" />
                        </div>
                        : 
                        <button className='bg-yellow-600 h-10 w-[183px] desktop:h-16  rounded-lg text-white' onClick={goToSignInPage}>Create Account</button>
                    }
                </ul>
        )
    }


  return (
    <div className='flex justify-between items-center p-5 desktop:h-[100px] h-[70px]  desktop:p-10 border-b border-slate-600 shadow-2xl'>
        <img src={logo} alt="Logo Icon" className='w-12 h-12 desktop:w-20 desktop:h-20'/>

        <div className='hidden desktop:block desktop:w-3/5'>{menu()}</div>


        <div className='space-y-1 group relative desktop:hidden' onClick={toggleMenu}>

            <div
            className={`w-5 rounded-full border border-b-2 border-black transition-transform duration-300 ${
                openMenu ? 'rotate-45 translate-x-1 translate-y-0.5' : ''
            }`}
            ></div>

            <div className={`w-10 rounded-full border border-b-2 border-black transition-transform duration-300 ${openMenu ? '-rotate-45 translate-y-0.5' : ''} `}></div>

            <div className={`absolute right-0 w-5 rounded-full border border-b-2 border-black items-end transition-transform duration-300 ${openMenu? 'rotate-45 -translate-x-1' : ''} `}></div>
        </div>

        <div className={`gap-4 p-5 absolute desktop:hidden top-[70px] left-0 w-full bg-gradient-to-bl from-brickRed via-goldenPeach  flex flex-col items-center font-semibold text-lg transform transition-transform ${openMenu ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease,   opacity 0.3s ease" }}> 
                <ul className='flex flex-col items-center gap-4 '>
                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left' onClick={HomePage}>Home</li>

                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left' onClick={MenuPage}>Menu</li>

                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Service</li>

                    <li className='relative cursor-pointer inline-block after:block after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left'>Promo</li>
                </ul>
                {loggedIn ? 
                        <button className='bg-yellow-600 h-10 w-[183px] desktop:h-16  rounded-lg text-white relative items-center flex justify-center gap-2'><img src={userProfile} alt="" className='w-8 h-8'/>My Account</button>
                        : 
                        <button className='bg-yellow-600 h-10 w-[183px] desktop:h-16  rounded-lg text-white' onClick={goToSignInPage}>Create Account</button>
                }
        </div> 
    </div>
    
  )
}

