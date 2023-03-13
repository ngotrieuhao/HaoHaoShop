import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import path from 'src/constants/path'
import Cart from './Cart'
import CartLayout from 'src/layouts/CartLayout'

export default {
  title: 'pages/Cart',
  component: Cart
} as ComponentMeta<typeof Cart>

const Template: ComponentStory<typeof Cart> = () => <Cart />
export const CartPage = Template.bind({})

CartPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.cart
    }
  }
}

export const LayoutCartPage: ComponentStory<typeof CartLayout> = () => (
  <CartLayout>
    <Cart />
  </CartLayout>
)

LayoutCartPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.cart
    }
  }
}
