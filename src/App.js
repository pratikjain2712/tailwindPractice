import React from "react";
import { Fragment } from "react";
import Features from "./components/Features";
// import logo from "./logo.png";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Status from "./components/Status";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Status />
      <Pricing />
      <FAQ />
    </Fragment>
  );
}

export default App;
