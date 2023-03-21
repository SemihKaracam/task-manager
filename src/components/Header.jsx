import React from 'react'
import profil from "../assets/profil-fotografi.jpg"
const Header = () => {
  return (
    <div className='flex justify-end border-b-borderColor border-b-[1px] h-[72px] text-white'>
        <div className='flex items-center px-4 gap-1 bg-[#152338] h-full'>
            <div className='w-[32px] h-[32px]'>
                <img className='h-full w-full rounded-full' src={profil} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <span className='block text-[12px] font-semibold'>Semih Karaçam</span>
                <span className='opacity-60 text-[12px]'>Admin</span>
            </div>
        </div>
    </div>
  )
}

export default Header