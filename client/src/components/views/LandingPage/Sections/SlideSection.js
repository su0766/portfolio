import React, {useState} from 'react'
import './SlideSection.scss'
import ImgComp from '../../../commons/ImgComponent/ImgComponent'
import i1 from '../../../../pics/image1.png'
import i2 from '../../../../pics/image2.png'
import i3 from '../../../../pics/image3.png'
import i4 from '../../../../pics/image4.png'
// import i5 from '../../../../../public/image5.png'

function SlideSection(props) {

    let SlideArray = [
        <ImgComp src={i1}/>, 
        <ImgComp src={i2}/>, 
        <ImgComp src={i3}/>, 
        <ImgComp src={i4}/>
    ]
    const [x, setX] = useState(0)
    const onClickLeft=() => {
        x === 0 ? setX(-100 * (SlideArray.length - 1)) : setX(x + 100)
    }
    const onClickRight=() => {
        x === -100 * (SlideArray.length - 1) ? setX(0): setX(x - 100)
    }

    return (
        <div className='slider'>
            {SlideArray.map((item, index) => {
                return (
                    <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={onClickLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight" onClick={onClickRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default SlideSection