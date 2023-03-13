import { Link, useMatch } from 'react-router-dom'
import path from 'src/constants/path'
import horizontal from '../../../public/horizontal.png'

const RegisterHeader = () => {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <Link to={path.home}>
            <img src={horizontal} alt='Logo' />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}

export default RegisterHeader
