import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import '../styles/header.scss'

class Header extends React.Component{
  render(){
    return (
      <header>
        <ul className="header__ul">
          <li className="header__li"></li>
          <li className="header__li"></li>
          <li className="header__li"></li>
        </ul>
      </header>
    )
  }
}

export default Header