import './Payment.style.css'
import Header from 'components/header/Header'
import CheckoutPrices from 'pages/shopping-cart/components/CheckoutPrices'
import { Link, useLocation } from 'react-router-dom'
import PaymentForm from './PaymentForm'

function Payment() {
  const { state } = useLocation()

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <h1 className="text-session">CARTÃO DE CRÉDITO</h1>

        <PaymentForm />

        <CheckoutPrices data={state?.data} />
        <button className="button-theme mt-4">
          <Link to="/post-purchase" state={state}>
            FINALIZAR PEDIDO
          </Link>
        </button>
      </section>
    </section>
  )
}

export default Payment
