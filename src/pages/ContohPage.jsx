import React from 'react'

export const ContohPage = () => {
  return (
    <div className='hidden flex-col p-5 web:flex tablet:flex mobile:flex'>
        <div className='flex justify-center items-center text-white bg-[#EB3838] w-full h-[70px] web:w-full tablet:w-full mobile:w-[50%] web:ml-0 tablet:ml-0 mobile:ml-[50%]'>Merah</div>
        <div className='flex w-full h-screen web:flex-row tablet:flex-col mobile:flex-col'>
            <div className='flex justify-center items-center text-white bg-[#5C38EB] web:w-[40%] web:h-full web:flex tablet:hidden mobile:flex mobile:h-[50%]'>Ungu</div>
            <div className='flex w-full h-full web:flex-col tablet:flex-col mobile:flex-col'>
                <div className='flex justify-center items-center text-white bg-[#38EB55] w-full h-[50%] web:flex tablet:flex mobile:hidden'>Hijau</div>
                <div className='flex w-full h-[50%] web:flex-row'>
                    <div className='flex justify-center items-center text-white bg-[#38C0EB] w-full h-full web:bg-[#38C0EB] tablet:bg-[#EB38AE] web:flex tablet:flex mobile:hidden'>Biru</div>
                    <div className='flex justify-center items-center text-white bg-[#EB38AE] w-full h-full web:flex tablet:flex mobile:hidden'>Pink</div>
                    <div className='flex justify-center items-center text-white bg-[#EB38AE] w-full h-full web:hidden tablet:hidden mobile:flex'>Pink</div>
                    <div className='flex justify-center items-center text-white bg-[#38C0EB] w-full h-full web:bg-[#38C0EB] tablet:bg-[#EB38AE] web:hidden tablet:hidden mobile:flex'>Biru</div>
                </div>
                 <div className='flex justify-center items-center text-white bg-[#5C38EB] web:w-[40%] web:hidden tablet:flex mobile:hidden tablet:h-[50%]'>Ungu</div>
                 <div className='flex justify-center items-center text-white bg-[#38EB55] w-full h-[50%] web:hidden tablet:hidden mobile:flex'>Hijau</div>
            </div>
        </div>
    </div>
  )
}
