import React from 'react'
import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'

const UserLayout = () => {
  return (
    <div className='bg-neutral-200/80 py-8 text-sm text-gray-600 lg:py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <div className='h-fit rounded bg-white px-2 pb-4 shadow-5xl md:col-span-3 lg:col-span-2'>
            <UserSideNav />
          </div>
          <div className=' md:col-span-9 lg:col-span-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
