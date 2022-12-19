import ProductCard from 'components/product-card'
import { ItemsInCart } from 'types/ShoppingCart'

type Props = {
  items: ItemsInCart[] | []
}

function ListProducts({ items }: Props) {
  return (
    <section className="products-container">
      {items?.map(({ product }) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  )
}

export default ListProducts
