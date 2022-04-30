import { CartContext } from '../context/CardContext'
import { useContext } from 'react'
import { LangContext } from '../context/LanguageContext'

export const Navbar = () => {
  const { cart } = useContext(CartContext)
  const {lang} = useContext(LangContext);
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'end',
        padding: '15px',
        fontSize: '28px',
        border: '1px solid red',
        margin: '10px',
      }}
    >
      {/* Cart: {cart} */}
      Navbar
      {lang === "en" ? "Cart" : "Jholla"}: {cart}

    </nav>
  )
}