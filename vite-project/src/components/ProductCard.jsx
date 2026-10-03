//   react
import { useState } from 'react'

import products from '../data/db.json'

import '../index.css'


function ProductCard({ setCart, setIsCartOpen, category }) {

  const [visibleCount, setVisibleCount] = useState(6)

  let filteredProducts = products

  
  if (category) {
    filteredProducts = products.filter(
      item => item.category === category
    )
  }

  if (!category) {
    filteredProducts = [...filteredProducts].sort(
      () => Math.random() - 0.5
    )
  }


  const visibleProducts  = filteredProducts.slice(0, visibleCount)


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
    <div className="product-container">

      {visibleProducts.map(product => (
        <div className="product-card" key={product.id}>

          <img
            src={`/assets/${product.image}`}
            alt={product.name}
          />

          <div className="product-info">

            <h2>{product.price} so'm </h2>

            <h3>{product.name}</h3>

            <p>{product.weight}</p>

            <button onClick={() => addToCart(product)}>
              Добавить
            </button>

          </div>

        </div>
      ))}

      {visibleCount < filteredProducts.length && (
        <div className='show-more'>
          <button onClick={() => {
            setVisibleCount(prev => prev + 6)
          }}>
            Ещё
          </button>
        </div>
      )}


    </div>
  )
}

export default ProductCard