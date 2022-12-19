function PaymentForm() {
  return (
    <form className="payment-form">
      <label htmlFor="cardNumber" className="payment-form__label">
        Número do cartão:
        <input
          id="cardNumber"
          className="payment-form__input"
          placeholder="____.____.____.____"
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
          <input
            id="validity"
            className="payment-form__input w-full"
            placeholder="__/____"
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
