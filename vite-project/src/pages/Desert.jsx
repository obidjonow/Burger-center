import products from '../data/db.json'
import '../index.css'

function Desert({ setCart, setIsCartOpen }) {

  const desert = products.filter(
    item => item.category === 'desert'
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

        {desert.map(product => (
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

export default Desert