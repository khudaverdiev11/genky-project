import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="subscribe">
            <div className="container">
            <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
            <h1>Contact Us</h1>
            <p>Your name</p>
            <input type="text" />
            <p>Your email address</p>
            <input type="email" />
            <p>Your Message</p>
            <textarea name="" id="" cols="30" rows="5"></textarea> <br />
            <button>Send message</button>
        </div>
        </div>
        )
    }
}

export default Contact
