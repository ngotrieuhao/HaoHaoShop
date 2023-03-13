import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartHeader from './CartHeader'

export default {
  title: 'Components/CartHeader',
  component: CartHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CartHeader>

const Template: ComponentStory<typeof CartHeader> = () => <CartHeader />
export const Primary = Template.bind({})
Primary.args = {
  label: 'Button'
}
