import React from 'react';

// npm安裝的react的slider的插件
import Slider from 'react-slick';
import PropTypes from 'prop-types'
import './slide.scss';
const PosterSlide = ({data}) =>{
    const settings = {
        dots: true,
        autoplay: true,
        className: 'posterSlide',
        dotsClass: 'posterSlide__dots'
      };
    return (
        <Slider {...settings}>

            {/* data.map */}
            <div> <img className="posterSlide__image" src="/source/slide/slide1.jpeg" alt=""/></div>
            <div><img className="posterSlide__image" src="/source/slide/slide2.jpeg" alt=""/></div>
            <div><img className="posterSlide__image" src="/source/slide/slide3.jpeg" alt=""/></div>
            <div><img className="posterSlide__image" src="/source/slide/slide4.jpeg" alt=""/></div>
            <div><img className="posterSlide__image" src="/source/slide/slide5.jpeg" alt=""/></div>
        </Slider>
    )

    // 數據應該是由父級傳過來的
    Slider.propTypes = {
        data: PropTypes.array.isRequired
    }
}

export default PosterSlide; 