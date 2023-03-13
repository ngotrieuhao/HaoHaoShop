import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/CartHeader',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isLoading: {
      description: 'Show/Hide Icon loading'
    },
    children: {
      description: 'Content in button',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      },
      defaultValue: {
        summary: ' '
      }
    },
    className: {
      description: 'class',
      table: {
        type: {
          summary: 'string'
        }
      },
      defaultValue: {
        summary: ' '
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />
export const Primary = Template.bind({})

Primary.args = {
  children: 'Đăng nhập',
  className:
    'flex w-full items-center justify-center bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600',
  isLoading: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Đăng ký',
  className:
    'flex w-full items-center justify-center bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600',
  isLoading: true,
  disabled: true
}
