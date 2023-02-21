import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul>
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
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
