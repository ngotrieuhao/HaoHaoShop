import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />
export const FooterLayout = Template.bind({})
FooterLayout.args = {
  Footer: 'Footer'
}
