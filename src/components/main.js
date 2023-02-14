import React from 'react';
import '../styles/ritual-table.scss';
import RitualSubjects from './ritual-subjects';

class Main extends React.Component{
  render(){
    return (
      <main>
        <section className="ritual-table">
          <RitualSubjects/>
        </section>
      </main>
    )
  }
}

export default Main;