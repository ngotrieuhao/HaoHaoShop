import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import MainLayout from './MainLayout'
import ProductDetail from 'src/pages/ProductDetail'

export default {
  title: 'Layouts/MainLayout',
  component: MainLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'Body of Layout',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    }
  }
} as ComponentMeta<typeof MainLayout>

const Template: ComponentStory<typeof MainLayout> = (props) => <MainLayout {...props} />
export const WithoutProductDetail = Template.bind({})
export const PageProductDetail = Template.bind({})

PageProductDetail.args = {
  children: <ProductDetail />
}
PageProductDetail.story = {
  parameters: {
    reactRouter: {
      routePath: '/:nameId',
      routeParams: {
        nameId: 'Đồng-Hồ-Nam-CRRJU-CR8940-Dây-Thép-Cao-Cấp-i-60afaf286ef5b902180aacb3'
      }
    }
  }
}
