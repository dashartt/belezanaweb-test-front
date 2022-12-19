import { changeItemNavColor } from 'helpers'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  useEffect(() => changeItemNavColor(location.pathname), [location.pathname])

  return (
    <header>
      <nav className="flex justify-between p-4 font-bold text-[#CCC] shadow-[1px_1px_5px_0_rgba(0,0,29,0.22)]">
        <Link id="shopping-cart" to="/shopping-cart">
          SACOLA
        </Link>
        <Link id="payment" to="/payment">
          PAGAMENTO
        </Link>
        <Link id="post-purchase" to="/post-purchase">
          CONFIRMAÇÃO
        </Link>
      </nav>
    </header>
  )
}

export default Header
