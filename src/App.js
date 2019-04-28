import React, { Component } from "react";
import "./resources/styles.css";

import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/VenueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Element name="Header">
          <Header />
        </Element>

        <Element name="Featured">
          <Featured />
        </Element>

        <Element name="VenueNfo">
          <VenueNfo />
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
