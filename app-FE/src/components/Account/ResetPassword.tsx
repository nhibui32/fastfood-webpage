import ArrowLeft from '../../../public/CredentialsPageImages/ArrowLeft.svg'

const ResetPassword:React.FC = ()=>{
    return(
        <div className='p-10 leading-loose space-y-5 desktop:space-y-7 text-xl desktop:text-2xl'>
            <h1 className='font-bold text-3xl desktop:text-5xl text-center desktop:text-left'>Forgot password?</h1>
            <p className="text-gray-500 text-lg">Enter the email address you used when you joined and we'll send you instructions to reset your password</p>


            <div className='desktop:flex desktop:gap-10'>
                <label className='flex flex-col w-full'>Your email
                    <input type="email" name="" id="email" placeholder='Enter your email address' className='border rounded-2xl pl-5 ml-3 h-12'/>
                </label>        
            </div>


            <div>
                <button className='border w-full rounded-3xl bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] h-12 ' >Sign in </button>
            </div>

            <div className='flex items-center gap-3'>
                <img src={ArrowLeft} alt="Arrow Left" className='w-5 h-5 '/>
                <p className='text-blue-900'>Back to sign in</p>
            </div>
            
        </div>
    )
}

export default ResetPassword