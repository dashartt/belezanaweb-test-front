/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IMaskInput } from 'react-imask'

function PaymentForm() {
  return (
    <form id="payment-form" className="payment-form">
      <label htmlFor="cardNumber" className="payment-form__label">
        Número do cartão:
        <IMaskInput
          /*
            // @ts-ignore */
          className="payment-form__input"
          mask="0000.0000.0000.0000"
          placeholder="____.____.____.____"
          id="cardNumber"
          min={11}
        />
      </label>

      <label htmlFor="cardholderName" className="payment-form__label">
        Nome do titular:
        <input
          id="cardholderName"
          className="payment-form__input"
          placeholder="Como no cartão"
        />
      </label>

      <div className="flex justify-between space-x-4">
        <label htmlFor="validity" className="payment-form__label">
          Validade(mês/ano):
          <IMaskInput
            /*
            // @ts-ignore */
            className="payment-form__input w-full"
            mask="00/0000"
            placeholder="__/____"
            id="validity"
          />
        </label>

        <label htmlFor="cvv" className="payment-form__label">
          CVV:
          <input
            id="cvv"
            className="payment-form__input w-full"
            placeholder="___"
          />
        </label>
      </div>
    </form>
  )
}

export default PaymentForm
