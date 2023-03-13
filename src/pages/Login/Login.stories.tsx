import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from './Login'
import path from 'src/constants/path'
import MainLayout from 'src/layouts/MainLayout'

export default {
  title: 'pages/Login',
  component: Login
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = () => <Login />
export const LoginPage = Template.bind({})

LoginPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}

export const LayoutLoginPage: ComponentStory<typeof Login> = () => (
  <MainLayout>
    <Login />
  </MainLayout>
)

LayoutLoginPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.login
    }
  }
}
