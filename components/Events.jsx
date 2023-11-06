import React from 'react'

const Events = () => {
  return (
    <div className='bg-blue-100 dark:bg-blue-900 bg-opacity-40 my-4 py-4 flex flex-col justify-center items-center gap-4 px-2 md:px-10'>
        <h1 className=' text-2xl md:text-3xl font-semibold dark:text-neutral-200'>Events</h1>
        <div className="flex justify-center items-center">
          <Slider/>
        </div>
        <h2 className='my-4 dark:text-blue-200'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aspernatur eligendi ipsam, alias quas quo, voluptatibus laboriosam esse corrupti incidunt commodi culpa corporis modi laborum, maiores a unde hic iste.</h2>
        
    </div>
  )
}

export default Events

const Slider = () => {
  return (
    <div className="carousel rounded-box carousel-center cursor-pointer">
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        <div className="carousel-item rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MPlqCbrhFL2jFtxaxOrxDAHaE8?pid=ImgDet&w=1080&h=720&rs=1" alt="slider Image" width={400} height={300} className='m-2 shadow-md rounded-md'/>
        </div>
        
    </div>
  )
}