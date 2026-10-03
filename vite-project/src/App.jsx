import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
import Header from './components/Header'
import Category from './components/Category'
import ProductCard from './components/ProductCard'
import CartSideBar from './components/CartSideBar'

// pages
import SideBarModal from './pages/sideBarModal'
import Zakuski from './pages/Zakuski'
import HotDog from './pages/HotDog'
import Combo from './pages/Combo'
import Shaurma from './pages/Shaurma'
import Pizza from './pages/Pizza'
import Vok from './pages/Vok'
import Desert from './pages/Desert'
import Sauces from './pages/Sauces'

import OrderMap from './pages/OrderMap'

import Icon from '../public/assets/icon.svg'


function App() {

  const location = useLocation()
  const navigate = useNavigate()

  const [isOrderOpen, setIsOrderOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Заказ отправлен modal
  const [isZakazOpen, setIsZakazOpen] = useState(false)

  // Kuryer yo'nalishi modal
  const [isCourierOpen, setIsCourierOpen] = useState(false)

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart")
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Buyurtma berilgan yoki yo'q
  const [hasOrder, setHasOrder] = useState(() => {
    return localStorage.getItem("hasOrder") === "true"
  })


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  useEffect(() => {
    const timer = setTimeout(() => {

      const products = document.querySelector('.scroll-target')

      if (products) {
        products.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

    }, 100)

    return () => clearTimeout(timer)

  }, [location.pathname])


  // Buyurtma muvaffaqiyatli yuborilganda
  const handleOrderSuccess = () => {

    setIsOrderOpen(false)

    setIsZakazOpen(true)

    setHasOrder(true)

    localStorage.setItem("hasOrder", "true")

    // Savatni tozalash
    setCart([])

    setIsCartOpen(false)
  }


  // "Хорошо" bosilganda
  const handleZakazClose = () => {

    setIsZakazOpen(false)

    // Asosiy sahifaga qaytish
    navigate('/')

  }


  const handleCancelOrder = () => {
    setIsCourierOpen(false)
    setHasOrder(false)

    localStorage.removeItem('hasOrder')
  }


  return (
    <div>

      <header>
        <Header />
      </header>


      <section>

        <Category />

        <Routes>

          <Route
            index
            element={
              <ProductCard
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
              />
            }
          />


          <Route
            path="/Burger"
            element={
              <ProductCard
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="burger"
              />
            }
          />


          <Route
            path="/Zakuski"
            element={
              <Zakuski
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="zakuski"
              />
            }
          />


          <Route
            path="/HotDog"
            element={
              <HotDog
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="hotdog"
              />
            }
          />


          <Route
            path="/Combo"
            element={
              <Combo
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="combo"
              />
            }
          />


          <Route
            path="/Shaurma"
            element={
              <Shaurma
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="shaurma"
              />
            }
          />


          <Route
            path="/Pizza"
            element={
              <Pizza
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="Pizza"
              />
            }
          />


          <Route
            path="/Vok"
            element={
              <Vok
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="vok"
              />
            }
          />


          <Route
            path="/Desert"
            element={
              <Desert
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="desert"
              />
            }
          />


          <Route
            path="/Sauces"
            element={
              <Sauces
                setCart={setCart}
                setIsCartOpen={setIsCartOpen}
                category="sauces"
              />
            }
          />

        </Routes>

      </section>


      {/* SAVAT */}
      <CartSideBar
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isOrderOpen={isOrderOpen}
        setIsOrderOpen={setIsOrderOpen}
      />


      {/* BUYURTMA MODALI */}
      <SideBarModal
        isOrderOpen={isOrderOpen}
        setIsOrderOpen={setIsOrderOpen}

        isZakazOpen={isZakazOpen}
        setIsZakazOpen={setIsZakazOpen}

        onOrderSuccess={handleOrderSuccess}
        onZakazClose={handleZakazClose}
      />


      {/* MINI CART */}
      {cart.length > 0 && !isCartOpen && (

        <button
          className="mini-cart"
          onClick={() => setIsCartOpen(true)}
        >

          <div className="mini-cart-icon">
            <img src={Icon} alt="" />
          </div>

          <div className="mini-cart-content">

            <span className="mini-cart-title">
              Корзина
            </span>

            <div className="mini-cart-bottom">

              <span>
                {cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                )} товара
              </span>

              <span className="mini-cart-line"></span>

              <strong>
                {cart.reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )}₽
              </strong>

            </div>

          </div>

        </button>

      )}


      {/* KURYER YO'NALISHI BUTTON */}
      {hasOrder && !isCourierOpen && (

        <button
          className="courier-button"
          onClick={() => setIsCourierOpen(true)}
        >
          🚚
          <span>Курьер едет</span>
        </button>

      )}


      {/* KURYER XARITASI */}
      {isCourierOpen && (

        <div className="courier-modal">

          <div className="courier-modal-content">

            <button
              className="courier-close"
              onClick={() => setIsCourierOpen(false)}
            >
              ×
            </button>

            <h2>🚚 Kuryer yo‘nalishi</h2>

            <p className="courier-status">
              Kuryer buyurtmangizni yetkazib bermoqda
            </p>

            <OrderMap onCancel={handleCancelOrder}/>

            <button
              className="courier-back-button"
              onClick={() => setIsCourierOpen(false)}
            >
              Asosiy sahifaga qaytish
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default App