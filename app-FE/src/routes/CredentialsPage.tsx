import React from 'react'
import CoverPic from '../../public/CredentialsPageImages/ChickenBurger.jpg'
import Logo from '../../public/Logo/YumBoxLogo.png'
import Login from '../components/Account/SignIn'
import SignUp from '../components/Account/Signup'
import ForgotPW from '../components/Account/ResetPassword'
import { useState } from 'react'
export type CredentialType = {
    type:string,
}

export default function CredentialsPage() {
  const[account, setAccount] = useState(true)

  const createAccount= () => {
    setAccount((prev)=>{
      return !prev;
    })
  }

  const signInPage =() => {
    setAccount((prev)=>{
      return !prev;
    })
  }

  function notifUser(){
    return(
      <div className=''>
        {account ? <div className='flex gap-3'>
          <p className='text-gray-600 hidden desktop:flex gap-2'>New User?</p>
          <span className='text-blue-900 cursor-pointer' onClick={createAccount}> Create an account </span>
        </div> :
        
        <div className='flex gap-3'>
          <p className='text-gray-600 hidden desktop:flex gap-2'>Already a member?</p>
          <span className='text-blue-900 cursor-pointer' onClick={signInPage}> SignIn </span>
        </div>       
        }         
      </div>
    )
  }

  // <span className='text-blue-900 cursor-pointer' onClick={createAccount}></span>
  return (
    <div className='desktop:flex text-xl desktop:2xl'>
        <div className='absolute inset-0 p-10 flex justify-between '>
          <img src={Logo} alt="Logo Yum Box" className='w-14 h-14 z-10'/>

          <div className='h-14 flex items-center gap-5 content-center justify-center '>
            {notifUser()}

            <div className='border-2 border-white desktop:border-gray-500 h-14 w-14 flex justify-center rounded-3xl cursor-pointer z-10'>
              <p className='text-white desktop:text-gray-500 font-bold text-3xl'>. . .</p>
            </div>
          </div>
        </div>


      <div className='relative w-full desktop:w-1/2 desktop:h-fu ll'>
        <img src={CoverPic} alt="Chicken Burger Photo" className='w-full h-[400px] desktop:h-full'/>

        <div className='absolute inset-0 flex flex-col justify-center p-14'> 
          <p className='text-white font-bold text-3xl'>Sign Up Now and Savor Delicious Deals!</p>
        </div>
      </div>

      <div className='w-full desktop:w-1/2 desktop:content-center desktop:justify-center  desktop:flex desktop:flex-col desktop:p-14'>
        {account ? <Login/> : <SignUp/>}
      </div>
    </div>
  )
}
