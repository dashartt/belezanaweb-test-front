import './PostPaymentMessage.style.css'
import { BsCheckCircle as CheckIcon } from 'react-icons/bs'

function PostPaymentMessage() {
  return (
    <section className="post-payment__container">
      <CheckIcon className="post-payment__icon" />
      <span className="post-payment__text">COMPRA EFETUADA COM SUCESSO</span>
    </section>
  )
}

export default PostPaymentMessage
