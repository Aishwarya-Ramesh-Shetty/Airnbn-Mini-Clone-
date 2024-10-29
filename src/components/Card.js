import React from "react"
import "../App.css"
import star from "../img/star.webp"



function Card(props){
    let badgeText
    if(props.openSpots=== 0){
        badgeText="SOLD OUT"
    }
    else if(props.location==="Online"){
        badgeText="ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="M S Dhoni image" className="dhoni"/>
            <div className="card--stats">
                <img src={star} alt="star image" className="starimg" />
                <span>{props.rating}</span>
                <span className="gray">({props.ratingcount}).</span>
                <span className="gray">{props.location}</span>
            </div>
            <div className="info">
                <p className="card--title">{props.lec}</p>
                <p className="card--price"><b>From ${props.cost}</b>/person</p>
            </div>
            

        </div>
    )
}


export default Card;