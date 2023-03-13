import classNames from 'classnames'
import Button from 'src/components/Button'
import InputNumber from 'src/components/InputNumber'
import path from 'src/constants/path'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { Category } from 'src/types/category.type'
import { useForm, Controller } from 'react-hook-form'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoUndefinedField } from 'src/types/utils.type'
import RatingStars from '../RatingStars'
import omit from 'lodash/omit'

import { QueryConfig } from 'src/hooks/useQueryConfig'
import { useTranslation } from 'react-i18next'
import { ReactElement } from 'react'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
  className?: string
  sidebar?: string
  children?: ReactElement<any, any>
}

type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>

const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ categories, queryConfig, className = 'py-4 ', children }: Props) {
  const { category } = queryConfig
  const navigate = useNavigate()
  const { t } = useTranslation('asideFilter')

  const {
    control,
    handleSubmit,
    trigger,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema)
  })

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.product,
      search: createSearchParams({
        ...queryConfig,
        price_max: data.price_max,
        price_min: data.price_min
      }).toString()
    })
  })

  const handleRemoveAll = () => {
    navigate({
      pathname: path.product,
      search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
    })
    reset({
      price_max: '',
      price_min: ''
    })
  }

  return (
    <>
      <div className={className}>
        <div className='mt-2 flex justify-between'>
          <Link
            to={path.product}
            className={classNames('flex items-center font-bold hover:text-redDark', {
              'text-orange': !category
            })}
          >
            <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
              <g fillRule='evenodd' stroke='none' strokeWidth={1}>
                <g transform='translate(-373 -208)'>
                  <g transform='translate(155 191)'>
                    <g transform='translate(218 17)'>
                      <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                      <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            {t('all categories')}
          </Link>
          {children}
        </div>

        <div className='my-4 h-[1px] bg-gray-300' />
        <ul>
          {categories.map((categoryItem) => {
            const isActive = category === categoryItem._id
            return (
              <li className='py-2 pl-2' key={categoryItem._id}>
                <Link
                  to={{
                    pathname: path.product,
                    search: createSearchParams({
                      ...queryConfig,
                      category: categoryItem._id
                    }).toString()
                  }}
                  className={classNames('relative px-2 hover:text-redDark', {
                    'text-orange font-semibold': isActive
                  })}
                >
                  {isActive && (
                    <svg viewBox='0 0 4 7' className='fill-orange absolute top-1 left-[-10px] h-2 w-2'>
                      <polygon points='4 3.5 0 0 0 7' />
                    </svg>
                  )}
                  {categoryItem.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to={path.product} className='mt-4 flex items-center font-bold uppercase hover:text-redDark'>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='mr-3 h-4 w-3 fill-current stroke-current '
          >
            <g>
              <polyline
                fill='none'
                points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          {t('filter search')}
        </Link>
        <div className='my-4 h-[1px] bg-gray-300' />
        <div className='my-5'>
          <div> {t('price range')}</div>
          <form className='mt-2' onSubmit={onSubmit}>
            <div className='flex items-start'>
              <Controller
                control={control}
                name={'price_min'}
                render={({ field }) => {
                  return (
                    <InputNumber
                      type='text'
                      className='grow'
                      placeholder={t('from')}
                      classNameInput='p-1 w-full text-black outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                      classNameError='hidden'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        trigger('price_max')
                      }}
                    />
                  )
                }}
              />

              <div className='mx-2 mt-2 shrink-0'>-</div>

              <Controller
                control={control}
                name={'price_max'}
                render={({ field }) => {
                  return (
                    <InputNumber
                      type='text'
                      className='grow'
                      placeholder={t('to')}
                      classNameInput='p-1 text-black w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                      classNameError='hidden'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e)
                        trigger('price_min')
                      }}
                    />
                  )
                }}
              />
            </div>
            <div className='mt-1 mb-4 min-h-[1.25rem] text-center text-sm text-red-600'>
              {errors.price_min?.message}
            </div>
            <Button
              className='flex w-full items-center justify-center border bg-redDark p-2 text-sm uppercase text-white hover:border-redDark hover:bg-gray-200 hover:text-black'
              onClick={onSubmit}
            >
              {t('apply')}
            </Button>
          </form>
        </div>
        <div className='my-4 h-[1px] bg-gray-300' />
        <div className='text-sm'>{t('rating')}</div>
        <RatingStars queryConfig={queryConfig}></RatingStars>
        <div className='my-4 h-[1px] bg-gray-300' />
        <Button
          onClick={handleRemoveAll}
          className='hover:bg-orange/80 flex w-full items-center justify-center border bg-redDark p-2 text-sm uppercase text-white hover:border-redDark hover:bg-gray-200 hover:text-black'
        >
          {t('delete all')}
        </Button>
      </div>
    </>
  )
}
