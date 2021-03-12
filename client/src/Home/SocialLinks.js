import React from 'react'
import {Link} from 'react-router-dom'
import Ig from '../img/ig.png'
import Wa from '../img/wa.png'
import Snap from '../img/snap.png'
import Fb from '../img/fb.png'
import {} from '@material-ui/core'


function SocialLinks() {
    return (
        <>
            <hr/>
            <div className="social-div" >
                <h3>Developed by  <code>Harsh Raj</code></h3>
                <div className="social-icons">
                    <a href="https://www.instagram.com/harshuuu_18/?hl=en" target="_blank" ><img src={Ig} alt=""/></a>
                    <a href="https://www.snapchat.com/add/harshuuu_1" target="_blank" ><img src={Snap} alt=""/></a>
                    <a href="https://wa.link/9r0oui" target="_blank" ><img src={Wa} alt=""/></a>
                    <a href="https://www.facebook.com/Harshuuu18" target="_blank" ><img src={Fb} alt=""/></a>
                </div>
            </div>
        </>
    )
}

export default SocialLinks
