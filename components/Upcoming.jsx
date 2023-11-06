import React from 'react'

const Upcoming = () => {
  return (
    <div className=' py-4 flex flex-col justify-center items-center gap-4 px-2 md:px-10 bg-green-50 dark:bg-green-900'>
        <h1 className=' text-2xl md:text-3xl font-semibold dark:text-neutral-200'>Upcoming . . .</h1>
        <div className='flex flex-wrap gap-4 justify-center my-4'>
        <Card/>
        <Card/>
        </div>
    </div>
  )
}

export default Upcoming

const Card = () => {
  return(
    <div className="card shadow-xl max-w-sm max-h-80 bg-neutral-50 dark:bg-neutral-700 dark:bg-opacity-50 ">
  <figure><img src="https://techyeverything.com/wp-content/uploads/2020/11/Coding-Contest.jpg" alt="Shoes" /></figure>
  <div className="card-body p-4">
    <h2 className="card-title dark:text-slate-300 ">Codathon 2k23</h2>
    <p>code like pro, show like showman and grow your coding carrier with us. </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-green-500 dark:bg-green-700 hover:bg-white hover:shadow-md text-white hover:text-green-700 border-none">Enroll Now</button>
    </div>
  </div>
</div>
  )
}