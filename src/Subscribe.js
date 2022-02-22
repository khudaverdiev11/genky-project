import React, { Component } from 'react'

class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe">
                <div className="container">
                <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
                <h1>Subscrible to <span>new <br /> posts</span></h1>
                <p>Your name</p>
                <input type="text" />
                <p>Your email address</p>
                <input type="email" />
                
            </div></div>
        )
    }
}

export default Subscribe
