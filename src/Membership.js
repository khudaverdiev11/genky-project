import React, { Component } from 'react'


const MTitle = () => {
    return (
        <div className="mtitle">
            <h1>Membership</h1>
            <h2>Unlock full access to Genki and see the entire library of subscribers-only content & updates</h2>
        </div>

    )
}

const MList = (props) => {
    return (
        <div>
            <li>{props.listtext}</li>
        </div>
    )
}

const MBox = (props) => {
    return (
        <div className="col-md-4">
            <div className="box">
                <h1>{props.h1title}</h1>
                <h3>{props.h3title}</h3>
                <hr />

                <ul>
                    <MList listtext="Full access to posts for subscribers" />
                    <MList listtext="Weekly email newsletter" />
                </ul>

                <button>Sign up for {props.btntitle}</button>
            </div>
        </div>
    )
}

const MBoxDark = (props) => {
    return (
        <div className="col-md-4">
            <div className="box boxDark">
                <h1>{props.h1title} <p className="zzz">{props.h1titlelittle}</p></h1>
                <h3>{props.h3title}</h3>
                <hr />
                <ul>
                    <MList listtext="Full access to posts for subscribers" />
                    <MList listtext="Weekly email newsletter" />
                    <MList listtext="Support independent publishing" />
                    <MList listtext="Simple, secure card payment" />
                </ul>

                <button>Sign up for {props.btntitle}</button>
            </div>
        </div>
    )
}

const MBody = () => {
    return (
        <div className="mbody">
            <div className="container">
                <div className="row">
                    <MBox h1title="Free" btntitle="free" h3title="Sign up now to be notified of new content and support Genki, help keep this site independent." />
                    <MBoxDark h1title="$0" btntitle="now" h1titlelittle="/Month" h3title="Pay monthly and unlock full access. Cancel anytime." />
                    <MBoxDark h1title="$0" btntitle="now" h1titlelittle="/Year" h3title="Pay yearly and save 0%.Cancel anytime" />
                    <p>Already have an account? Sign in</p>
                </div>
            </div>
        </div>

    )
}

const MFBox = (props) => {
    return (
        <div className="col-md-6">
            <div className="fbox">
                <h2>{props.h2title}</h2>
                <p>{props.ptitle}</p>
            </div>
        </div>
    )
}

const MFoot = () => {
    return (
        <div className="mfoot">
            <div className="container">
                <div className="row">
                    <h1>Frequently asked <span>questions</span></h1>
                    <MFBox h2title="What is Genki?" ptitle="Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper. Tincidunt nisl luctus tincidunt faucibus molestie turpis tincidunt. Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper." />
                    <MFBox h2title="Give me one reason to choose Genki" ptitle="Cras eu nibh dignissim integer consectetur ullamcorper. Tincidunt nisl luctus tincidunt faucibus molestie turpis tincidunt. Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper." />
                    <MFBox h2title="How do I get paid?" ptitle="Cras eu nibh dignissim integer consectetur ullamcorper. Tincidunt nisl luctus tincidunt faucibus molestie turpis tincidunt. Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper." />
                    <MFBox h2title="Whom should I contact in case of any problems?" ptitle="Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper. Tincidunt nisl luctus tincidunt faucibus molestie turpis tincidunt. Ornare egestas lobortis cras eu nibh dignissim integer consectetur ullamcorper." />
                </div>
            </div>
        </div>

    )
}


class Membership extends Component {
    render() {
        return (
            <div className="memberShip">
                <MTitle />
                <MBody />
                <MFoot />
            </div>
        )
    }
}

export default Membership;