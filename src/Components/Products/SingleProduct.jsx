import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleProduct = ({ filter }) => {
  return (
    <div className='container'>
      <div className='Home-Products'>
        {filter.map((item) => (
          <div className='product' key={item.id}>
            <NavLink to={`/${item.id}`} className='image'>
              <img src={item.image} alt={item.title} />
            </NavLink>
            <div className='product-content'>
              <div className='title-price'>
                <h2>{item.title.substring(0, 12)}</h2>
                <span className='price'>
                  ${item.price}
                </span>
              </div>
              <p className='desc'>{item.description.substring(0, 100)}</p>
              <div className='add-product'>
                <button className='Add'>ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleProduct