import React from 'react'
import authorimg1 from './img/author1.jpg'
import authorimg2 from './img/author2.jpg'
import authorimg3 from './img/author3.jpg'
import authorimg4 from './img/author4.jpg'
import cardimg2_1 from './img/card2_1.jpg'
import cardimg2_2 from './img/card2_2.jpg'
import cardimg2_3 from './img/card2_3.jpeg'
import cardimg2_4 from './img/card2_4.jpg'
import cardimg2_5 from './img/card2_5.jpg'
import cardimg2_6 from './img/card2_6.jpg'
import cardimg2_7 from './img/card2_7.jpg'
import cardimg2_8 from './img/card2_8.jpeg'

const Cards2 = () => {
    return (
        <div className="container cards-2">
            <div className="row row1 rowheader mt-5 pt-3">
                <div className="col-md-8 colheader">
                    <h3>See what we've <br /> <span>written lately</span></h3>
                </div>
                <div className="col-md-4 authors">
                    <div className="row rowauthors">
                        <Author
                            id="firstauthor"
                            img={authorimg1}
                        />
                         <Author
                             id="secondauthor"
                            img={authorimg2}
                        />
                         <Author
                            id="thirdauthor"
                            img={authorimg3}
                        />
                         <Author
                             id="forthauthor"
                            img={authorimg4}
                        />
                    </div>
                </div>
            </div>
            <div className="row2 rowcard1 row r">
                <RowCard1 
                    className="col-md-8 colcard"
                    img={cardimg2_1}
                    content="I work best when my space is filled with inspiration"
                    authors="Victoria West & Lauren Langford"
                    button="Creative"
                    contentclassName="largecontent content"
                />
                <RowCard1 
                    className="col-md-4 colcard private"
                    img={cardimg2_2}
                    content="Anyone can hold the helm when the sea is calm"
                    authors="Megan Anderson & Charless Barrett"
                    button="Idea"
                    contentclassName="smallcontent content"
                />
            </div>
            <div className="row2 rowcard2 row r mt-4">
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_3}
                    content="Dance is a mirror, reflecting the culture"
                    authors="Victoria West"
                    button="Creative"
                    contentclassName="smallcontent content"
                />
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_4}
                    content="You must grow like a tree"
                    authors="Patricia Jenkins & Charles Barrett"
                    button="Creative"
                    contentclassName="smallcontent content"
                />
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_5}
                    content="Being unique is better than being perfect"
                    authors="Megan Anderson"
                    button="Idea"
                    contentclassName="smallcontent content"
                />
                
            </div>
            <div className="row3 rowcard3 row r mt-4">
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_6}
                    content="Look at life with the eyes of child"
                    authors="Megan Anderson & Hannah Weastell"
                    button="Idea"
                    contentclassName="smallcontent content"
                />
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_7}
                    content="My childhood was full of wonderful memories"
                    authors="Charless Barrett"
                    button="Lifestyle"
                    contentclassName="smallcontent content"
                />
                <RowCard1 
                    className="col-md-4 colcard"
                    img={cardimg2_8}
                    content="Bran is just a perception, and will match reality over time"
                    authors="Victoria West & Lauren Langford"
                    button="Review"
                    contentclassName="smallcontent content"
                />
                
            </div>
            <div className="container cardlast">
                <div className="row">
                <CardLast 
                    className="col-md-4 colcard private"
                    img={cardimg2_2}
                    content="Anyone can hold the helm when the sea is calm"
                    authors="Megan Anderson & Charless Barrett"
                    button="Idea"
                    contentclassName="smallcontent content"
                    lastcardclassName="col-md-3 cardcolumn"
                />
                <CardLast 
                    className="col-md-4 colcard private"
                    img={cardimg2_2}
                    content="Anyone can hold the helm when the sea is calm"
                    authors="Megan Anderson & Charless Barrett"
                    button="Idea"
                    contentclassName="smallcontent content"
                    lastcardclassName="col-md-3 cardcolumn"
                />
                <CardLast 
                    className="col-md-4 colcard private"
                    img={cardimg2_2}
                    content="Anyone can hold the helm when the sea is calm"
                    authors="Megan Anderson & Charless Barrett"
                    button="Idea"
                    contentclassName="smallcontent content"
                    lastcardclassName="col-md-3 cardcolumn"
                />
                <CardLast 
                    className="col-md-4 colcard private"
                    img={cardimg2_2}
                    content="Anyone can hold the helm when the sea is calm"
                    authors="Megan Anderson & Charless Barrett"
                    button="Idea"
                />
                </div>
            </div>
        </div>
    )
}

const Author = (props) => {
    return (
        <div className="author" id={props.id}><img src={props.img} alt="" /></div>
    )
}

const RowCard1 = (props) => {
  return(
    <div className={props.className}>
        <img src={props.img} alt="" />
        <div className={props.contentclassName}>
            <p>{props.content}</p>
            <a href="">{props.authors}</a> <br />
            <button>{props.button}</button>
        </div>
    </div>
  )
}

const CardLast = (props) => {
  return(
      <div className={props.className}>
          <img src="" alt="" />
      </div>
  )
}




export default Cards2
