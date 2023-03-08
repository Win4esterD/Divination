import React from "react";
import WaiteIMGs from "../JSON/waite-images.json";

class CardsGenerator extends React.Component{

  constructor(props){
    super(props);

    this.cardSound = new Audio('../assets/audio/card-fly.mp3');

    this.revealCard = this.revealCard.bind(this);
  }

  componentDidMount(){
    const layouts = document.querySelector('.layouts');
    layouts.addEventListener('change', () => {
      this.props.resetCounter();
      this.props.resetIds();
      const cards = document.querySelectorAll('.card');
      cards.forEach((el) => {
        el.removeAttribute('style');
      })
    });
  }


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Revealing cards
  revealCard(event){
    const card = event.target;
    const layoutCards = document.querySelectorAll('.layout-card');
    if(this.props.counter < layoutCards.length){
      this.cardSound.play();
      layoutCards[this.props.counter].style.backgroundImage = `url(${WaiteIMGs[card.id - 1].image})`;
      this.props.collectIds(card.id);
      this.props.increaseCounter();
      card.style.display = "none";
    }
    
  }

  //generates cards, where "num" is id of the card to be generated
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