import React, { useEffect } from 'react'
import image from '../../../pics/image0.png'
import Header from '../../commons/Header/Header'
import './HeaderPage.css'

function AboutPage() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            {/* <Header/> */}
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>About</h1>
                <hr />
            </div>
            <div className='about-grid'>
                <div col={12}>
                    <img
                        src={image}
                        alt='avatar'
                        className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1>Software Developer</h1>
                        <hr/>
                        <p>Python | Tensorflow | C++/C | React | Android Studio | Linux | MongoDB</p>
                        <div className='description'>
                            <p>While pursuing a Diploma’s Degree in Computer Science and Engineering from Soongsil University,<br/>
                                I have developed skills in computer science, data analytics, along with networking and business intelligence.
                                <br/>With my skill set and competencies, I am able to drive several business transformations,<br/> 
                                work process digitization and data analytics systems. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginLeft:'8%'}}>
                
            </div>
        </div>
    )
}

export default AboutPage