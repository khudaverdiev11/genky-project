import React, { Component } from 'react';
import Author1 from './img/author1.jpg';
import Author2 from './img/author2.jpg';
import Author3 from './img/author3.jpg';
import Author4 from './img/author4.jpg';
import Author5 from './img/author5.jpg';
import Author6 from './img/author6.jpg';




class OurAuthors extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 pt-4">
                <div className="card">
                    <div className="card-head">
                        <img src={this.props.image} alt="author not found" />
                    </div>
                    <div className="card-title">
                        <h1 className="authorname">{this.props.authorname}</h1>
                        <p className="authorposts">{this.props.authorposts} posts</p>
                    </div>
                    <div className="card-text">
                        <p className="authortexts">{this.props.texts}</p>
                    </div>
                </div>
            </div>
        )
    }
}

class SeeAlsoAuthors extends Component {
    render() {
        return (
            <div>
                <div className="globalauthors">
                    <img src={this.props.image} alt="author not found" />
                </div>
                <h5 className="nameauthor pt-2">{this.props.authorname}</h5>
            </div>
        )
    }
}


class Authors extends Component {
    render() {
        return (
           <div className="authors">
                <div className="container">
                <div className="head">
                    <h1>Meet our <span>authors</span></h1>
                </div>
                <div className="row">
                    <OurAuthors image={Author1} authorname="Victoria West" authorposts="7" texts="Haec doca illi, nos admirabilia dicamus. Universa enim illorum ratione cum tota vestra confligendum puto." />
                    <OurAuthors image={Author2} authorname="Lauren Langford" authorposts="5" texts="Dum huic obsequor, vobis molestus sim. Iam id ipsum absurdum, maximum malum neglegi. Tecum optime, deinde etiam cum mediocri amico." />
                    <OurAuthors image={Author3} authorname="Megan Anderson" authorposts="4" texts="Dici enim nihil potest verius. Sed ne, dum huic obsequor, vobis molestus sim. Iam id ipsum absurdum, maximum malum neglegi. Tecum optime, deinde etiam cum mediocri amico." />
                </div>
                <div className="seealsocontainer pt-5 pb-5">
                    <div className="head" id="secondhead">
                        <h1>See also</h1>
                    </div>
                    <div className="contentt pt-4">
                        <SeeAlsoAuthors image={Author4} authorname="Charles Barrett" />
                        <SeeAlsoAuthors image={Author5} authorname="Hannah Weastell" />
                        <SeeAlsoAuthors image={Author6} authorname="Patricia Jenkins" />
                    </div>
                </div>
            </div >
           </div>
        )
    }
}

export default Authors
