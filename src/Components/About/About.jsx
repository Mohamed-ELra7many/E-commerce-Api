import React from 'react'
import "./about.scss"
import image from "./About-img.jpg"

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='head'>
                    <h2>About <span>ECOMMERCE</span></h2>
                </div>
                <div className='about-content'>
                    <div className='left-content'>
                        <h5>Looking for the best products?</h5>
                        <ul>
                            <li>
                                <span>Lorem ipsum dolor sit amet</span>
                            </li>
                            <li>
                                <span>Consectetur an adipisicing elit</span>
                            </li>
                            <li>
                                <span>It aquecorporis nulla aspernatur</span>
                            </li>
                            <li>
                                <span>Corporis, omnis doloremque</span>
                            </li>
                            <li>
                                <span>Non cum id reprehenderit</span>
                            </li>
                        </ul>
                    </div>
                    <div className='right-content'>
                        <div>
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About