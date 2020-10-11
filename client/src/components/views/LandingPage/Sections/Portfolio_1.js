import React, { useEffect } from 'react'
import image from '../../../pics/image1_1.png'
import Header from '../../commons/Header/Header'
import './HeaderPage.css'

function Portfolio_1() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>OorStory</h1>
                <hr />
            </div>
            <div className='projects-grid'>
                <div col={12}>
                    <img
                        src={image}
                        alt='diagram'
                        className='diagram-img'
                    />
                    <div className='banner-text'>
                        <h1>자전거로 하는 AR 스토리 게임</h1>
                        <hr/>
                        <p>
                            <h3>Dev Stack</h3>
                            <h4>Android Studio, SQLite, Github, Notion</h4>
                        </p>
                        <div className='description'>
                            <h3>Description</h3>
                            <p> Google Map API를 이용하여 현 위치 기반 스토리 리스트가 띄워지는 Main 화면 구현<br/>
                                카테고리 선택을 위한 화면 구현<br/>
                                각 액티비티에 필요한 DB 테이블 설계 및 구현<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft:'8%'}}>
            </div>
        </div>
    )
}

export default Portfolio_1