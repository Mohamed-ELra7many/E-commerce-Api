import React, { useState } from 'react'
import "./navbar.scss"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Navbar = () => {
    const state = useSelector(state=> state.Cart.cartItems)
    const [show, setShow] = useState(false)
    const divRef = useRef()

    // func scroll window toggle class NavBar
    window.onscroll = ()=>{
        if(window.scrollY > divRef.current.offsetTop ){
            divRef.current.classList.add("scroll")
        }else{
            divRef.current.classList.remove("scroll")
        }
    }

    return (
        <nav ref={divRef}>
            <div className="container">
                <div className="navbar">
                    <NavLink to="/" className="logo">
                        <h2>
                            ECO
                            <span>MMERCE</span>
                        </h2>
                    </NavLink>
                    <ul className={show ? "mobile" : "Desktop"} onClick={() => setShow(false)}>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">
                            Our Products
                            </NavLink>
                        </li>
                        <li>
                            <a href="#about">
                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                            Contact Us
                            </a>
                        </li>
                        <NavLink to="/cart" className="cart">
                        <i className='fa fa-shopping-cart'></i>
                        <span>{state.length}</span>
                        </NavLink>
                    </ul>
                    <div className="toggle" onClick={() => setShow(!show)}>
                        {show ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar