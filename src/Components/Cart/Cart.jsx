import React from 'react'
import "./Cart.scss"
import { useSelector } from 'react-redux'
import EmptyCart from './CartDetails/EmptyCart'
import ItemsCart from './CartDetails/ItemsCart'

const Cart = () => {
  const Items = useSelector(state => state.Cart)
  return (
    <>
      <div className='container'>
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {Items.cartItems.length === 0 ? (
            <EmptyCart />
          )
            : (
              <ItemsCart />
            )}
        </div>
      </div>
    </>
  )
}

export default Cart