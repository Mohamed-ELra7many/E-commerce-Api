import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-content ' id='contact'>
          <div className='head'>
            <h3>Creative & Unique <span>ECOMMERCE</span> Products</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
          <ul className='social'>
            <li>
              <a href="https://www.facebook.com">
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer