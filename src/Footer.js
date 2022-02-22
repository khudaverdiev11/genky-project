import React, { Component } from 'react'
import FooterData from './FooterData'


const FTitle = (props) => {
    return (
        <div className="col-md-2 mx-3">
            <div className="ftitle">
                <h6>{props.title}</h6>
                <ul>
                    <li>{props.li1}</li>
                    <li>{props.li2}</li>
                    <li>{props.li3}</li>
                </ul>
            </div>
        </div>
    )
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <img src="https://genki-dark.fueko.net/content/images/2021/06/genki_white.svg" alt="" />
                    <div className="row">
                        <div className="col-md-2">
                            <div className="ftitle">
                                <h6>SOCIAL</h6>
                                <ul>
                                    <li><i class="fab fa-facebook"></i> Facebook</li>
                                    <li><i class="fab fa-twitter"></i> Twitter</li>
                                    <li><i class="fab fa-youtube"></i> YouTube</li>
                                </ul>
                            </div>
                        </div>

                        {FooterData.productData.map((item, index) => {
                            return (
                                <FTitle title={item.title}
                                    li1={item.li1}
                                    li2={item.li2}
                                    li3={item.li3}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                    <p>Genki © 2021 — All Right Reserved. Published with Ghost.</p>
                </div>
            </footer>
        )
    }
}

export default Footer
