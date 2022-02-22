import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ec-nav">
                <div className="container-fluid">
                <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/" class="nav-link active" >Home</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0">
                                <Link to="/Authors" class="nav-link active" >Authors</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/Tags" class="nav-link active" >Tags</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/Subscribe" class="nav-link active" >Subscribe</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/Contact"  class="nav-link active" >Contact</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/Membership"  class="nav-link active">Membership</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/Search" class="nav-link active" ><i class="fas fa-search "></i></Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0 ">
                                <Link to="/SignIn" class="nav-link active" >Sign in</Link>
                            </li>
                            <li class="nav-item me-auto ms-3  mb-lg-0">
                                <Link to="/SignUp" class="nav-link active uplink" >Sign up</Link>
                            </li>
                            
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar
