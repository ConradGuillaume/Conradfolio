import React from "react";
import About from "../Components/About";
import Competence from "../Components/Competence";
import Contact from "../Components/Contact";
import Navigation from "../Components/Navigation";
import Portfolio from "../Components/Portfolio";
import Presentation from "../Components/Presentation";
import background from "../img/motif.svg";

const Home = () => {
  return (
    <div className="page-container">
      <img className="back" src={background} alt="back" />
      <Navigation />
      <Presentation />
      <Competence />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
