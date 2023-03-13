import { useQuery } from '@tanstack/react-query'
import React, { Fragment } from 'react'
import productApi from 'src/apis/product.api'
import Button from 'src/components/Button'
import useQueryConfig, { QueryConfig } from 'src/hooks/useQueryConfig'
import { ProductListConfig } from 'src/types/product.type'
import { v4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
// eslint-disable-next-line import/no-unresolved
import 'swiper/css'
// eslint-disable-next-line prettier/prettier, import/no-unresolved
import 'swiper/css/pagination'
import { formatCurrency, generateNameId } from 'src/utils/utils'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import { useTranslation } from 'react-i18next'

interface Props {
  name?: string
  sliceStart?: number
  sliceEnd?: number
}

const FeaturedProduct = ({ name = 'Sản phẩm mới nhất', sliceStart = 0, sliceEnd = 10 }: Props) => {
  const { queryConfig } = useQueryConfig()
  const { t } = useTranslation('featuredProduct')

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <Fragment>
      {/* Featured Products */}
      {productsData && (
        <Fragment>
          {/* ----- 1 ----- */}
          <div className='mx-auto w-full max-w-[1170px] overflow-hidden'>
            <div className='mt-8 '>
              <h1 className='text-center text-xl font-bold uppercase lg:text-3xl'>{name}</h1>
            </div>
            <div className='mx-auto my-6 h-[320px] w-[300px] select-none overflow-hidden p-4 shadow-5xl lg:my-12 lg:mx-8 lg:h-full  lg:w-[1100px]'>
              <Swiper
                loop={true}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false
                // }}
                // spaceBetween={50}
                // slidesPerView={4}
                modules={[Autoplay]}
                breakpoints={{
                  480: { slidesPerView: 1, spaceBetween: 10 },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },

                  1024: { slidesPerView: 4, spaceBetween: 50 }
                }}
              >
                {productsData.data.data.products.slice(sliceStart, sliceEnd).map((product) => (
                  <SwiperSlide key={v4()} className=''>
                    <div key={product._id}>
                      {/*  Product Item */}
                      <div className='flex flex-col items-center justify-center'>
                        <div className='h-[150px] w-[150px] overflow-hidden lg:h-[250px] lg:w-[250px]'>
                          <Link
                            className='cursor-pointer'
                            to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}
                          >
                            <img src={product.image} alt={product.name} className='object-cover' />
                          </Link>
                        </div>
                        <div className=' mt-4 text-center'>
                          <Link
                            className='cursor-pointer'
                            to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}
                          >
                            <h2 className='text-base font-semibold  line-clamp-1 hover:underline lg:line-clamp-2'>
                              {product.name}
                            </h2>
                          </Link>
                          <p className='mt-2 text-lg'>
                            <span className='text-xs'>₫</span>
                            {formatCurrency(product.price)}
                          </p>
                          <div className='group'>
                            <Link
                              className='j mx-auto mb-6 mt-4 flex w-[200px] items-center gap-4 rounded-full border bg-redLight p-2  text-sm font-semibold uppercase text-white transition-[color,box-shadow] duration-[500ms]  group-hover:border-redDark group-hover:text-redDark group-hover:shadow-[inset_13rem_0_0_0] group-hover:shadow-white'
                              to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='invisible ml-2 h-6 w-6 group-hover:visible group-hover:stroke-redDark'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                                />
                              </svg>
                              {t('view detail')}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default FeaturedProduct
