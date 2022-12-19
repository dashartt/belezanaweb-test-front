import './ShoppingCart.style.css'
import Header from 'components/header/Header'
import { useEffect, useState } from 'react'
import getProducts from 'services/api'
import { ShoppingCart as IShoppingCart } from 'types/ShoppingCart'
import ListProducts from './components/ListProducts'
import CheckoutPrices from './components/CheckoutPrices'
import { Link } from 'react-router-dom'

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
        <ListProducts items={data?.items || []} />
        <CheckoutPrices data={data} />
        <button className="button-theme mt-4">
          <Link to="/payment">SEGUIR PARA O PAGAMENTO</Link>
        </button>
      </section>
    </section>
  )
}

export default ShoppingCart
