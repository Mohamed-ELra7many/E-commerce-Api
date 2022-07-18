/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Catogry from './Catogry'
import SingleProduct from './SingleProduct'

const Products = () => {
  const [item, setItems] = useState([])
  const [filter, setFilter] = useState(item)

  const getProducts = async () => {      //This is to get the data from the api
    const ress = await axios.get("https://fakestoreapi.com/products")

    setItems(ress.data)
    setFilter(item)
  }

  useEffect(() => {
    getProducts()
  }, [])


  const FilterProdacts = (category) => {    //This is a filter for Similar Items
    if (category === "All") {
      setFilter(item)
    } else {
      const Filter = item.filter((x) => x.category === category)
      setFilter(Filter)
    }
  }
  return (
    <div className='products'>
      <div className='Product-head'>
        <h5>NEW ARRIVALS</h5>
        <h3>ECOMMERCE PRODUCTS</h3>
      </div>
      <Catogry FilterProdacts={FilterProdacts} />
      <SingleProduct filter={filter} />
    </div>
  )
}

export default Products