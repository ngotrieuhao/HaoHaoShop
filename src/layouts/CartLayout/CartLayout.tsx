import React from 'react'
import CartHeader from 'src/components/CartHeader'
import Footer from 'src/components/Footer'

interface Props {
  children?: React.ReactNode
}

const CartLayout = ({ children }: Props) => {
  return (
    <div>
      <CartHeader></CartHeader>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default CartLayout
