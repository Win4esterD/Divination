import React from 'react';
import '../styles/ritual-table.scss';
import RitualSubjects from './ritual-subjects';
import CardsGenerator from './cards-generation';

class Main extends React.Component{
  render(){
    return (
      <main>
        <section className="ritual-table">
          <RitualSubjects/>
          <CardsGenerator/>
        </section>
      </main>
    )
  }
}

export default Main;