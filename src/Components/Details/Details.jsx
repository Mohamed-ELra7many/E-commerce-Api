/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AddToCart } from '../../Redux/CartSlice/CartSlice'
import "./details.scss"

const Details = () => {
  const [item, setItem] = useState([])
  const [rate, setRate] = useState([])
  const { id } = useParams()
  const dispatch = useDispatch()
  const AddCart = (item) => {     // func add to cart
    dispatch(AddToCart(item))
  }
  const Getdata = async () => {
    const ress = await axios.get(`https://fakestoreapi.com/products/${id}`)   //This is to get the data from the api
    setItem(ress.data)
    setRate(ress.data.rating)

  }
  useEffect(() => {
    Getdata()
  }, [])
  return (
    <div className='details'>
      <div className='container'>
        <div className='item' key={item.id}>
          <div className='image'>
            <img src={item.image} alt={item.title} />
          </div>
          <div className='text-content'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className='price-rate'>
              <div className='rate'>
                <span><i className='fa fa-star'></i> </span>
                : {rate.rate}
              </div>
              <div className='price'>${item.price}</div>
            </div>
            <div className='count'>We have ({rate.count}) . of this product</div>
            <button onClick={() => AddCart(item)}>Buy Now</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Details