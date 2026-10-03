function Header() {
  return (
    <div>
      <header className="header-container">

        <div className="div1">
          <p>YourMeal</p>

          <img
            src="/assets/kitchen.png"
            alt=""
          />
        </div>

        <div className="mini-con">

          <img
            src="/assets/pic (24).png"
            alt=""
            width={500}
          />

          <div className="header-text">

            <h1>
              Только самые <span>сочные бургеры!</span>
            </h1>

            <div>
              <small>
                Бесплатная доставка от 599₽
              </small>
            </div>

          </div>

        </div>

      </header>
    </div>
  )
}

export default Header