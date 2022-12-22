import Header from 'components/header/Header'
import { useEffect, useState } from 'react'
import getProducts from 'services/api'
import { ShoppingCart as IShoppingCart } from 'types/ShoppingCart'
import ListProducts from '../../components/list-products/ListProducts'
import { Link } from 'react-router-dom'
import CheckoutPrices from 'components/checkout-prices/CheckoutPrices'

function ShoppingCart() {
  const [data, setData] = useState<IShoppingCart | null>(null)

  useEffect(() => {
    getProducts().then((data_) => setData(data_))
  }, [])

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <ListProducts items={data?.items || []} />
        <CheckoutPrices data={data} />
        <button className="button-theme mt-4">
          <Link to="/payment" state={{ data: data }}>
            SEGUIR PARA O PAGAMENTO
          </Link>
        </button>
      </section>
    </section>
  )
}

export default ShoppingCart
