import React, { Component } from 'react'

class SignIn extends Component {
    render() {
        return (
            <div className="subscribe signin">
            <div className="container">
            <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
            <h1>Sign in to <span>Genki</span></h1>
            <p>Your email address</p>
            <input type="email" />
            <br/>
            <button>Send login link</button>
            <p>Don’t have an account yet?<a href="">Sign Up</a></p>
        </div>
        </div>
        )
    }
}

export default SignIn
