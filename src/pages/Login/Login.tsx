import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { schema, Schema } from 'src/utils/rules'

import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import authApi from 'src/apis/auth.api'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])
const Login = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const { t } = useTranslation('identification')

  const { setAuthenticated, setProfile } = useContext(AppContext)

  const loginAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setAuthenticated(true)
        setProfile(data.data.data.user)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          // Cách 1
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
          // Cách 2
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   })
          // }
        }
      }
    })
  })

  return (
    <div className='bg-orange'>
      <Helmet>
        <title>{t('sign in')} | HaoHao Shop</title>
        <meta name='description' content='Đăng nhập vào trang web HaoHao Shop' />
      </Helmet>
      <div className='container mt-16'>
        <div className='mx-auto mt-8 mb-16 w-[350px] lg:w-[500px]'>
          <div className=' rounded-lg shadow-4xl lg:col-span-2 lg:col-start-2'>
            <form className='rounded-lg bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='mb-2 text-center text-2xl font-bold lg:text-3xl lg:font-semibold '>{t('sign in')}</div>
              <hr />
              <div className='group mt-8'>
                <label className='group-focus-within:text-sky ' htmlFor='email'>
                  Email
                </label>
                <Input
                  name='email'
                  register={register}
                  id='email'
                  type='email'
                  className='mb-4 group-focus:text-sky'
                  errorMessage={errors.email?.message}
                  placeholder='abc@gmail.com'
                  autoComplete='on'
                ></Input>
              </div>
              <div className='group'>
                <label className='group-focus-within:text-sky' htmlFor='password'>
                  {t('password')}
                </label>
                <Input
                  name='password'
                  id='password'
                  register={register}
                  type='password'
                  className='relative '
                  errorMessage={errors.password?.message}
                  autoComplete='on'
                  placeholder='********'
                ></Input>
              </div>
              <div className='mt-6'>
                <Button
                  type='submit'
                  className='mx-auto flex w-[200px] items-center justify-center rounded-full bg-red-500 py-3 text-center text-sm uppercase text-white hover:bg-red-600 lg:w-full lg:px-2 lg:py-4'
                  isLoading={loginAccountMutation.isLoading}
                  disabled={loginAccountMutation.isLoading}
                >
                  {t('sign in')}
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>{t('have account')}?</span>
                <Link to='/register' className='ml-1 text-red-400 hover:text-black/60'>
                  {t('sign up')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
