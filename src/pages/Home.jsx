import React from "react";
import About from "../Components/About";
import Competence from "../Components/Competence";
import Contact from "../Components/Contact";
import Navigation from "../Components/Navigation";
import Portfolio from "../Components/Portfolio";
import Presentation from "../Components/Presentation";
import background from "../img/office-865091.jpg";
import Loader from "../Components/Loader";
const Home = () => {
  return (
    <div className="page-container">
      <img className="back" src={background} alt="back" />
      <Loader />
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
