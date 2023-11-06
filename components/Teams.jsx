import React from 'react'

const Teams = () => {
  return (
    <div className='bg-yellow-100 dark:bg-yellow-900 bg-opacity-40 my-4 py-4 flex flex-col justify-center items-center gap-4 px-2 md:px-10'>
        <h1 className=' text-2xl md:text-3xl font-semibold dark:text-neutral-200'>Teams</h1>
        <div className="flex justify-center items-center gap-16 flex-wrap my-4">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        </div>
    </div>
  )
}

export default Teams

const UserCard = () => {
  return(
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://th.bing.com/th/id/OIP.g2jWd2EjznPYS0CpsBR2SwHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
          </div>
        </div>
        <h1 className=' font-semibold'>Gooda Sharma</h1>
        <h2 className=' text-xs'>Cloud Engineer</h2>
      </div>
  )
}