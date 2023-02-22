import React from "react";
import profil from "../img/moi.jpeg";
import { motion } from "framer-motion";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import mail from "../img/email.png";
import telephone from "../img/telephone.png";
import BurgerNav from "./BurgerNav";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <BurgerNav />
      <div className="media">
        <a
          href="https://www.linkedin.com/in/guillaume-conrad-98993519a/"
          target="blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://github.com/ConradGuillaume?tab=repositories"
          target="blank"
        >
          <img src={github} alt="github" />
        </a>
        <a href="mailto:conrad.guillaume01@gmail.com">
          <img src={mail} alt="mail" />
        </a>
        <a href="tel:0602413965">
          <img src={telephone} alt="telephone" />
        </a>
      </div>
      <div className="containAll">
        <div className="imgcontain">
          {" "}
          <img
            className="moi"
            whileHover="hover"
            src={profil}
            alt="profil-pic"
          />
        </div>
        <article>
          <h2 className="name">Guillaume Conrad</h2>
          <h1>Développeur</h1>
          <h1>React-Wordpress</h1>
        </article>
      </div>
    </div>
  );
};

export default Presentation;
