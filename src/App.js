import React from "react";
import { Fragment } from "react";
import Features from "./components/Features";
// import logo from "./logo.png";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
    </Fragment>
  );
}

export default App;
