import './Payment.style.css'
import Header from 'components/header/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import PaymentForm from './PaymentForm'
import { ShoppingCart } from 'types/ShoppingCart'
import CheckoutPrices from 'components/checkout-prices/CheckoutPrices'

function Payment() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const shoppingCartDetails = state.data as ShoppingCart

  const onNextPage = () => {
    const paymentForm = document.getElementById(
      'payment-form'
    ) as HTMLFormElement

    const [cardNumberNode, cardholderNameNode, validityNode] =
      paymentForm.elements as unknown as HTMLInputElement[]

    navigate('/post-purchase', {
      state: {
        purchaseDetails: {
          shoppingCartDetails,
          buyerDetails: {
            cardNumber: cardNumberNode.value,
            cardholderName: cardholderNameNode.value,
            validity: validityNode.value
          }
        }
      }
    })
  }

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <h1 className="text-session">CARTÃO DE CRÉDITO</h1>
        <PaymentForm />
        <CheckoutPrices data={state?.data} />
        <button
          type="submit"
          onClick={onNextPage}
          className="button-theme mt-4"
        >
          FINALIZAR PEDIDO
        </button>
      </section>
    </section>
  )
}

export default Payment
