import './CheckoutPrices.style.css'
import { formatPrice } from '../../helpers'
import { ShoppingCart } from '../../types/ShoppingCart'

type Props = {
  data: ShoppingCart | null
}

function CheckoutPrices({ data }: Props) {
  return (
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
  )
}

export default CheckoutPrices
