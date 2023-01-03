import React from "react";
import { motion } from "framer-motion";
import Competence from "../Components/Competence";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <motion.ul
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 2.4, ease: "easeInOut" },
          }}
        >
          <li>
            <Link to="competence"> Compétences</Link>
          </li>
          <li>
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="apropos">A propos</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default Navigation;
