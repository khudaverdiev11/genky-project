import React from 'react'
import Cards1 from './Cards1'
import cardimg1 from './img/card1.jpg'
import cardimg1_1 from './img/card1-2.jpg'
import cardimg1_2 from './img/card1-3.jpg'
import cardimg1_3 from './img/card1-4.jpg'
import Cards2 from './Cards2'
import { PostSubscribe } from './Lifestyle'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
        <div className="main container-fluid p-0">
            <div className="cover"></div>
            <Content cntn="Thoughts, stories and ideas" 
                     cntnspan="by the Genki team"
                     secondcntn="Genki is a minimal theme for Ghost. A beautiful way to share stories with your growing audience."
                     btncntn="Become a subscriber"
            />
            <div className="cards-1 container">
                <div className="row mt-5 pt-5">
                   <Cards1 feature="Featured" cardcontent="Don't be afraid" author="Lauren Langford" img={cardimg1}/>
                   <Cards1 feature="Featured" cardcontent="You have to fight to reach your dream" author="Megan Anderson" img={cardimg1_1}/>
                   <Cards1 feature="Featured" cardcontent="Don't be afraid" author="Lauren Langford" img={cardimg1_2}/>
                   <Cards1 feature="Featured" cardcontent="Don't be afraid" author="Lauren Langford" img={cardimg1_3}/>
                </div>
            </div>
            <Cards2 />
            <div className="container missed">
                <div className="col-6 leftcont">
                    <h2>In case you <span className="fonty">missed it</span></h2>
                </div>
                <div className="col-6 arrow">
                    <Link to="/Lifestyle" className="lifestylelink"><i class="fas fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="container subs">
            <PostSubscribe/>
            </div>
        </div>
        </>
    )
}

const Content = (props) => {
    return (
        <div className="content container">
            <p className="headercontent">{props.cntn} <span>{props.cntnspan}</span></p>
            <br />
            <p className="secondcontent">{props.secondcntn}</p> <br />
            <button className="btncontent">{props.btncntn}</button>
        </div>
    )
}

export default Home
