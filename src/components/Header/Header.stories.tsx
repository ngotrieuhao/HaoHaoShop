import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />
export const HeaderLayout = Template.bind({})
HeaderLayout.args = {
  Header: 'Header'
}
