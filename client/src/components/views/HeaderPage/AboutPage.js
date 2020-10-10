import React, { useEffect } from 'react'

function AboutPage() {
    const title = "about me"

    return (
        <div style={{width:'100%', margin:'0'}}>
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>About</h1>
                <hr />
            </div>
            <div style={{ marginLeft:'8%'}}>
                <h4>Wecome to the world!</h4>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default AboutPage