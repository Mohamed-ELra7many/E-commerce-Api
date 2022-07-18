import React from 'react'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <>
            <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                    <NavLink to="/">
                        <i className="fa fa-arrow-left"></i>
                        <span>Start Shopping</span>
                    </NavLink>
                </div>
            </div>
            
        </>
    )
}

export default EmptyCart