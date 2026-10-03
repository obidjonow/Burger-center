import products from '../data/db.json'
import '../index.css'

function Vok({ setCart, setIsCartOpen }) {

  const vok = products.filter(
    item => item.category === 'vok'
  )

  function addToCart(product) {
  setCart(prev => [
    ...prev,
    {
      id: product.id,
      name: product.name,
      price: product.price,
      weight: product.weight,
      image: `/assets/${product.image}`,
      quantity: 1
    }
  ])

}

  return (
    <div className="ProductCard scroll-target">
      <div className="row-container">

        {vok.map(product => (
          <div className="cards" key={product.id}>

            <img
              width="300px"
              src={`/assets/${product.image}`}
              alt={product.name}
            />

            <div className="cards-text">

              <div className="card-narh">
                <h1>{product.price}₽</h1>
                <p>{product.name}</p>
              </div>

              <div className="btn-con">
                <small>{product.weight}</small>

                <button onClick={() => addToCart(product)}>
                  Добавить
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Vok