import '../index.css'

function CartSideBar({
  cart,
  setCart,
  isCartOpen,
  setIsCartOpen,
  isOrderOpen,
  setIsOrderOpen
}) {

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const increase = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )
  }

  const decrease = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  return (
    <aside className={`Side-bar ${isCartOpen ? 'open' : ''}`}>

      {/* SIDEBAR HEADER */}

      <div className="SideBar-con1">

        <h1>Корзина</h1>

        <div className="div-value">
          {cart.length}
        </div>

        <button
          className="sideBar-close"
          onClick={() => setIsCartOpen(false)}
        >
          ×
        </button>

      </div>


      {/* CART PRODUCTS */}

      <div className="cart-items">

        {cart.map(item => (

          <div
            className="korzina-con"
            key={item.id}
          >

            <div className="mahsulot-con">

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="mahsulots-text">

                <h6>
                  {item.name}
                </h6>

                <small>
                  {item.weight}
                </small>

                <p>
                  {item.price * item.quantity}₽
                </p>

              </div>

            </div>


            {/* QUANTITY */}

            <div className="mahsulot-value">

              <button
                onClick={() => decrease(item.id)}
              >
                −
              </button>

              <span>
                {item.quantity}
              </span>

              <button
                onClick={() => increase(item.id)}
              >
                +
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* CART BOTTOM */}

      <div className="dostavka-con">

        <div className="dostavka-narx">

          <p>
            Итого
          </p>

          <h1>
            {totalPrice}₽
          </h1>

        </div>


        <div>

          <button
            onClick={() => setIsOrderOpen(true)}
          >
            Оформить заказ
          </button>

        </div>


        <div className="dostavka">

          <img
            src="/assets/zakaz (1).png"
            alt=""
          />

          <p>
            Бесплатная доставка
          </p>

        </div>

      </div>

    </aside>
  )
}

export default CartSideBar