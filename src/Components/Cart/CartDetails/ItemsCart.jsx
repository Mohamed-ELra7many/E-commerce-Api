import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { AddToCart, clearCart, Decrees, getTotals, RemoveFromCart } from '../../../Redux/CartSlice/CartSlice'

const ItemsCart = () => {
    const state = useSelector(state => state.Cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals());
    }, [state, dispatch]);

    const handleAddToCart = (product) => {   // fonc add to cart
        dispatch(AddToCart(product));
    };
    const handleDecreaseCart = (product) => {     // func decreas cart
        dispatch(Decrees(product));
    };
    const handleRemoveFromCart = (product) => {   // func remove cart
        dispatch(RemoveFromCart(product));
    };
    const handleClearCart = () => {     // func remove all cart
        dispatch(clearCart());
    };
    return (
        <>
            <div>
                <div className="titles">
                    <h3 className="product-title">Item</h3>
                    <h3 className="price">Price</h3>
                    <h3 className="quantity">Quantity</h3>
                    <h3 className="total">Total</h3>
                </div>
                <div className="cart-items">
                    {state.cartItems &&
                        state.cartItems.map((cartItem) => (
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                        <h3>{cartItem.name}</h3>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-product-price">$ {cartItem.price}</div>
                                <div className="cart-product-quantity">
                                    <button onClick={() => handleDecreaseCart(cartItem)}>
                                        -
                                    </button>
                                    <div className="count">{cartItem.cartQouantity}</div>
                                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                </div>
                                <div className="cart-product-total-price">
                                    ${cartItem.price * cartItem.cartQouantity}
                                </div>
                            </div>
                        ))}
                </div>
                <div className="cart-summary">
                    <button className="clear-btn" onClick={() => handleClearCart()}>
                        Clear Cart
                    </button>
                    <div className="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">$ {state.cartTotalAmount}</span>
                        </div>
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check out</button>
                        <div className="continue-shopping">
                            <NavLink to="/">
                                <i className="fa fa-arrow-left"></i>
                                <span>Continue Shopping</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemsCart