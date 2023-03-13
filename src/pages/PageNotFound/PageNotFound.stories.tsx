import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import path from 'src/constants/path'
import PageNotFound from './PageNotFound'

export default {
  title: 'pages/PageNotFound',
  component: PageNotFound
} as ComponentMeta<typeof PageNotFound>

const Template: ComponentStory<typeof PageNotFound> = () => <PageNotFound />
export const PageNotFoundPage = Template.bind({})

PageNotFoundPage.story = {
  parameters: {
    reactRouter: {
      routePath: path.home
    }
  }
}
