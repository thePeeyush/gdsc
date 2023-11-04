import Image from 'next/image';
import React from 'react'

const Head = () => {
  return (
    <div className="flex flex-row gap-10 md:min-h-[550px] w-full items-center justify-center relative">
        <div className='dark:text-neutral-200 p-10 my-4 flex flex-col gap-6'>
        <h1 className='font-semibold text-3xl lg:text-6xl'>GDSC</h1>
        <h2 className=' bg-blue-700 p-2 text-center rounded-md text-lg lg:text-3xl text-neutral-200 max-w-md'>Institute of Engineering, <span className=''>DAVV, Indore</span></h2>
        <div className='absolute right-0 top-0 -z-20 opacity-60'><GridOfDots/></div>
    </div>
    <Image src="/gdsc-banner.png" alt='banner' width={500} height={500} className='w-80 h-fit hidden md:inline-block'/>
    <div className='absolute left-0 -bottom-20 -z-20 opacity-60 hidden md:inline-block'><GridOfDots/></div>
    </div>
  )
}

export default Head

const GridOfDots = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" >
        {/* Define the dot style */}
        <style>
          {`.dot {
            fill: gray;
          }`}
        </style>
        
        {/* Create the grid of dots */}
        <g>
          {/* Define the spacing between dots */}
          <defs>
            <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle className="dot" cx="10" cy="10" r="5"></circle>
            </pattern>
          </defs>
          
          {/* Use the dot pattern to fill the entire SVG area */}
          <rect width="100%" height="100%" fill="url(#dotPattern)"></rect>
        </g>
      </svg>
    );
  };