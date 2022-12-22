import { showEndCardNumber } from 'helpers'
import { Buyer } from 'types/PurchaseDetails'

type Props = Buyer

function PostPaymentDetails({ cardNumber, cardholderName, validity }: Props) {
  return (
    <section>
      <h1 className="text-session">PAGAMENTO</h1>
      <section className="session-container flex flex-col space-y-0">
        <span>{showEndCardNumber(cardNumber)}</span>
        <span>{cardholderName}</span>
        <span>{validity}</span>
      </section>
    </section>
  )
}

export default PostPaymentDetails
