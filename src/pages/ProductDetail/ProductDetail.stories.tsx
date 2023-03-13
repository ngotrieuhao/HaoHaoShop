import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductDetail from './ProductDetail'

export default {
  title: 'pages/ProductDetail',
  component: ProductDetail
} as ComponentMeta<typeof ProductDetail>

const Template: ComponentStory<typeof ProductDetail> = () => <ProductDetail />
export const ProductDetaildPage = Template.bind({})

ProductDetaildPage.story = {
  parameters: {
    reactRouter: {
      routePath: '/:nameId',
      routeParams: {
        nameId: 'Đồng-Hồ-Nam-CRRJU-CR8940-Dây-Thép-Cao-Cấp-i-60afaf286ef5b902180aacb3'
      }
    }
  }
}
