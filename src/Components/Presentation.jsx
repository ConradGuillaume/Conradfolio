import React from "react";
import { useState } from "react";
import profil from "../img/moi.png";
import { motion, AnimatePresence } from "framer-motion";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import mail from "../img/email.png";
import telephone from "../img/telephone.png";
import build from "../img/build.png";
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

const welcomeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  visible0: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.8 },
  },
  visible1: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.5 },
  },
  visible2: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.3 },
  },
  visible3: {
    opacity: 1,
    transition: { duration: 1.5 },
  },
  visible4: {
    opacity: 1,
    transition: { duration: 1.5, delay: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const imgVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 1, yoyo: Infinity },
  },
};

const Presentation = () => {
  const [WelcomeMessage, SetWelcomeMessage] = useState(false);
  const [builder, SetBuilder] = useState(false);
  return (
    <div className="presentation-container">
      <BurgerNav />
      <article>
        <AnimatePresence>
          {WelcomeMessage && (
            <motion.div
              variants={welcomeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="me"
            >
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible4"
                className="main-bubble"
              >
                <p>
                  Bienvenue sur mon site. Bonne lecture à vous, merci pour
                  l'attention porté à mon égard, et à très bientôt je l'espère{" "}
                </p>
              </motion.div>
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible0"
                className="bublle"
              ></motion.div>
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible1"
                exit="exit"
                className="bublle1"
              ></motion.div>
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible2"
                className="bublle2"
              ></motion.div>
              <motion.div
                variants={welcomeVariants}
                initial="hidden"
                animate="visible3"
                className="bublle3"
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.img
          initial={{ opacity: 0, y: "50vh" }}
          animate={{ transition: { duration: 1.5 }, opacity: 1, y: 0 }}
          variants={imgVariants}
          className="moi"
          whileHover="hover"
          onClick={() => {
            if (WelcomeMessage === true) {
              SetWelcomeMessage(false);
            } else {
              SetWelcomeMessage(true);
            }
          }}
          src={profil}
          alt="profil-pic"
        />
        <motion.h1
          variants={title}
          initial="hidden"
          animate="visible"
          className="name"
        >
          Guillaume Conrad
        </motion.h1>
        <motion.h1 variants={title} initial="hidden" animate="visible">
          Developpeur web front-end
        </motion.h1>
        <motion.h1 variants={title} initial="hidden" animate="visible">
          Javascript-React
        </motion.h1>
      </article>
      <motion.div
        className="media"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", mass: 1, stiffness: 50 },
        }}
      >
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
      </motion.div>
      <motion.div
        variants={imgVariants}
        animate="hover"
        className="build-on"
        onMouseLeave={() => {
          SetBuilder(false);
        }}
        whileHover={() => {
          SetBuilder(true);
        }}
      >
        <img src={build} alt="build" />
      </motion.div>
      <AnimatePresence>
        {builder && (
          <motion.h2
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
            exit={{ x: "-100vw", transition: { duration: 0.5 } }}
            className="construct"
          >
            Site en construction : présence de "lorem ipsum" possible ... bonne
            visite !
          </motion.h2>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Presentation;
