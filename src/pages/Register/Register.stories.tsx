import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import path from 'src/constants/path'
import RegisterLayout from 'src/layouts/RegisterLayout'
import Register from './Register'

export default {
  title: 'pages/Register',
  component: Register
} as ComponentMeta<typeof Register>

const Template: ComponentStory<typeof Register> = () => <Register />
export const RegisterPage = Template.bind({})

RegisterPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.register
    }
  }
}

export const LayoutRegisterPage: ComponentStory<typeof Register> = () => (
  <RegisterLayout>
    <Register />
  </RegisterLayout>
)

LayoutRegisterPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}
