import React from 'react'

export const Contoh = () => {
  return (
    <div className='flex-col web:flex-col tablet:flex-col mobile:flex-col'>
        <div className='p-3'>
            <div className='flex justify-center bg-[#EB3838] w-full h-[50px] text-white items-center web:bg-[#EB3838] web:h-[50px] tablet:h-[50px] mobile:h-[50px]'>Merah</div>
        </div>
        <div className='flex flex-row h-full px-3 pb-3 tablet:flex-col tablet:h-full mobile:flex-col'>
            <div className='flex justify-center bg-[#5C38EB] w-[40%] h-screen text-white items-center web:bg-[#5C38EB] web:w-[40%] web:h-screen tablet:w-full tablet:h-[150px]'>Ungu</div>
            <div className='flex flex-col px-3 pr-0 w-full'>
                <div className='flex justify-center bg-[#38EB55] w-full h-[50%] text-white items-center web:bg-[#38EB55] web:h-full'>Hijau</div>
                <div className='flex flex-row h-full pt-3 gap-4'>
                    <div className='flex justify-center bg-[#38C0EB] w-full h-[100%] text-white items-center web:bg-[#38C0EB] web:h-full tablet:bg-[#EB38AE]'>Biru</div>
                    <div className='flex justify-center bg-[#EB38AE] w-full h-[100%] text-white items-center web:bg-[#EB38AE] web:h-full'>Pink</div>
                </div>
            </div>
        </div>
    </div>
  )
}
