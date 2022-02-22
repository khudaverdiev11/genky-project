import React, { Component } from 'react';
import Tag1 from './img/tags1.jpg';
import Tag2 from './img/tags2.jpg';
import Tag3 from './img/tags3.jpg';
import Tag4 from './img/tags4.jpeg';
import Tag5 from './img/tags5.jpeg';
import Tag6 from './img/tags6.jpeg';


class SeeAlsoTags extends Component {
    render() {
        return(
            <div>
                <div className="globalauthors">
                    <img src={this.props.image} alt="tag not found" id="tagphotos"/>
                </div>
                <h5 className="nameauthor pt-2">{this.props.tagname}</h5>
            </div>
        )
    }
}

class OurTags extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 pt-4">
                <div className="card">
                    <div className="card-head">
                        <img src={this.props.image} alt="tag not found" />
                    </div>
                    <div className="card-title">
                        <h1 className="tagname">{this.props.tagname}</h1>
                        <p className="tagposts">{this.props.tagposts} posts</p>
                    </div>
                </div>
            </div>
        )
    }
}

class Tags extends Component {
    render() {
        return (
           <div className="container-fluid authors">
                <div className="container">
                <div className="head">
                    <h1>Explore our <span>tags</span></h1>
                </div>
                <div className="row">
                    <OurTags image={Tag1} tagname="Creative" tagposts="10" />
                    <OurTags image={Tag2} tagname="Art" tagposts="10" />
                    <OurTags image={Tag3} tagname="Lifestyle" tagposts="9" />
                </div>
                <div className="seealsocontainer pt-5">
                    <div className="head" id="secondhead">
                        <h1>See also</h1>
                    </div>
                    <div className="contentt pt-4">
                        <SeeAlsoTags image={Tag4} tagname="Review" />
                        <SeeAlsoTags image={Tag5} tagname="People" />
                        <SeeAlsoTags image={Tag6} tagname="Idea" />
                    </div>
                </div>
            </div >
           </div>
        )
    }
}

export default Tags
