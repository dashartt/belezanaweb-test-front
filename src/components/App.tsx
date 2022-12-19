import Payment from 'pages/Payment'
import PostPurchase from 'pages/PostPurchase'
import ShoppingCart from 'pages/ShoppingCart'
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
