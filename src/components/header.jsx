import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import '../styles/header.scss'

class Header extends React.Component{

  constructor(props){
    super(props);
    this.revealBurgerMenu = this.revealBurgerMenu.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler(){
    const header = document.querySelector('header');
    const list = document.querySelector('.header__ul');
    if(window.screen.width > 496){
      header.style.height = "4.25em";
      list.style.display = "flex";
    }else{
      header.style.height = "2em";
      list.style.display = "none";
    }
  }

  

  revealBurgerMenu(){
    const header = document.querySelector('header');
    const list = document.querySelector('.header__ul');
    const listStyles = window.getComputedStyle(list);

    if(listStyles.display === 'none'){
      list.style.display = "flex";
      header.style.height = "7.5em";
    }else{
      list.style.display = "none";
      header.style.height = "2em";
    }
  }

  render(){
    return (
      <header>
        <nav className="header__nav">
          <ul className="header__ul">
            <li className="header__li"><a href="#">Теория ТАРО</a></li>
            <li className="header__li">
              <span>Расклады: </span>
              <select className="layouts">
                <option className="layouts__option 1" value="1">Кельтский крест</option>
                <option className="layouts__option 2" value="2">Крест</option>
                <option className="layouts__option 3" value="3">Оракул любви</option>
                <option className="layouts__option 4" value="4">Компас</option>
                {/* <option className="layouts__option">Следующий шаг</option>
                <option className="layouts__option">Путь</option> */}
              </select>
            </li>
            <li className="header__li">
              <span>Язык: </span>
              <select className="language">
                <option value="Русский" className="language__option">Русский</option>
                <option value="English" selected className="language__option">English</option>
                <option value="Español" className="language__option">Español</option>
              </select>
            </li>
          </ul>
          <img onClick={this.revealBurgerMenu} className="burger-menu" src="assets/IMG/burger_menu.png" alt="burger-menu"></img>
        </nav>
      </header>
    )
  }
}

export default Header;