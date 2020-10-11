import React, { useEffect } from 'react'
import image from '../../../pics/image2_1.png'
import Header from '../../commons/Header/Header'
import './HeaderPage.css'

function Portfolio_2() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>SWEEG</h1>
                <hr />
            </div>
            <div className='projects-grid'>
                <div col={12}>
                    <img src={image} alt='diagram' className='diagram-img'/>
                    <div className='banner-text'>
                    <h1>기계학습 기술과 뇌파를 이용한 응급 호출 시스템 구축</h1>
                        <hr/>
                        <p>
                        <h3>Dev Stack</h3>
                        <h4>Raspberry Pi, Android Studio, MySQL, Django, Sklearn, Tensorflow</h4>
                        </p>
                        <div className='description'>
                            <h3>Description</h3>
                            <p> Python Sklearn의 Robust Scaler를 이용<br/>
                                중앙값과 IQR을 기준으로 스케일링, 뇌파의 이상치로 생기는 영향 최소화<br/>
                                총 4개의 층으로 구현된 MLP: 두 은닉층은 512개의 노드로 구성<br/>
                                분류 문제이므로 ReLU와 Softmax 함수를 사용<br/>
                                Epochs를 조절하며 오버피팅을 방지<br/>
                            </p>
                        </div>
                    </div>
                </div>
            <div style={{ marginLeft:'8%'}}>
            </div>
            </div>
        </div>
    )
}

export default Portfolio_2