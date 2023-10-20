import React, { forwardRef } from "react";
import "../styles/layouts/celtic-cross.scss";
import "../styles/layouts/cross.scss";
import "../styles/layouts/love-oracle.scss";
import "../styles/layouts/compas.scss";
import Card from "./Card";
import MainContext from "../context/MainContext";
import { useContext, useEffect } from "react";

const Layout = forwardRef(function Layout(_, ref){
  const layoutGenerator = {
    "Celtic Cross": celticCross(),
    Cross: cross(),
    "Love Oracle": loveOracle(),
    Compas: compas(),
  };




  const { layout } = useContext(MainContext);

  function celticCross() {
    return (
      <div className="celtic-cross" ref={ref}>
        <Card className={"card layout-card celtic-cross__1"} index={0}/>
        <Card className={"card layout-card celtic-cross__2"} index={1}/>
        <Card className={"card layout-card celtic-cross__3"} index={2}/>
        <Card className={"card layout-card celtic-cross__4"} index={3}/>
        <Card className={"card layout-card celtic-cross__5"} index={4}/>
        <Card className={"card layout-card celtic-cross__6"} index={5}/>
        <Card className={"card layout-card celtic-cross__7"} index={6}/>
        <Card className={"card layout-card celtic-cross__8"} index={7}/>
        <Card className={"card layout-card celtic-cross__9"} index={8}/>
        <Card className={"card layout-card celtic-cross__10"} index={9}/>
      </div>
    );
  }

  function cross() {
    return (
      <div className="cross" ref={ref}>
        <Card className={"card layout-card layout-card cross__1"} index={0}/>
        <Card className={"card layout-card layout-card cross__2"} index={1}/>
        <Card className={"card layout-card layout-card cross__3"} index={2}/>
        <Card className={"card layout-card layout-card cross__4"} index={3}/>
      </div>
    );
  }

  function loveOracle() {
    return (
      <div className="love-oracle" ref={ref}>
        <Card className={"card layout-card love-oracle__1"} index={0}/>
        <Card className={"card layout-card love-oracle__2"} index={1}/>
        <Card className={"card layout-card love-oracle__3"} index={2}/>
        <Card className={"card layout-card love-oracle__4"} index={3}/>
      </div>
    );
  }

  function compas() {
    return (
      <div className="compas" ref={ref}>
        <Card className={"card layout-card compas__1"} index={0}/>
        <Card className={"card layout-card compas__2"} index={1}/>
        <Card className={"card layout-card compas__3"} index={2}/>
        <Card className={"card layout-card compas__4"} index={3}/>
      </div>
    );
  }

  return (
    <div className="layout">
      {layoutGenerator[layout]}
    </div>
  );
})



export default Layout;
