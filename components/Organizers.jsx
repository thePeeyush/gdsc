import React from 'react'

const Organizers = () => {
  return (
    <div className='bg-red-100 dark:bg-red-900 bg-opacity-40 my-4 py-4 flex flex-col justify-center items-center gap-4 px-2 md:px-10'>
        <h1 className=' text-2xl md:text-3xl font-semibold dark:text-neutral-200'>Organizers</h1>
        <div className="flex justify-center items-center my-4">
        <div className="flex justify-center items-center gap-16 flex-wrap">
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
          <OrganizerCard/>
        </div>
        </div>
        <h2 className='my-4 dark:text-red-200'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aspernatur eligendi ipsam, alias quas quo, voluptatibus laboriosam esse corrupti incidunt commodi culpa corporis modi laborum, maiores a unde hic iste.</h2>
        
    </div>
  )
}

export default Organizers

const OrganizerCard = () => {
  return(
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="avatar">
          <div className="w-24 rounded-md">
            <img src="https://th.bing.com/th/id/OIP.MYDUJMOcNxAqM3K4cy4FkAHaFj?pid=ImgDet&rs=1" />
          </div>
        </div>
        <h1 className=' font-semibold'>Microsoft</h1>
      </div>
  )
}