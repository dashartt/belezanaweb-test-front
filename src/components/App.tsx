import Payment from '../pages/payment/Payment'
import PostPurchase from '../pages/post-purchase/PostPurchase'
import ShoppingCart from '../pages/shopping-cart/ShoppingCart'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/post-purchase" element={<PostPurchase />} />
      <Route path="/" element={<Navigate replace to="/shopping-cart" />} />
    </Routes>
  )
}

export default App
