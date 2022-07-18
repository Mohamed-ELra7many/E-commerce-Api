import React from 'react'
import "./Slider.scss"
import SliderHome from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideData } from './SlideData';

const Slider = () => {
    let settings = {     // settings Slider
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div className='slider'>
            <SliderHome {...settings}>
                {SlideData.map((item) => (
                    <div className='item' key={item.id}>
                        <div className='img'>
                            <img src={item.Image} alt={item.title} />
                        </div>
                        <div className='text-content'>
                            <h4>{item.title}</h4>
                            <h2>{item.head}</h2>
                        </div>
                    </div>
                ))}
            </SliderHome>
        </div>
    )
}

export default Slider