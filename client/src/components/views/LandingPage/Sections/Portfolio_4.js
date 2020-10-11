import React, { useEffect } from 'react'
import image from '../../../pics/image4_1.png'
import Header from '../../commons/Header/Header'
import './HeaderPage.css'

function Portfolio_4() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>Benjamin Trading</h1>
                <hr />
            </div>
            <div className='projects-grid'>
                <div col={12}>
                    <img src={image} alt='diagram' className='diagram-img'/>
                    <div className='banner-text'>
                    <h1>OPEN API를 활용한 주식 자동매매 시스템 구축</h1>
                        <hr/>
                        <p>
                        <h3>Dev Stack</h3>
                        <h4>Django, AWS, Pycharm, MySQL, Dart API, Kiwoom API, HTML/CSS</h4>
                        </p>
                        <div className='description'>
                            <h3>Description</h3>
                            <p> Kospi200, Kosdaq150 기업 10년치 일봉, 재무제표, 잠정공시 크롤링 및 모듈화<br/>
                                Momentum, DMI, RSI, Bollinger Band 등의 보조지표 및 기술지표 모듈화<br/>
                                MySQL에 저장된 데이터를 바탕으로 생성된 알파 포트폴리오 백테스팅<br/>
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

export default Portfolio_4