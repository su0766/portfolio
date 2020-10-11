import React, {useState} from 'react'
import {Line, Bar, Pie} from 'react-chartjs-2'
import { Route, Link } from 'react-router-dom'
import Portfolio_1 from './Portfolio_1'
import Portfolio_2 from './Portfolio_2'
import Portfolio_3 from './Portfolio_3'
import Portfolio_4 from './Portfolio_4'
import image1 from '../../../../pics/image1.png'
import image2 from '../../../../pics/image2.png'
import image3 from '../../../../pics/image3.png'
import image4 from '../../../../pics/image4.png'
// import image5 from '../../../../../public/image5.png'
import './SlideSection.scss'

function SlideSection(props) {
    const [chartName, setChartName] = useState({})
    const [chartState, setChartState] = useState({})

    const [x, setX] = useState(0)
    const onClickLeft=() => {
        x === 0 ? setX(-100 * (SlideArray.length - 1)) : setX(x + 100)
    }
    const onClickRight=() => {
        x === -100 * (SlideArray.length - 1) ? setX(0): setX(x - 100)
    }
    const onClickPage=() => {
        console.log("save")
    }
    
    let imgStyles={
        width:"100%",
        height: '100%'
    }

    let SlideArray = [
        <button style={imgStyles}><img src={image1} alt='img' style={imgStyles} onClick={onClickPage}/></button>, 
        <button style={imgStyles}><img src={image2} alt='img' style={imgStyles} onClick={onClickPage}/></button>,
        <button style={imgStyles}><img src={image3} alt='img' style={imgStyles} onClick={onClickPage}/></button>, 
        <button style={imgStyles}><img src={image4} alt='img' style={imgStyles} onClick={onClickPage}/></button>
    ]

    return (
        <div className='slider'>
            <Route path="/portfolio_1" component={Portfolio_1} />
            {/* <Route path="/port2" component={About} /> */}
            {SlideArray.map((item, index) => {
                return (
                    <div key={index} className='slide' 
                     style={{transform:`translateX(${x}%)`}}>
                            
                    {/* <Link to="/portfolio_1"></Link> */}
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={onClickLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={onClickRight}>
                <i className="fas fa-chevron-right"></i>
            </button>

        </div>
    )
}

export default SlideSection