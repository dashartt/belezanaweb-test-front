import './ShoppingCart.style.css'
import Header from 'components/header/Header'
import ProductCard from 'components/product-card'
import { formatPrice } from 'helpers'
import { useEffect, useState } from 'react'
import getProducts from 'services/api'
import { ShoppingCart as IShoppingCart } from 'types/ShoppingCart'

function ShoppingCart() {
  const [data, setData] = useState<IShoppingCart | null>(null)

  useEffect(() => {
    getProducts().then((data_) => setData(data_))
  }, [])

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <h1 className="text-session">PRODUTOS</h1>

        <section className="products-container">
          {data?.items?.map(({ product }) => (
            <ProductCard key={product.sku} product={product} />
          ))}
        </section>

        <section className="details-container mt-4">
          <section className="details-container__subcontainer">
            <span>PRODUTOS</span>
            <span>FRETE</span>
            <span className="orange-theme">DESCONTO</span>
            <span className="font-bold">TOTAL</span>
          </section>
          <section className="details-container__subcontainer">
            <span>{formatPrice(data?.subTotal)}</span>
            <span>{formatPrice(data?.shippingTotal)}</span>
            <span className="orange-theme">{formatPrice(data?.discount)}</span>
            <span className="font-bold">{formatPrice(data?.total)}</span>
          </section>
        </section>

        <button className="button-theme mt-4">SEGUIR PARA O PAGAMENTO</button>
      </section>
    </section>
  )
}

export default ShoppingCart
