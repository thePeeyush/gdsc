import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Links = () => {
  return (
    <div className='mx-auto w-fit mt-10 md:mt-0'>
                <h1 className='text-sm text-center'>Join Us On </h1>
        <ul className='flex flex-row gap-3 lg:gap-6 justify-center items-center w-fit  rounded-3xl px-3 md:px-6 py-5  md:m-4 text-slate-600  dark:text-neutral-200 bg-white dark:bg-transparent'>
            <li>
                <Link href="#">
                    <div className="dark:bg-neutral-500 bg-neutral-200 dark:bg-opacity-40 p-2 rounded-md flex flex-row justify-center items-center gap-2 hover:text-blue-700 hover:bg-blue-100">
                        <AiFillLinkedin className=' text-2xl'/>
                        <p className="hidden md:inline-block">LinkedIn</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="dark:bg-neutral-500 bg-neutral-200 dark:bg-opacity-40 p-2 rounded-md flex flex-row justify-center items-center gap-2 hover:text-blue-700 hover:bg-blue-100">
                        <FaSquareXTwitter className=' text-2xl'/>
                        <p className="hidden md:inline-block">Twitter</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="dark:bg-neutral-500 bg-neutral-200 dark:bg-opacity-40 p-2 rounded-md flex flex-row justify-center items-center gap-2 hover:text-blue-700 hover:bg-blue-100">
                        <AiFillInstagram className=' text-2xl'/>
                        <p className="hidden md:inline-block">Instagram</p>
                    </div>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <div className="dark:bg-neutral-500 bg-neutral-200 dark:bg-opacity-40 p-2 rounded-md flex flex-row justify-center items-center gap-2 hover:text-blue-700 hover:bg-blue-100">
                        <AiFillYoutube className=' text-2xl'/>
                        <p className="hidden md:inline-block">Youtube</p>
                    </div>
                </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Links