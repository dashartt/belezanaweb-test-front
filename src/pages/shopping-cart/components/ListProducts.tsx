import ProductCard from 'components/product-card'
import { ItemsInCart } from 'types/ShoppingCart'

type Props = {
  items: ItemsInCart[] | []
}

function ListProducts({ items }: Props) {
  return (
    <section className="mt-4">
      <h1 className="text-session">PRODUTOS</h1>
      <section className="session-container">
        {items?.map(({ product }) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </section>
    </section>
  )
}

export default ListProducts
