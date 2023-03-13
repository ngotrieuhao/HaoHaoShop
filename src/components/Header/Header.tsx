import { useQuery } from '@tanstack/react-query'
import { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import Popover from '../Popover'
import { purchasesStatus } from 'src/constants/purchase'
import purchaseApi from 'src/apis/purchase.api'
import noproduct from 'src/assets/images/noproduct.png'
import { formatCurrency } from 'src/utils/utils'
import NavHeader from '../NavHeader'
import useSearchProduct from 'src/hooks/useSearchProduct'
import horizontal from '../../../public/horizontal.png'
import MenuHeader from '../MenuHeader'
import { useTranslation } from 'react-i18next'

const MAX_PURCHASES = 3

const Header = () => {
  const { isAuthenticated } = useContext(AppContext)
  const { onSubmitSearch, register } = useSearchProduct()
  const { t } = useTranslation('header')

  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart }),
    enabled: isAuthenticated
  })

  const purchasesInCart = purchasesInCartData?.data.data

  return (
    <Fragment>
      <div className='bg-white pt-2 text-black lg:pb-5'>
        <div className='container'>
          <NavHeader></NavHeader>
          <div className='mt-4 grid grid-cols-12 items-end gap-4'>
            <Link to={path.home} className='col-span-3 select-none lg:col-span-2 '>
              <img src={horizontal} alt='Logo' className='h-[80px] w-[80px] object-cover lg:h-[120px] lg:w-[120px]' />
            </Link>
            <form className='col-span-6 select-none lg:col-span-7 lg:ml-8' onSubmit={onSubmitSearch}>
              <div className='flex items-center justify-center rounded-sm bg-white p-1'>
                <input
                  type='text'
                  placeholder={t('placeholder')}
                  className=' w-full max-w-[500px] flex-grow rounded-tl-2xl rounded-bl-2xl border border-slate-400 bg-transparent px-3 py-1 text-black placeholder:text-sm lg:py-2'
                  {...register('name')}
                />
                <button className='flex-shrink-0 rounded-tr-2xl rounded-br-2xl border bg-sky py-1 px-3 text-white hover:border-slate-500 hover:bg-white  hover:text-black hover:opacity-90 lg:py-2 lg:px-6'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-6 w-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                    />
                  </svg>
                </button>
              </div>
            </form>
            <div className='col-span-2 mb-1 justify-self-end lg:col-span-3 lg:justify-self-center'>
              <Popover
                renderPopover={
                  <div className='relative  max-w-[400px] rounded-sm border border-gray-200 bg-white text-sm shadow-md'>
                    {purchasesInCart && purchasesInCart.length > 0 ? (
                      <div className='p-2'>
                        <div className='capitalize text-gray-400'> {t('product add')}</div>
                        <div className='mt-5'>
                          {purchasesInCart.slice(0, MAX_PURCHASES).map((purchase) => (
                            <div className='mt-2 flex py-2 hover:bg-gray-100' key={purchase._id}>
                              <div className='flex-shrink-0'>
                                <img
                                  src={purchase.product.image}
                                  alt={purchase.product.name}
                                  className='h-11 w-11 object-cover '
                                />
                              </div>
                              <div className='ml-2 flex-grow overflow-hidden'>
                                <div className='truncate'>{purchase.product.name}</div>
                              </div>
                              <div className='ml-2 flex-shrink-0'>
                                <span className=' text-orange'>{formatCurrency(purchase.product.price)}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className='mt-6 flex items-center justify-between'>
                          <div className='text-xs capitalize text-gray-500'>
                            ({purchasesInCart.length > MAX_PURCHASES ? purchasesInCart.length - MAX_PURCHASES : ''}){' '}
                            {t('add to cart')}
                          </div>
                          <Link
                            to={path.cart}
                            className='rounded-sm bg-redDark px-4 py-2 capitalize text-white hover:bg-opacity-90'
                          >
                            {t('view cart')}
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className='flex h-[300px] w-[300px] flex-col items-center justify-center p-2'>
                        <img src={noproduct} alt='no-product' className='h-24 w-32' />
                        <div className='mt-3 capitalize'>{t('no product')}</div>
                      </div>
                    )}
                  </div>
                }
              >
                <Link to={path.cart} className='relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-8 w-8 hover:stroke-sky'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                  </svg>
                  {purchasesInCart && purchasesInCart.length > 0 && (
                    <span className='absolute top-[-5px] left-[21px] rounded-full bg-redLight px-[6px] py-[1px] text-xs text-white '>
                      {purchasesInCart?.length}
                    </span>
                  )}
                </Link>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Header */}
      <MenuHeader />
    </Fragment>
  )
}

export default Header
