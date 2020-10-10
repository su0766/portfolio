import React from 'react'

function ImgComponent({src}){
    let imgStyles={
        width:"100%",
        height: 'auto'
    }
    return (
        <div>
            <img src={src} alt='img' style={imgStyles}>
            </img>
                <h2 style={{color:'white'}}> title </h2>
                <p style={{color:'white'}}> description </p>
        </div>
    )
}

export default ImgComponent