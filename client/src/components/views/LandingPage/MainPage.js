import React, {useRef, useEffect, useState} from 'react'
import axios from 'axios'
import SlideSection from './Sections/SlideSection'
import Footer from '../../commons/Footer/Footer'
import Header from '../../commons/Header/Header'

function MainPage(props) {
    const onClickHander = () => {
        axios.get('/api/users/logout')
        .then(response =>{
            if(response.data.success){
                props.history.push("/login")
            } else {
                alert('Failed to logout. Plz check again')
            }
        })
    }

    return (
        <div>
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>Portfolio</h1>
                <hr />
            </div>
            <SlideSection/>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <button onClick={onClickHander}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default MainPage