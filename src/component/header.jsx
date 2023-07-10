

import React from 'react'
import Link from 'next/link'
export const Header = () => {
  return (
    <div className=' bg-lime-300 items-center text-black flex space-x-5 px-8 py-1  shadow-black shadow-md w-screen'>
    <img 
    className='w-[150px]'
    src="/jkuatLogo.png" 
    alt="" />
    <div className='flex flex-row gap-8 font-bold'>
    <Link href='/home'>
     Home
    </Link>
    <Link href='/browse'>

Browse
    </Link>
        </div>

    </div>
  )
}


