/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import "./products.scss"
import { NavLink } from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../Redux/CartSlice/CartSlice'

const HomeProducts = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])

    const GetData = async () => {
        const DataHome = (await axios.get("https://fakestoreapi.com/products")).data               //This is to get the data from the api
        const DataApi = DataHome.slice(0, 6)
        setData(DataApi)

    }

    useEffect(() => {
        GetData()
    }, [data])

    const Addtocart = (product) => {                  //func add to cart
        dispatch(AddToCart(product))
    }

    return (
        <>
            <div className='container'>
                <div className='head'>
                    <h2>Latest Products</h2>
                    <NavLink to="/products">view all products </NavLink>
                </div>
                <div className='Home-Products'>
                    {data.map((item) => (
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
                                    <button className='Add' onClick={() => Addtocart(item)}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeProducts