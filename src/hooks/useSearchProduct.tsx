import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'

import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { schema, Schema } from 'src/utils/rules'
import useQueryConfig from './useQueryConfig'

type FormData = Pick<Schema, 'name'>

const nameSchema = schema.pick(['name'])
const useSearchProduct = () => {
  const { queryConfig } = useQueryConfig()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })
  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: path.product,
      search: createSearchParams(config).toString()
    })
  })
  return {
    onSubmitSearch,
    register
  }
}

export default useSearchProduct
