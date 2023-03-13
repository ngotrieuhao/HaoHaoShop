import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'

const PageNotFound = () => {
  return (
    <div className='bg-white '>
      <div className='m-auto flex min-h-[80vh] w-9/12 items-center justify-center py-8'>
        <div className='overflow-hidden bg-orange pb-8 shadow sm:rounded-lg'>
          <div className='border-t border-gray-200 pt-8 text-center text-white'>
            <h1 className='text-9xl font-bold '>404</h1>
            <h1 className='py-8 text-6xl font-medium '>oops! Page not found</h1>
            <p className='px-12 pb-8 text-2xl font-medium'>
              Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link
              to={path.home}
              className='hover:to-orange-500 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 font-semibold uppercase text-white hover:from-pink-500'
            >
              back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
