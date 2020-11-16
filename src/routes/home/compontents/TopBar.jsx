import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TopBar.scss'

// BEM
// Block   块 最外面的块块的名字 wrap

//Element 元件  块块的名字加上__这个元素的名字 wrap__scan

//Modifier 编辑  块块的名字__ 这个元素的名字 -- 这个属性的样式名字  wrap__scan--blue

//BEM是一种命名方式

const TopBar = ({ city ,showCityLayer}) => {
    return (
        <div className="topBar">
            <div className="topBar__city" onClick={showCityLayer} >{city}</div>
            <div className="topBar__search"></div>
            <div className="topBar__scan"></div>
        </div>
    )
}
TopBar.propTypes = {
    city: PropTypes.string.isRequired,
    showCityLayer: PropTypes.func.isRequired
}

export default TopBar;



