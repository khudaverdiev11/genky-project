import React, { Component } from 'react'
import LifestyleData from './LifestyleData';


const Postgrad = () => {
    return (
        <div className="postgrad">
            <h1>Lifestyle</h1>
            <p>9 <span>posts</span></p>
            <p>Quos nisi redarguimus, omnis virtus, omne decus, omnis <br /> vera laus deserenda est.</p>
        </div>
    )
}

const PBox = (props) => {
    return (
        <div className="col-md-4">
            <div className="pbox">
                <img src={props.pbox1mg} alt="" />
                <div className="ptext">
                    <h2>{props.h2text}</h2>
                    <p>{props.ptext}</p>
                    <button>{props.btntext}</button>
                </div>
            </div>
        </div>
    )
}

const PBox2 = (props) => {
    return (
        <div className="col-md-6">
            <div className="pbox">
                <img className="pbox2img" src={props.pbox1mg} alt="" />
                <div className="ptext ptext2">
                    <h2>{props.h2text}</h2>
                    <p>{props.ptext}</p>
                    <button>{props.btntext}</button>
                </div>
            </div>
        </div>
    )
}

const Posts = () => {
    return (
        <div className="posts pt-5">
            <div className="container">
                <div className="row">
                    {LifestyleData.productData.map((item, index) => {
                        if (index < 6)
                            return (
                                <PBox pbox1mg={item.img}
                                    h2text={item.h2text}
                                    ptext={item.ptext}
                                    btntext={item.btntext}
                                    item={item}
                                    key={index}
                                />
                            )
                    })}

                    {LifestyleData.productData.map((item, index) => {
                        if (index >= 6)
                            return (
                                <PBox2 pbox1mg={item.img}
                                    h2text={item.h2text}
                                    ptext={item.ptext}
                                    btntext={item.btntext}
                                    item={item}
                                    key={index}
                                />
                            )
                    })}
                </div>

                <PostLoadMore />

                <PostSubscribe />
            </div>
        </div>
    )
}

const PostLoadMore = () => {
    return (
        <div className="postloadmore" id="postloadmore" onClick={() => {
            document.getElementById("clickDiv").style.display = "block";
            document.getElementById("postloadmore").style.height = "500px";
            document.getElementById("btnpostloadmore").style.display = "none";
            
        }}>
            <button className="btnpostloadmore" id="btnpostloadmore">Load more</button>

            <div className="clickDiv" id="clickDiv">
                <div className="clickTexts">
                    <h2>Let each person exercise the art they know</h2>
                    <p>Patricia Jenkins & Lauren Langford</p>
                    <p>
                        Ego autem existimo, si honestum esse aliquid ostendero, quod sit ipsum vi sua propter seque expetendum, iacere vestra omnia. Et summatim quidem haec erant de corpore animoque dicenda,...
                    </p>
                    <div>
                        <button><i class="fas fa-lock"></i></button>
                        <button className="btn-lifestyle">Lifestyle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const PostSubscribe = () => {
    return (
        <div className="postsub row">
            <div className="col-md-8">
                <h1>Subscribe to <span>new posts</span></h1>
            </div>
            <div className="col-md-4">
                <div className="inputBlog">
                    <input type="text" placeholder="Your email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}


export class Lifestyle extends Component {
    render() {
        return (
            <div className="lifestyleMain">
                <Postgrad />
                <Posts />
            </div>
        )
    }
}

export default Lifestyle
