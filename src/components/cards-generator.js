import React from "react";
import WaiteIMGs from "../JSON/waite-images.json";
import cardsRus from "../JSON/cards-rus.json";

class CardsGenerator extends React.Component{

  constructor(props){
    super(props);
    this.revealCard = this.revealCard.bind(this);
  }


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Testing cards
  revealCard(event){
    const pentagram = document.querySelector('.main-pentagram__img');
    event.target.style.backgroundImage = `url(${WaiteIMGs[Number(event.target.id) - 1].image})`;
    pentagram.src = WaiteIMGs[Number(event.target.id) - 1].image;
    console.log(cardsRus[Number(event.target.id) - 1].name);
  }

  //onClick function - testing cards
  generateOneCard(num){
    return (
      <div id={String(num)} key={String(num)} className="card" onClick={this.revealCard}></div>
    )
  }

  generateAllCards(){
    const result = [];
    const numCounter = [];

    while(result.length !== 78){
      let randInt = this.getRandomInt(1, 79);
      if(!numCounter.includes(randInt)){
        numCounter.push(randInt);
        result.push(this.generateOneCard(randInt))
      }
    }

    return result
  }

  render(){
    return (
      <div className="cards-wrapper">
        {this.generateAllCards().map((card) => {
          return card
        })}
      </div>
    )
  }
}

export default CardsGenerator