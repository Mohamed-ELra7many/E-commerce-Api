import React from 'react'
import About from '../About/About'
import HomeProducts from '../Products/HomeProducts'
import Slider from './Slide/Slider'

const Home = () => {
  return (
    <>
      <Slider />
      <HomeProducts />
      <About />
    </>
  )
}

export default Home