import React from 'react';
import '../styles/layouts/celtic-cross.scss';
import "../styles/layouts/cross.scss";
import "../styles/layouts/love-oracle.scss";
import "../styles/layouts/compas.scss";

class Layout extends React.Component{

  constructor(props){
    super(props);
    this.layoutFunctions = {
      'Celtic Cross': this.celticCross(),
      'Cross': this.cross(),
      'Love Oracle': this.loveOracle(),
      'Compas': this.compas(),
    }

    this.state = {
      layout: this.layoutFunctions[localStorage.getItem('layout')? localStorage.getItem('layout'): 'Celtic Cross'],
    }
  }

  componentDidMount(){
    const layoutOption = document.querySelector('.layouts');
    layoutOption.addEventListener('change', () => {
      if(layoutOption.value === layoutOption[0].value){
        this.setState({layout: this.celticCross()});
        this.props.getLayout('Celtic Cross');
        localStorage.setItem('layoutNumber', 0)
        localStorage.setItem('layout', 'Celtic Cross')
      }else if(layoutOption.value === layoutOption[1].value){
        this.setState({layout: this.cross()});
        this.props.getLayout('Cross');
        localStorage.setItem('layoutNumber', 1);
        localStorage.setItem('layout', 'Cross');
      }else if(layoutOption.value === layoutOption[2].value){
        this.setState({layout: this.loveOracle()});
        this.props.getLayout('Love Oracle');
        localStorage.setItem('layoutNumber', 2);
        localStorage.setItem('layout', 'Love Oracle');
      }else if(layoutOption.value === layoutOption[3].value){
        this.setState({layout: this.compas()});
        this.props.getLayout('Compas');
        localStorage.setItem('layoutNumber', 3);
        localStorage.setItem('layout', 'Compas');
      }
    })
  }
  
  celticCross(){
    return (
      <div className="celtic-cross">
        <div className="card layout-card celtic-cross__1"></div>
        <div className="card layout-card celtic-cross__2"></div>
        <div className="card layout-card celtic-cross__3"></div>
        <div className="card layout-card celtic-cross__4"></div>
        <div className="card layout-card celtic-cross__5"></div>
        <div className="card layout-card celtic-cross__6"></div>
        <div className="card layout-card celtic-cross__7"></div>
        <div className="card layout-card celtic-cross__8"></div>
        <div className="card layout-card celtic-cross__9"></div>
        <div className="card layout-card celtic-cross__10"></div>
      </div>
    )
  }


  cross(){
    return (
      <div className="cross">
        <div className="card layout-card layout-card cross__1"></div>
        <div className="card layout-card layout-card cross__2"></div>
        <div className="card layout-card layout-card cross__3"></div>
        <div className="card layout-card layout-card cross__4"></div>
      </div>
    )
  }


  loveOracle(){
    return (
      <div className="love-oracle">
        <div className="card layout-card love-oracle__1"></div>
        <div className="card layout-card love-oracle__2"></div>
        <div className="card layout-card love-oracle__3"></div>
        <div className="card layout-card love-oracle__4"></div>
      </div>
    )
  }
  
  compas(){
    return (
      <div className="compas">
        <div className="card layout-card compas__1"></div>
        <div className="card layout-card compas__2"></div>
        <div className="card layout-card compas__3"></div>
        <div className="card layout-card compas__4"></div>
      </div>
    )
  }

  render(){
    return (
      <div className="layout">
        {this.state.layout}
      </div>
    )
  }
}

export default Layout;