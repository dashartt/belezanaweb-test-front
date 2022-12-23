import { useLocation } from 'react-router-dom'
import { Purchase } from 'types/PurchaseDetails'
import { useEffect } from 'react'
import Header from '../../components/header/Header'
import PostPaymentMessage from '../../components/post-payment/PostPaymentMessage'
import PostPaymentDetails from '../../components/post-payment/PostPaymentDetails'
import CheckoutPrices from '../../components/checkout-prices/CheckoutPrices'
import ListProducts from '../../components/list-products/ListProducts'

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
