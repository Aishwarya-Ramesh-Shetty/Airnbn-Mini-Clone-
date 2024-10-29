import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js"
import "./App.css"




function App(){

  const cards=data.map(items =>{
    return(
      
        <Card
        img={items.img}
        rating={items.stats.rating}
        ratingcount={items.stats.review}
        location={items.location}
        lec={items.title}
        cost={items.price}
        openSpots={items.openSpots}
      />

      
      

    )
  })



  return(
    <div>
      <Navbar/>
      <Hero/>
      <section className="cardlist">
        {cards}
      </section>
      
      
      

    </div>
  )
}

export default App;