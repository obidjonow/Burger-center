import { NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import '../index.css'

function Category() {

  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {

      const products = document.querySelector('.product-container')

      if (products) {
        products.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

    }, 300)

    return () => clearTimeout(timer)

  }, [location.pathname])


  return (
    <div className="category-container">

      <div className="categories">

        <NavLink to="/" end>
          Все
        </NavLink>

        <NavLink to="/Burger">
          🍔 Бургеры
        </NavLink>

        <NavLink to="/Zakuski">
          🍳 Закуски
        </NavLink>

        <NavLink to="/HotDog">
          🌭 Хот-доги
        </NavLink>

        <NavLink to="/Combo">
          🍱 Комбо
        </NavLink>

        <NavLink to="/Shaurma">
          🌯 Шаурма
        </NavLink>

        <NavLink to="/Pizza">
          🍕 Пицца
        </NavLink>

        <NavLink to="/Vok">
          🍜 Вок
        </NavLink>

        <NavLink to="/Desert">
          🍩 Десерты
        </NavLink>

        <NavLink to="/sauces">
          🍅 Соусы
        </NavLink>

      </div>

    </div>
  )
}

export default Category