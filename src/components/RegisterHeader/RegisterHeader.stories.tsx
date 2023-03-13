import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import RegisterHeader from './RegisterHeader'

export default {
  title: 'Components/RegisterHeader',
  component: RegisterHeader
} as ComponentMeta<typeof RegisterHeader>

const Template: ComponentStory<typeof RegisterHeader> = () => <RegisterHeader />
export const RegisterHeaderPage = Template.bind({})
RegisterHeaderPage.args = {}
