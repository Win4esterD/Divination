import React, { forwardRef } from "react";
import CardInLayout from "../CardInLayout/CardInLayout";
import MainContext from "../../context/MainContext";
import { useContext } from "react";
import "./celtic-cross.scss";
import "./cross.scss";
import './compas.scss';
import './love-oracle.scss';


const Layout = forwardRef(function Layout(_, ref) {
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
        <CardInLayout
          className={"card layout-card celtic-cross__1"}
          index={0}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__2"}
          index={1}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__3"}
          index={2}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__4"}
          index={3}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__5"}
          index={4}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__6"}
          index={5}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__7"}
          index={6}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__8"}
          index={7}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__9"}
          index={8}
        />
        <CardInLayout
          className={"card layout-card celtic-cross__10"}
          index={9}
        />
      </div>
    );
  }

  function cross() {
    return (
      <div className="cross" ref={ref}>
        <CardInLayout
          className={"card layout-card layout-card cross__1"}
          index={0}
        />
        <CardInLayout
          className={"card layout-card layout-card cross__2"}
          index={1}
        />
        <CardInLayout
          className={"card layout-card layout-card cross__3"}
          index={2}
        />
        <CardInLayout
          className={"card layout-card layout-card cross__4"}
          index={3}
        />
      </div>
    );
  }

  function loveOracle() {
    return (
      <div className="love-oracle" ref={ref}>
        <CardInLayout className={"card layout-card love-oracle__1"} index={0} />
        <CardInLayout className={"card layout-card love-oracle__2"} index={1} />
        <CardInLayout className={"card layout-card love-oracle__3"} index={2} />
        <CardInLayout className={"card layout-card love-oracle__4"} index={3} />
      </div>
    );
  }

  function compas() {
    return (
      <div className="compas" ref={ref}>
        <CardInLayout className={"card layout-card compas__1"} index={0} />
        <CardInLayout className={"card layout-card compas__2"} index={1} />
        <CardInLayout className={"card layout-card compas__3"} index={2} />
        <CardInLayout className={"card layout-card compas__4"} index={3} />
      </div>
    );
  }

  return <div className="layout">{layoutGenerator[layout]}</div>;
});

export default Layout;
