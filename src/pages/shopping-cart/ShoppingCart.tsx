import Header from '../../components/header/Header'
import { useEffect, useState } from 'react'
import getProducts from '../../services/api'
import { ShoppingCart as IShoppingCart } from '../../types/ShoppingCart'
import ListProducts from '../../components/list-products/ListProducts'
import { useNavigate } from 'react-router-dom'
import CheckoutPrices from '../../components/checkout-prices/CheckoutPrices'

function ShoppingCart() {
  const navigate = useNavigate()
  const [data, setData] = useState<IShoppingCart | null>(null)

  useEffect(() => {
    getProducts().then((data_) => setData(data_))
  }, [])

  const onNextPage = () => {
    navigate('/payment', { state: { data } })
  }

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <ListProducts items={data?.items || []} />
        <CheckoutPrices data={data} />
        <button onClick={onNextPage} className="button-theme mt-4">
          SEGUIR PARA O PAGAMENTO
        </button>
      </section>
    </section>
  )
}

export default ShoppingCart
