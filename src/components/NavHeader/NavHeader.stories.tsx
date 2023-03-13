import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavHeader from './NavHeader'

export default {
  title: 'Components/NavHeader',
  component: NavHeader
} as ComponentMeta<typeof NavHeader>

const Template: ComponentStory<typeof NavHeader> = () => <NavHeader />
export const NavHeaderPage = Template.bind({})
NavHeaderPage.args = {
  label: 'Button'
}
