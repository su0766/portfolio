import React from 'react'
import './HeaderPage.css'

function ContactPage() {
    return (
        <div style={{width:'100%', margin:'0'}}>
            <div style={{ width: '85%', margin:'1rem auto'}}>
                <h1>Contact</h1>
                <hr />
            </div>
            <div className="social-links">
                {/* {LinkedIn} */}
                <a href="https://www.linkedin.com/in/soohee-kim-33a1a1163/" rel='noopener noreferrer' target='_blank'>
                    <i className='fa fa-linkedin-square' aria-hidden='true' /></a>
                {/* {Github} */}
                <a href="http://github.com/sooheekim96" rel='noopener noreferrer' target='_blank'>
                    <i className='fa fa-github-square' aria-hidden='true' /></a>
                {/* {Notion} */}
                <a href="https://www.notion.so/Soohee-Kim-0948d1dd2b1345308c0e827339a7ce5e" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-address-book-o" aria-hidden="true"></i></a>
                {/* {Gmail} */}
                <a href="mailto:su0766@gmail.com" rel='noopener noreferrer' target='_blank'>
                    <i className="fa fa-google" aria-hidden="true"></i></a>
            </div>
        </div>
    )
}

export default ContactPage