import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import path from 'src/constants/path'
import { Product as ProductType } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle, generateNameId } from 'src/utils/utils'

interface Props {
  product: ProductType
}

const Product = ({ product }: Props) => {
  const { t } = useTranslation('product')
  return (
    <Link to={`${path.home}${generateNameId({ name: product.name, id: product._id })}`}>
      <div className='select-none overflow-hidden rounded-sm bg-white p-3  shadow transition-transform duration-100 hover:shadow-3xl hover:shadow-sky'>
        <div className='relative w-full overflow-hidden rounded-lg pt-[100%] '>
          <img
            src={product.image}
            alt={product.name}
            className='absolute top-0 left-0 h-full w-full rounded-lg bg-white object-fill transition-all hover:scale-125'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-sm line-clamp-2'>{product.name}</div>
          <div className='mt-3 flex items-center justify-between'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>{formatCurrency(product.price_before_discount)}</span>
            </div>
            <div className='text-orange ml-1 truncate pr-2'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <ProductRating rating={product.rating}></ProductRating>
            <div className='ml-2 text-sm'>
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className='ml-1'>{t('sold')}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
