type PriceSpecification = {
  discount: number
  maxPrice: number
  originalPrice: number
  percent: number
  sku: string
}

type ImageObjects = {
  extraLarge: string
  featured: boolean
  large: string
  medium: string
  small: string
  thumbnail: string
  valid: boolean
}

export type Product = {
  name: string
  sku: string
  imageObjects: ImageObjects
  priceSpecification: PriceSpecification
}
