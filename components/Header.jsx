import Image from 'next/image'
import React from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { RxAvatar } from 'react-icons/rx'

const Header = () => {
  return (
    <div className="left w-full p-4 flex flex-row md:flex-col md:h-screen md:w-16 justify-between items-center shadow-md dark:bg-neutral-900">
          <HiOutlineMenuAlt2 className='text-3xl'/>
          <div className="flex flex-wrap justify-center items-center gap-2 md:-rotate-90 w-[500px] ">
          <Image src="/gdsc-logo.png" alt='logo' width={200} height={200} className='w-6'/>
          <h1 className='text-xs font-light md:text-lg'>Google Developer Student Club</h1>
          </div>
          <RxAvatar className='text-3xl'/>
      </div>
  )
}

export default Header