import React, { useState } from 'react'
import openEye from '../../../public/CredentialsPageImages/OpenEye.svg'
import closedEye from '../../../public/CredentialsPageImages/SlashEye.svg'
import Google from '../../../public/CredentialsPageImages/google.png'
import Facebook from '../../../public/CredentialsPageImages/facebook.png'
import { CredentialType } from '../../routes/CredentialsPage';

const SignIn:React.FC<CredentialType> = ({type}) =>{
    const[showPW, setShowPW] = useState(false);

    const showPassword = () => {
        setShowPW((prev)=>{
            return !prev
        })
    }
    return(
        <div className='p-10 leading-loose space-y-5 desktop:space-y-7 text-xl desktop:text-2xl'>
            <h1 className='font-bold text-3xl desktop:text-5xl text-center desktop:text-left'>Sign In</h1>
            
            <div className='desktop:flex w-full gap-10'>
                <div className='mb-3 desktop:w-[300px]'>
                    <button className='bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] shadow rounded-2xl w-full flex items-center justify-center gap-2 py-2'>
                        <img src={Google} alt="Google" className='w-5 h-5' />
                        <span>Sign in with Google</span>
                    </button>
                </div>

                <div className='mb-3 desktop:w-[300px]'>
                    <button className='shadow rounded-2xl w-full flex items-center justify-center gap-2 py-2'>
                        <img src={Facebook} alt="Facebook" className='w-5 h-5' />
                        <span className='text-blue-900'>With Facebook</span>
                    </button>
                </div>
            </div>

            <div>
                <p className='border w-[30px]'></p>
                <p className='text-gray-500'>Or sign in using your email address</p>
            </div>

            <div className='desktop:flex desktop:gap-10'>
                <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label>Your email</label>
                    <input type="email" placeholder='Nhibui0302@gmail.com' className='border rounded-2xl pl-5 ml-3 h-12 '/>
                </div>

 
                <div className='flex flex-col desktop:w-1/2  relative justify-center '>
                    <label>Password</label>
                    <input type={showPW ? "text" : "password"} placeholder='Enter your password' className='border rounded-2xl pl-5 ml-3 h-12 '/>
                    <img src={showPW ? openEye: closedEye} alt="" className='h-5 w-5 absolute right-3 top-1/2 cursor-pointe mt-2 cursor-pointer' onClick={showPassword}/>
                </div>
            </div>

            <div className='flex gap-2 text-base'>
                <input type="checkbox" /> 
                <p>Remember me </p>
                <p>Forgot password?</p>
            </div>

            <div>
                <button className='border w-[150px] rounded-3xl bg-gradient-to-r from-[#36D1DC] to-[#5B86E5]  ' >Sign in </button>
            </div>
            
        </div>
    )
}

export default SignIn;
