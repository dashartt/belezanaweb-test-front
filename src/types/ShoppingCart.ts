import { Product } from './Product'

export type ItemsInCart = {
  product: Product
  quantity: number
}

export type ShoppingCart = {
  discount: number
  id: string
  items: ItemsInCart[]
  shippingTotal: number
  subTotal: number
  total: number
}
