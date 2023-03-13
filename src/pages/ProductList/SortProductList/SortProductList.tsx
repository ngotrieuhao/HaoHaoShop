/* eslint-disable jsx-a11y/label-has-associated-control */
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import omit from 'lodash/omit'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { createSearchParams, useNavigate } from 'react-router-dom'
import categoryApi from 'src/apis/category.api'
import path from 'src/constants/path'
import { sortBy, order as orderConstant } from 'src/constants/product'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { useToggle } from 'src/hooks/useToggle'
import { ProductListConfig } from 'src/types/product.type'
import AsideFilter from '../AsideFilter'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

// export const SidebarContext = createContext(null)

const SortProductList = ({ queryConfig }: Props) => {
  const { sort_by = sortBy.createdAt, order } = queryConfig
  const navigate = useNavigate()

  const [isVisible, toggleVisible] = useToggle(false)

  const { t } = useTranslation('sortProductList')
  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    return sort_by === sortByValue
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort_by'], undefined>) => {
    navigate({
      pathname: path.product,
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            sort_by: sortByValue
          },
          ['order']
        )
      ).toString()
    })
  }

  const handleSortPrice = (orderValue: Exclude<ProductListConfig['order'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort_by: sortBy.price,
        order: orderValue
      }).toString()
    })
  }
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })

  // const onShowSidebar = () => {
  //   setSidebar(!sidebar)
  // }

  return (
    <div className='relative bg-gray-300/40 py-4 px-3'>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <div>{t('sort by')}</div>
          <button
            className={classNames('h-8  px-4 text-center text-sm capitalize ', {
              'border border-gray-200 bg-gray-300 text-black': isActiveSortBy(sortBy.view),
              'border bg-redDark text-white hover:border-redDark hover:bg-gray-200 hover:text-black': !isActiveSortBy(
                sortBy.view
              )
            })}
            onClick={() => handleSort(sortBy.view)}
          >
            {t('popular')}
          </button>
          <button
            className={classNames('h-8  px-4 text-center text-sm capitalize ', {
              ' border border-gray-200 bg-gray-300 text-black': isActiveSortBy(sortBy.createdAt),
              'border bg-redDark text-white hover:border-redDark hover:bg-gray-200 hover:text-black': !isActiveSortBy(
                sortBy.createdAt
              )
            })}
            onClick={() => handleSort(sortBy.createdAt)}
          >
            {t('newest')}
          </button>
          <button
            className={classNames('h-8  px-4 text-center text-sm capitalize ', {
              'border border-gray-200 bg-gray-300 text-black': isActiveSortBy(sortBy.sold),
              'border bg-redDark text-white hover:border-redDark hover:bg-gray-200 hover:text-black': !isActiveSortBy(
                sortBy.sold
              )
            })}
            onClick={() => handleSort(sortBy.sold)}
          >
            {t('bestseller')}
          </button>
          <select
            className={classNames('h-8  px-4 text-center text-sm capitalize outline-none ', {
              ' border bg-gray-200 text-black': isActiveSortBy(sortBy.price),
              'border bg-redDark text-white hover:border-redDark hover:bg-gray-200 hover:text-black': !isActiveSortBy(
                sortBy.price
              )
            })}
            value={order || ' '}
            onChange={(e) => handleSortPrice(e.target.value as Exclude<ProductListConfig['order'], undefined>)}
          >
            <option value='' disabled>
              {t('price')}
            </option>
            <option value={orderConstant.asc}>{t('pricemin')}</option>
            <option value={orderConstant.desc}>{t('pricemax')}</option>
          </select>
          <button className=' flex cursor-pointer items-end active:text-redDark lg:hidden' onClick={toggleVisible}>
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
                d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
              />
            </svg>
            Lọc
          </button>
          <AsideFilter
            className={isVisible ? 'navbar__mobile ' : 'navbar__pc'}
            queryConfig={queryConfig}
            categories={categoriesData?.data.data || []}
          >
            <label htmlFor='overlay-btn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
                onClick={toggleVisible}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </label>
          </AsideFilter>
          <input hidden type='checkbox' id='overlay-btn' className='nav__input'></input>
          <label htmlFor='overlay-btn' className={isVisible ? 'nav__overlay' : ''}></label>
        </div>
      </div>
    </div>
  )
}

export default SortProductList
