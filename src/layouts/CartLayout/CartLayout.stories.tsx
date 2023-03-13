import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartLayout from './CartLayout'

export default {
  title: 'Layouts/CartLayout',
  component: CartLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'Body of Cart Layout',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    }
  }
} as ComponentMeta<typeof CartLayout>

const Template: ComponentStory<typeof CartLayout> = (props) => <CartLayout {...props} />
export const Primary = Template.bind({})
