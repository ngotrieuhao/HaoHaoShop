import React from 'react'
import { Helmet } from 'react-helmet-async'
import banner1 from '../../../public/banner1.jpg'
import banner2 from '../../../public/banner2.png'
import banner3 from '../../../public/banner3.png'
import banner4 from '../../../public/banner5.png'
import ronaldo from '../../../public/profile1.jpg'
import messi from '../../../public/profile2.jpg'
import beckham from '../../../public/profile3.jpg'
import brand1 from '../../../public/brand1.png'

import brand2 from '../../../public/brand2.png'

import brand3 from '../../../public/brand3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination as PaginationSwiper, Autoplay } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line prettier/prettier, import/no-unresolved
import 'swiper/css/pagination'
import FeaturedProduct from './components/FeaturedProduct'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const { t } = useTranslation('home')

  return (
    <div className='mt-8'>
      <Helmet>
        <title>{t('homepage')}</title>
        <meta name='description' content='Trang chủ trang web HaoHao Shop' />
      </Helmet>
      {/* Banner  */}
      <div className='relative -z-20 mx-auto mb-8 h-full max-w-[350px] lg:max-w-[1100px]'>
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          spaceBetween={50}
          slidesPerView={1}
          modules={[PaginationSwiper, Autoplay]}
        >
          <SwiperSlide>
            <img src={banner1} alt='Banner Best Sale' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt='Banner New Shoes' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt='Banner Sale 50% Off' />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Featured Product */}
      <FeaturedProduct name={t('newest product')} />
      {/* Banner Body */}
      <div className='my-2 mx-auto h-[180px]  shadow-5xl lg:h-full lg:w-full'>
        <img src={banner4} alt='Banner Sale off' className='h-full w-full object-cover lg:object-fill' />
      </div>
      {/* Featured Product */}

      <FeaturedProduct name={t('featured product')} sliceStart={10} sliceEnd={20} />

      {/* Testimonial */}
      <div className='my-2 '>
        <h2 className='mb-8 text-center text-xl font-semibold uppercase lg:text-3xl'>{t('testimonial')}</h2>
        <div className=' mx-auto mt-2 grid w-full max-w-[350px] grid-cols-1 justify-center gap-1 lg:max-w-[1170px]  lg:grid-cols-3 lg:gap-6'>
          {/* Profile 1 */}
          <div className='item mx-auto mb-8 max-w-[380px] text-center shadow-5xl transition-all hover:-translate-y-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mx-auto my-4 h-12 w-12 stroke-redDark'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>

            <p className=' mb-6 px-8 text-base font-semibold'>{t('comment1')}</p>
            <div className='mx-auto mt-2 h-[80px] w-[80px] overflow-hidden rounded-[50%]'>
              <img src={ronaldo} alt='Profile 1' className='h-full w-full object-cover' />
            </div>
            <h4 className='mb-8 text-lg font-semibold'>Cr.Ronaldo</h4>
          </div>
          {/* Profile 2 */}
          <div className='item mx-auto mb-8 max-w-[380px] text-center shadow-5xl transition-all hover:-translate-y-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mx-auto my-4 h-12 w-12 stroke-redDark'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>

            <p className=' mb-6 px-8 text-base font-semibold'>{t('comment2')}</p>
            <div className=' mx-auto mt-2 h-[80px] w-[80px] overflow-hidden rounded-[50%]'>
              <img src={messi} alt='Profile 1' className='h-full w-full rounded-[50%] object-cover' />
            </div>
            <h4 className='mb-8 text-lg font-semibold'>L.Messi</h4>
          </div>
          {/* Profile 3 */}
          <div className='item mx-auto mb-8 max-w-[380px] text-center shadow-5xl transition-all hover:-translate-y-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mx-auto my-4 h-12 w-12 stroke-redDark'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>

            <p className=' mb-6 px-8 text-base font-semibold'>{t('comment3')}</p>
            <div className='mx-auto mt-2 h-[100px] w-[80px] overflow-hidden rounded-[30%]'>
              <img src={beckham} alt='Profile 1' className='h-full w-full  object-cover' />
            </div>
            <h4 className='mb-8 text-lg font-semibold'>D.Beckham</h4>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className='my-8  mx-auto h-[100px] overflow-hidden lg:w-[1170px]'>
        <div className='grid grid-cols-3 items-center  gap-6 lg:grid-cols-6 '>
          <div className='brand hover:opacity-60'>
            <img src={brand1} alt='Logo 1' className='h-[60px] object-cover lg:h-[80px]' />
          </div>
          <div className='brand hover:opacity-60'>
            <img src={brand2} alt='Logo 2' className='h-[60px] object-cover lg:h-[80px]' />
          </div>
          <div className='brand hover:opacity-60'>
            <img src={brand3} alt='Logo 3' className='h-[60px] object-cover lg:h-[80px]' />
          </div>
          <div className='brand invisible hover:opacity-60 lg:visible'>
            <img src={brand1} alt='Logo 1' className='object-cover lg:h-[80px]' />
          </div>
          <div className='brand invisible hover:opacity-60 lg:visible'>
            <img src={brand2} alt='Logo 2' className='object-cover lg:h-[80px]' />
          </div>
          <div className='brand invisible hover:opacity-60 lg:visible'>
            <img src={brand3} alt='Logo 3' className='object-cover lg:h-[80px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
