import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import './home.scss'
import './index.scss'
import TopBar from './compontents/TopBar'
import Slide from './compontents/slide'

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }



    showCityLayer = () => {
        console.log(888);
    }

    render() {
        return (
            <div className="wrapper">
                <TopBar city="杭州" showCityLayer={this.showCityLayer} />
                <div className="wrapper__slide">
                   <div className="wrapper__slideWrap">
                    <Slide data={[]}></Slide>
                   </div>
                </div>

            </div>
        )
    }
}
