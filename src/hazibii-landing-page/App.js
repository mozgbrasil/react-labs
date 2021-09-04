//https://github.com/Hazibii/Stylish-Portfolio-Boostrap-w-React.js
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import About from "./components/about";
//import Services from "./components/services";
//import Callout from "./components/callout";
import Portfolio from "./components/portfolio";
import CallToAction from "./components/callToAction";
//import Map from "./components/map";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

// console.log('DEBUG_File', new Error().stack);

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.warn("constructor");
    this.elCanvas = null;
  }
  componentWillMount() {
    console.warn("componentWillMount");
    document.documentElement.className = "no-fouc";
  }
  componentDidMount() {
    console.warn("componentDidMount");
    window.addEventListener("load", this.handleLoad);
  }
  handleLoad() {
    //local
    console.warn("handleLoad");
    let allElements = Array.from(document.querySelectorAll(".no-fouc"));
    for (let element of allElements) {
      element.classList.remove("no-fouc");
    }
  }
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
        <About />
        {/*<Services />
        <Callout/>*/}
        <Portfolio />
        <CallToAction />
        {/*<Map />*/}
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
