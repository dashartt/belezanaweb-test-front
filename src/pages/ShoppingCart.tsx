import { useEffect, useState } from 'react'
import getProducts from 'services/api'
import { ItemsInCart } from 'types/ShoppingCart'

function ShoppingCart() {
  const [products, setProducts] = useState<ItemsInCart[]>([])

  useEffect(() => {
    getProducts().then((data) => setProducts(data.items))
  }, [])

  return (
    <section>
      <h1>Shopping Cart page</h1>
      {products?.map(({ product }) => (
        <p key={product.sku}>{product.name}</p>
      ))}
    </section>
  )
}

export default ShoppingCart
