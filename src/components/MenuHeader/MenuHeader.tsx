import classNames from 'classnames'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import path from 'src/constants/path'

const MenuHeader = () => {
  const { t } = useTranslation('menuHeader')
  return (
    <div className='  mt-8 h-[70px] w-full bg-sky'>
      <div className='mx-auto h-full w-full max-w-[1248px]'>
        <ul className='my-auto flex h-full items-center gap-7 pl-6  text-sm text-white lg:text-base'>
          <li className='relative '>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'flex items-center   capitalize  after:absolute after:h-1 after:w-0 after:translate-y-4 after:bg-white after:transition-width ',
                  {
                    'text-white after:w-[80px] ': isActive,
                    'text-white hover:after:w-[80px]': !isActive
                  }
                )
              }
              to={path.home}
              end
            >
              {t('homepage')}
            </NavLink>
          </li>
          <li className='relative'>
            <NavLink
              className={({ isActive }) =>
                classNames(
                  'flex items-center capitalize after:absolute  after:h-1 after:w-0 after:translate-y-4 after:bg-white after:transition-width',
                  {
                    'text-white after:w-[60px]': isActive,
                    '  text-white hover:after:w-[60px]': !isActive
                  }
                )
              }
              to={path.product}
            >
              {t('products')}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuHeader
