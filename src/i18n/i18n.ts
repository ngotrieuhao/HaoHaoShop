import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from 'src/locales/en/home.json'
import HOME_VI from 'src/locales/vi/home.json'
import PRODUCTDETAIL_EN from 'src/locales/en/productdetail.json'
import PRODUCTDETAIL_VI from 'src/locales/vi/productdetail.json'
import ASIDEFILTER_EN from 'src/locales/en/asidefilter.json'
import ASIDEFILTER_VI from 'src/locales/vi/asidefilter.json'
import NAVHEADER_EN from 'src/locales/en/navheader.json'
import NAVHEADER_VI from 'src/locales/vi/navheader.json'
import FEATUREDPRODUCT_EN from 'src/locales/en/featuredproduct.json'
import FEATUREDPRODUCT_VI from 'src/locales/vi/featuredproduct.json'
import HEADER_EN from 'src/locales/en/header.json'
import HEADER_VI from 'src/locales/vi/header.json'
import MENUHEADER_EN from 'src/locales/en/menuheader.json'
import MENUHEADER_VI from 'src/locales/vi/menuheader.json'
import FOOTER_EN from 'src/locales/en/footer.json'
import FOOTER_VI from 'src/locales/vi/footer.json'
import SORTPRODUCTLIST_EN from 'src/locales/en/sortproductlist.json'
import SORTPRODUCTLIST_VI from 'src/locales/vi/sortproductlist.json'
import PRODUCT_EN from 'src/locales/en/product.json'
import PRODUCT_VI from 'src/locales/vi/product.json'
import RATINGSTAR_EN from 'src/locales/en/ratingstar.json'
import RATINGSTAR_VI from 'src/locales/vi/ratingstar.json'
import IDENTIFICATION_EN from 'src/locales/en/identification.json'
import IDENTIFICATION_VI from 'src/locales/vi/identification.json'
import CART_EN from 'src/locales/en/cart.json'
import CART_VI from 'src/locales/vi/cart.json'
import PROFILE_EN from 'src/locales/en/profile.json'
import PROFILE_VI from 'src/locales/vi/profile.json'

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt'
} as const

export const resources = {
  en: {
    home: HOME_EN,
    productDetail: PRODUCTDETAIL_EN,
    asideFilter: ASIDEFILTER_EN,
    navHeader: NAVHEADER_EN,
    featuredProduct: FEATUREDPRODUCT_EN,
    header: HEADER_EN,
    menuHeader: MENUHEADER_EN,
    footer: FOOTER_EN,
    sortProductList: SORTPRODUCTLIST_EN,
    product: PRODUCT_EN,
    ratingstar: RATINGSTAR_EN,
    identification: IDENTIFICATION_EN,
    cart: CART_EN,
    profile: PROFILE_EN
  },
  vi: {
    home: HOME_VI,
    productDetail: PRODUCTDETAIL_VI,
    asideFilter: ASIDEFILTER_VI,
    navHeader: NAVHEADER_VI,
    featuredProduct: FEATUREDPRODUCT_VI,
    header: HEADER_VI,
    menuHeader: MENUHEADER_VI,
    footer: FOOTER_VI,
    sortProductList: SORTPRODUCTLIST_VI,
    product: PRODUCT_VI,
    ratingstar: RATINGSTAR_VI,
    identification: IDENTIFICATION_VI,
    cart: CART_VI,
    profile: PROFILE_VI
  }
}

export const defaultNS = 'home'

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'productDetail'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false // react already safes from xss
  }
})
