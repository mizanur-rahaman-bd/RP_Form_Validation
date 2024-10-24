import React from 'react'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className='bg-[#050A24] p-10'>
          <div className="login w-[540px] h-[456px] mt-[200px] ml-[148px] py-[48px] rounded-[20px] px-[72px] bg-[#FFFFFF] rounded[20px]">
            <div className=''>
            <h1 className='text-center font-semibold text-[28px] text-[#101828]'>Login to your account</h1>
            <h2 className='mt-[32px] mb-[12px] text-[16px] font-normal text-[#101828]'>Email</h2>
            <input type="email" className='w-[396px] h-[48px] border-solid border-2 border-blue-400 outline-none p-1 rounded-lg' placeholder='balamia@gmail.com' />

            </div>
            <div className="password_row flex justify-between mt-[24px] mb-[12px] text-[16px] font-normal">
              <h2>Password</h2>
              <p className='text-blue-400'>Forgot？</p>
            </div>
            <input type="password" className='mb-[32px] w-[396px] h-[48px] border-solid border-2 border-black outline-none p-1 rounded-lg' placeholder='Enter your password' />

            
        <button className=" w-[396px] mb-[14px] p-[16px] bg-blue-500 text-white text-[16px]  font-medium rounded-[8px] hover:bg-[#F5004F] active:scale-110">
        Login now
        </button>

        <p className='text-center pb-[48px] font-normal text-[16px] text-gray-600'>Don't have an account ? <span className='text-blue-400'>Sign up </span></p>
      
            

          </div>

        </div>
        
      </div>
    
    </>
  )
}

export default Login