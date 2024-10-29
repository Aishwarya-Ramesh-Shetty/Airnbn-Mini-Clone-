import React from "react"
import "../App.css"
import Grid from "../img/grid.webp"


function Hero(){
    return(
        <section>
            <img src={Grid} alt="photo grid" className="photogrid"/>
            <h1 className="heading"> 
                Online Experiences
            </h1>
            <p className="text">
                Discover unique online experiences with Airbnb! Connect with local hosts for virtual activities like cooking classes, guided tours, and cultural workshops.
            </p>
            <p > 
                Explore the world from home and create unforgettable memories, all with just a click!   
            </p>

        </section>
    )
}

export default Hero;