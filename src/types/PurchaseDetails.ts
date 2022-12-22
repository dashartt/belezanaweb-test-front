import { ShoppingCart } from './ShoppingCart'

export type Buyer = {
  cardNumber: number
  cardholderName: string
  validity: string
  cvv?: string
}

export type Purchase = {
  shoppingCartDetails: ShoppingCart
  buyerDetails: Buyer
}
