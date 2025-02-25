import React from 'react'
import coverPic from '../../../public/images/pepperoni-pizza-2023-11-27-05-15-09-utc.jpg'
import { useNavigate } from 'react-router'
export default function HeadingPage({openMenu, toggleMenu}) {
  const navigate = useNavigate();
  const MenuPage =() =>{
    navigate('/menu')
  }
  return (
    <div className={`desktop:flex p-5 desktop:p-10 space-y-10 ${openMenu ? "mt-[250px]" : "mt-5"}`}>
        <div className=' flex  desktop:w-1/2 justify-center desktop:order-1 '>
            <img src={coverPic} alt="" className='w-[350px] h-[350px] rounded-full desktop:h-[550px] desktop:w-[550px]'/>
        </div>

        <div className='content-center p-5 space-y-5 desktop:w-1/2 desktop:order-2'>
            <h1 className='uppercase font-bold text-3xl desktop:text5xl'>Where every bite tells a flavorful story </h1>
            <p className='text-xl desktop:text-2xl text-slate-500'>our mission is to delivery your favorite and delivious food and with fast delivery </p>
            <div className='flex text-xl desktop:text-2xl gap-10 desktop:gap-16 items-center '>
                <p className='text-yellow-600'>$12</p>
                <button className=' bg-yellow-600 text-white h-10 w-[183px] rounded-lg' onClick={MenuPage}>Get Started</button>
            </div>
        </div>
    </div>
  )
}
