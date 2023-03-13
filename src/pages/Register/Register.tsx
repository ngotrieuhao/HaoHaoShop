import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import omit from 'lodash/omit'
import { schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import authApi from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'password', 'confirm_password'])

const Register = () => {
  const { t } = useTranslation('identification')
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })

  const { setAuthenticated, setProfile } = useContext(AppContext)

  // const rules = getRules(getValues)

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setAuthenticated(true)
        setProfile(data.data.data.user)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          // Cách 1
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
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
        <title>{t('sign up')} | HaoHao Shop</title>
        <meta name='description' content='Đăng ký tài khoản trang web HaoHao Shop' />
      </Helmet>
      <div className='container mt-16'>
        <div className='mx-auto mt-8 mb-16 w-[350px] lg:w-[500px]'>
          <div className='rounded-lg shadow-4xl lg:col-span-2 lg:col-start-2'>
            <form className='rounded-lg bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='mb-2 text-center text-2xl font-bold lg:text-3xl lg:font-semibold'>{t('sign up')}</div>
              <hr />
              <div className='group mt-8'>
                <label className='group-focus-within:text-sky ' htmlFor='email'>
                  Email
                </label>
                <Input
                  name='email'
                  register={register}
                  type='email'
                  className='mb-4 group-focus:text-sky'
                  errorMessage={errors.email?.message}
                  placeholder='abc@gmail.com'
                  autoComplete='on'
                ></Input>
              </div>

              <div className='group'>
                <label className='group-focus-within:text-sky ' htmlFor='password'>
                  {t('password')}
                </label>
                <Input
                  name='password'
                  id='password'
                  register={register}
                  type='password'
                  className='relative mb-4 group-focus:text-sky'
                  errorMessage={errors.password?.message}
                  autoComplete='on'
                  placeholder='********'
                ></Input>
              </div>

              <div className='group'>
                <label className='group-focus-within:text-sky ' htmlFor='confirm_password'>
                  {t('confirm password')}
                </label>
                <Input
                  name='confirm_password'
                  id='confirm_password'
                  register={register}
                  type='password'
                  className='relative mb-4 group-focus:text-sky'
                  errorMessage={errors.confirm_password?.message}
                  placeholder='********'
                  autoComplete='on'
                ></Input>
              </div>

              <div className=' mt-2'>
                <Button
                  type='submit'
                  className='mx-auto flex w-[200px] items-center justify-center rounded-full bg-red-500 py-3 text-center text-sm uppercase text-white hover:bg-red-600 lg:w-full lg:px-2 lg:py-4'
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                >
                  {t('sign up')}
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'> {t('have account')}?</span>
                <Link to='/login' className='ml-1 text-red-400 hover:text-black/60'>
                  {t('sign in')}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
