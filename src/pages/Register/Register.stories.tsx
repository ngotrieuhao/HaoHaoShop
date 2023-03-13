import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import path from 'src/constants/path'
import Register from './Register'
import MainLayout from 'src/layouts/MainLayout'

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
  <MainLayout>
    <Register />
  </MainLayout>
)

LayoutRegisterPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}
