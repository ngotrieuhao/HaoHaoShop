import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
// import useSearchProducts from 'src/hooks/useSearchProducts'
import NavHeader from '../NavHeader'
import horizontal from '../../../public/horizontal.png'

export default function CartHeader() {
  // const { onSubmitSearch, register } = useSearchProducts()

  const { t } = useTranslation('cart')

  return (
    <div className='border-b border-b-black/10'>
      <div className='bg-sky text-white'>
        <div className='container'>
          <NavHeader />
        </div>
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <nav className='flex items-end'>
            <Link to={path.home} className='flex flex-shrink-0 items-end'>
              <div className='h-[100px] w-[100px]'>
                <img src={horizontal} alt='Logo' />
              </div>
              <div className='mx-4 h-6 w-[1px] bg-black md:h-8' />
            </Link>
            <div className=' capitalize text-black md:text-xl'>{t('cart')}</div>
          </nav>
        </div>
      </div>
    </div>
  )
}
