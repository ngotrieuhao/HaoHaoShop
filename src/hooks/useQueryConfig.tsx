import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import { ProductListConfig } from 'src/types/product.type'
import useQueryParam from './useQueryParam'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
const useQueryConfig = () => {
  const queryParams: QueryConfig = useQueryParam()
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || '1',
      limit: queryParams.limit,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  return {
    queryConfig
  }
}

export default useQueryConfig
