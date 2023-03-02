import React from 'react';
import '../styles/ritual-table.scss';
import '../styles/results.scss';
import RitualSubjects from './ritual-subjects';
import CardsGenerator from './cards-generator';
import Layout from './Layout';
import Result from './Result';

class Main extends React.Component{

  state = {
    ids: [],
    counter: 0,
    layout: "Celtic Cross"
  }

  constructor(props){
    super(props);

    this.collectIds = this.collectIds.bind(this);
    this.resetIds = this.resetIds.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.getLayout = this.getLayout.bind(this);
  }

  collectIds(value){
    this.state.ids.push(value);
  }

  resetIds(){
    this.state.ids = [];
  }

  resetCounter(){
    this.setState({counter: 0});
  }

  increaseCounter(){
    this.setState({counter: this.state.counter + 1});
  }

  getLayout(value){
    this.state.layout = value;
  }

  render(){
    return (
      <main>
        <section className="ritual-table">
          <RitualSubjects/>
          <Layout getLayout={this.getLayout} layout={this.state.layout}/>
          <CardsGenerator collectIds={this.collectIds} resetIds={this.resetIds} counter={this.state.counter} increaseCounter={this.increaseCounter} resetCounter={this.resetCounter}/>
        </section>
        <section className="results">
          <Result />
        </section>
      </main>
    )
  }
}

export default Main;