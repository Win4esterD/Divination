import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MainContext from "./context/MainContext";
import { useState } from "react";

const App = () => {
  const [layout, setLayout] = useState(
    localStorage.getItem("layout")
      ? localStorage.getItem("layout")
      : "Celtic Cross"
  );

  return (
    <>
      <Header setLayout={setLayout} />
      <MainContext.Provider value={layout}>
        <Main />
      </MainContext.Provider>
      <Footer />
    </>
  );
};

export default App;
