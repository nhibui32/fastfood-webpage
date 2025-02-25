import React, { useState } from 'react'
import openEye from '../../../public/CredentialsPageImages/OpenEye.svg'
import closedEye from '../../../public/CredentialsPageImages/SlashEye.svg'
import Google from '../../../public/CredentialsPageImages/google.png'
import Facebook from '../../../public/CredentialsPageImages/facebook.png'
import { CredentialType } from '../../routes/CredentialsPage';

export default function Signup() {
    const[showPW, setShowPW] = useState(false);

    const showPassword = () => {
        setShowPW((prev)=>{
            return !prev
        })
    }
    return(
        <div className='p-10 leading-loose space-y-5 desktop:space-y-7 text-xl desktop:text-2xl'>
            <h1 className='font-bold text-3xl desktop:text-5xl text-center desktop:text-left'>Create Your Account</h1>
            
            <div className='desktop:flex w-full gap-10'>
                <div className='mb-3 desktop:w-[300px] cursor-pointer'>
                    <button className='bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] shadow rounded-2xl w-full flex items-center justify-center gap-2 py-2 cursor-pointer'>
                        <img src={Google} alt="Google" className='w-5 h-5' />
                        <span>Sign up with Google</span>
                    </button>
                </div>

                <div className='mb-3 desktop:w-[300px] cursor-pointer'>
                    <button className='shadow rounded-2xl w-full flex items-center justify-center gap-2 py-2 cursor-pointer'>
                        <img src={Facebook} alt="Facebook" className='w-5 h-5' />
                        <span className='text-blue-900'>With Facebook</span>
                    </button>
                </div>
            </div>

            <div>
                <p className='border w-[30px]'></p>
                <p className='text-gray-500'>Or sign up using your email address</p>
            </div>
            {/* <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label>Your email</label>
                    <input type="email" placeholder='Nhibui0302@gmail.com' className='border rounded-2xl pl-5 ml-3 h-12 '/>
            </div> */}
            <div className='desktop:flex desktop:gap-10'>
                 <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label>Name</label>
                    <input type="text" placeholder='Nhi Bui' className='border rounded-2xl pl-5 ml-3 h-12 '/>
                </div>

                <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label htmlFor="User Name">User Name</label>
                    <input type="text" placeholder='buin21' className='border rounded-2xl pl-5 ml-3 h-12 '/>
                </div>
            </div>


            <div className='desktop:flex desktop:gap-10'>
                <label className='flex flex-col desktop:w-1/2 relative'>Your email
                    <input type="email" name="" id="email" placeholder='Nhibui0302@gmail.com' className='border rounded-2xl pl-5 ml-3 h-12'/>
                </label>

                <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label>Password</label>
                    <input type={showPW ? "text" : "password"} name="" id="password" placeholder='7+ Characters' className='border rounded-2xl pl-5 ml-3 h-12 '/>
                    <img src={showPW ? openEye: closedEye} alt="" className='h-5 w-5 absolute right-3 top-1/2 cursor-pointe mt-2 cursor-pointer' onClick={showPassword}/>
                </div>

            </div>

            <div className='flex gap-5 relative'>
                <input type="checkbox" /> 
                <p className='text-gray-500'>I accept the <span className='text-blue-900'>Term and Conditions</span>
                </p>
            </div>

            <div>
                <button className='border w-[150px] rounded-3xl bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]  ' >Sign Up </button>
            </div>
            
        </div>
    )
}
