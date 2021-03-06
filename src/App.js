import React, { Component } from "react";
import "./sass/_main.scss";
// import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Skills from './components/Skills';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <h1 className="header-name">Aladdin Omar</h1>
        <h2 className="header-name__title">Software Developer</h2>
        </div>
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
