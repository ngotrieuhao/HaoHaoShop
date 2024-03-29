const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  historyPurchase: '/user/purchase',
  changePassword: '/user/password',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart',
  product: '/products'
} as const

export default path
