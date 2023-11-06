import Image from 'next/image';
import React from 'react'

const Head = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 md:min-h-[75vh] w-full items-center justify-center relative ">
        <div className='dark:text-neutral-200 p-10 my-4 flex flex-col gap-6'>
        <h1 className='font-semibold text-3xl lg:text-6xl z-20'>GDSC</h1>
        <h2 className=' bg-blue-700 p-2 text-center rounded-md text-lg lg:text-3xl text-neutral-200 max-w-md z-20'>Institute of Engineering, <span className=''>DAVV, Indore</span></h2>
        <h3 className='max-w-md hidden md:inline-block text-md z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis, odio esse eveniet eligendi nihil, non, necessitatibus soluta suscipit sequi voluptatem enim laboriosam est. Cum sapiente voluptatum et voluptas molestias?</h3>
        <div className='absolute right-0 top-0 opacity-60 z-0'><GridOfDots/></div>
    </div>
    <h3 className='max-w-md md:hidden p-6 z-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque perspiciatis, odio esse eveniet eligendi nihil, non, necessitatibus soluta suscipit sequi voluptatem enim laboriosam est. Cum sapiente voluptatum et voluptas molestias?</h3>
    <Image src="/gdsc-banner.png" alt='banner' width={500} height={500} className='w-80 h-fit hidden md:inline-block z-20'/>
    <div className='absolute -left-14 -bottom-28 opacity-60 hidden md:inline-block z-0'><GridOfDots/></div>
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