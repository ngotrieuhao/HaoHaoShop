import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import Iframes from './component/Iframes'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('footer')
  return (
    <footer className='bg-neutral-100 py-6 lg:py-10'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 text-center lg:grid-cols-4'>
          {/* HaoHao Store */}
          <div>
            <h4 className='mt-4 text-lg font-bold after:absolute after:h-[2px] after:w-[8rem]  after:translate-y-[28px] after:-translate-x-[122px] after:bg-black lg:mt-2'>
              HaoHao Store
            </h4>
            <br />
            <br className='hidden lg:block' />
            <div className='text-center text-sm font-light lg:w-[220px]'>
              <p className='mb-[10px]'>{t('address1')}</p>
              <p className='mb-[10px]'>{t('address2')}</p>
              <p className='mb-[10px]'>{t('phonenumber')}</p>
              <p>Hotline: 0933.108.554 | 0971,294,545</p>
            </div>
          </div>
          {/* Address */}
          <div>
            <h4 className='mt-4 text-center text-lg font-bold after:absolute after:h-[2px] after:w-[6rem]  after:translate-y-[28px] after:-translate-x-[78px] after:bg-black lg:mt-2'>
              {t('address')}
            </h4>
            <br />
            <Iframes></Iframes>
          </div>
          {/* Help us */}
          <div>
            <h4 className='mt-4 mb-2 text-center text-lg font-bold after:absolute after:h-[2px] after:w-[6rem]  after:translate-y-[28px] after:-translate-x-[98px] after:bg-black lg:mt-2'>
              {t('help us')}
            </h4>
            <br className='hidden lg:block' />
            <ul className='mx-auto w-[80px] leading-8'>
              <li className='mx-auto'>
                <Link className='text-sky hover:text-blue-900 hover:underline' to={path.home}>
                  {t('home')}
                </Link>
              </li>

              <li>
                <Link className='text-sky hover:text-blue-900 hover:underline' to='/'>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Network */}
          <div className='mb-6   '>
            <h4 className='mt-4 text-center text-lg font-bold after:absolute after:h-[2px]  after:w-[8rem] after:translate-y-[28px] after:-translate-x-[128px] after:bg-black lg:mt-2'>
              {t('social')}
            </h4>
            <br />
            <div className='mx-auto flex justify-center gap-3 '>
              <FaFacebook size='2rem' className='cursor-pointer hover:text-sky' />
              <FaInstagram size='2rem' className='cursor-pointer hover:text-sky' />
              <FaTwitter size='2rem' className='cursor-pointer hover:text-sky' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
