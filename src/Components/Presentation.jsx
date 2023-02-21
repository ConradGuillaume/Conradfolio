import React from "react";
import profil from "../img/moi.jpeg";
import { motion} from "framer-motion";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import mail from "../img/email.png";
import telephone from "../img/telephone.png";
import BurgerNav from "./BurgerNav";

const title = {
  hidden: {
    y: "50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5 },
  },
};

const imgVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 1, yoyo: Infinity },
  },
};

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
          <motion.img
            initial={{ opacity: 0, y: "50vh" }}
            animate={{ transition: { duration: 1.5 }, opacity: 1, y: 0 }}
            variants={imgVariants}
            className="moi"
            whileHover="hover"
            src={profil}
            alt="profil-pic"
          />
        </div>
        <article>
          <motion.h2
            variants={title}
            initial="hidden"
            animate="visible"
            className="name"
          >
            Guillaume Conrad
          </motion.h2>
          <motion.h1 variants={title} initial="hidden" animate="visible">
            Développeur
          </motion.h1>
          <motion.h1 variants={title} initial="hidden" animate="visible">
            React-Wordpress
          </motion.h1>
        </article>
      </div>
    </div>
  );
};

export default Presentation;
