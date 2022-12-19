import './Header.style.css'
import { changeItemNavColor } from 'helpers'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  useEffect(() => changeItemNavColor(location.pathname), [location.pathname])

  return (
    <header className="header-container">
      <nav className="header-nav">
        <span id="shopping-cart">SACOLA</span>
        <span id="payment">PAGAMENTO</span>
        <span id="post-purchase">CONFIRMAÇÃO</span>
      </nav>
    </header>
  )
}

export default Header
