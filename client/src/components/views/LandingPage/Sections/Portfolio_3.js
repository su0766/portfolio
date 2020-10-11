import React, { useEffect } from 'react'
import image from '../../../../pics/image3_1.png'
import '../../HeaderPage/HeaderPage.css'

function Portfolio_3() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>MIT</h1>
                <hr />
            </div>
            <div className='projects-grid'>
                <div col={12}>
                    <img src={image} alt='diagram' className='diagram-img'/>
                    <div className='banner-text'>
                    <h1>‘Music’과 ‘Git’의 합성어로, 쿠버네티스 상의 도커 기반 음악 협업 플랫폼을 제공하고자 함</h1>
                        <hr/>
                        <p>
                        <h3>Dev Stack</h3>
                        <h4>Naver Cloud Platform, Kubernetes, Docker, MongoDB, Django, Node.js, React, Tensorflow</h4>
                        </p>
                        <div className='description'>
                            <h3>Description</h3>
                            <p> MSA를 위해 Kubernetes 환경구성 및 컨테이너 구축<br/>
                                open source 딥러닝을 이용하여 저장소의 곡을 분석하여 해시태그를 추천하고 장르를 분류<br/>
                                각 mp4파일을 주파수로 추출하여 여러 장의 png파일로 슬라이싱한 뒤 각 파일마다 훈련된 모델을 기준으로 장르 선정<br/>
                                인증서버, 게시판서버, 태그서버로 나뉘어 개발된 서비스이기에 도커이미지를 생성, 쿠버네티스로 관리<br/>
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

export default Portfolio_3