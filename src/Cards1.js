import React from 'react'


const Cards1 = (props) => {
    return (
        <div className="col-md-3 cardd">
            <img src={props.img} alt="" />
            <div className="content">
                <p className="feature">{props.feature}</p>
                <span className="cardcontent">{props.cardcontent}</span>
                <p className="author">{props.author}</p>
            </div>
        </div>
    )
}

export default Cards1
