import React, { Component } from 'react'

class SignUp extends Component {
    render() {
        return (
            <div className="subscribe signup">
            <div className="container">
            <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
            <h1>Get started with <br /> <span>Genki</span></h1>
            <p>Your name</p>
            <input type="text" />
            <p>Your email address</p>
            <input type="email" />
            <br/>
            <button>Continue</button>
            <p>Already have an account?<a href="">Sign In</a></p>
        </div>
        </div>
        )
    }
}

export default SignUp
