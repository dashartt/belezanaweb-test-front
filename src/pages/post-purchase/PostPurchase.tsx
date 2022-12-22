import './PostPurchase.style.css'
import Header from 'components/header/Header'
import { useLocation } from 'react-router-dom'
import { Purchase } from 'types/PurchaseDetails'
import CheckoutPrices from 'pages/shopping-cart/components/CheckoutPrices'
import ListProducts from 'pages/shopping-cart/components/ListProducts'
import PostPaymentMessage from 'components/post-payment/PostPaymentMessage'
import PostPaymentDetails from 'components/post-payment/PostPaymentDetails'

function PostPurchase() {
  const { state } = useLocation()
  const { buyerDetails, shoppingCartDetails } =
    state?.purchaseDetails as Purchase

  return (
    <section className="page-container">
      <Header />
      <section className="page-layout">
        <PostPaymentMessage />
        <PostPaymentDetails {...buyerDetails} />
        <ListProducts items={shoppingCartDetails.items} />
        <CheckoutPrices data={shoppingCartDetails} />
      </section>
    </section>
  )
}

export default PostPurchase
