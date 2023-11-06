import React from 'react'

const About = () => {
  return (
    <div className='py-4 flex flex-col justify-center items-center gap-4 px-2 md:px-10 bg-violet-50 dark:bg-violet-900'>
        <h1 className=' text-2xl md:text-3xl font-semibold'>About</h1>
        <p className=' py-4'>
        Disclaimer: GDSC IET DAVV is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit <a href="https://developers.google.com/community/gdg/" className='text-blue-500'>https://developers.google.com/community/gdg/</a>
        </p>
    </div>
  )
}

export default About