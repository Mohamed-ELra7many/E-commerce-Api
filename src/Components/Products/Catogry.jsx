import React from 'react'

const Catogry = ({ FilterProdacts }) => {

  return (
    <div className='catogry'>
      <div className='container'>
        <div className='filters'>
          <ul>
            <li onClick={() => FilterProdacts("All")}>ALL PRODUCTS</li>
            <li onClick={() => FilterProdacts("men's clothing")}>MEN 'S CLOTHING</li>
            <li onClick={() => FilterProdacts("women's clothing")}>WOMEN 'S CLOTHING</li>
            <li onClick={() => FilterProdacts("jewelery")}>JEWELERY</li>
            <li onClick={() => FilterProdacts("electronics")}>ELECTRONICS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Catogry
