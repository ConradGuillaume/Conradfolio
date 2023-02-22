import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import node from "../img/node.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import mango from "../img/mango.png";
import sass from "../img/sass.png";
import Ts from "../img/Ts.png";
import Wp from "../img/wordpress.png";
import poste from "../img/poste.jpg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CV from "./CV";

const appear = {
  hidden: { width: 0 },
  visible: { transition: { delay: 1.2, duration: 0.5 }, width: 150 },
};
const title = {
  hidden: { opacity: 0 },
  visible: { transition: { delay: 1.2, duration: 0.5 }, opacity: 1 },
};

const openAside = {
  hidden: { y: "-50vh" },
  visible: { y: 0, transition: { duration: 1.2, type: "spring" } },
  exit: {
    y: "50vh",
    opacity: 0,
    transition: { duration: 1.2, type: "spring" },
  },
};

const Competence = () => {
  const [recommand, SetRecommand] = useState(false);
  const [remote, SetRemote] = useState(false);
  const [Cv, SetCv] = useState(false);

  return (
    <div name="competence" id="competence" className="competence-container">
      <div className="containlAll">
        <div className="btn_contain">
          <motion.aside
            className="recomand-2"
            variants={appear}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h4
              variants={title}
              initial="hidden"
              whileInView="visible"
              onClick={() => {
                if (recommand || Cv) {
                  SetRemote(true);
                  SetCv(false);
                  SetRecommand(false);
                } else if (remote) {
                  SetRemote(false);
                }
                if (remote === false) {
                  SetRemote(true);
                }
              }}
            >
              Remote
            </motion.h4>
          </motion.aside>
          <AnimatePresence>
            {remote && (
              <div className="open-recommand">
                <motion.img
                  className="pc"
                  variants={openAside}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    y: "50vh",
                    opacity: 0,
                    transition: { duration: 0.5, type: "spring" },
                  }}
                  src={poste}
                  alt="Remote"
                />
              </div>
            )}
          </AnimatePresence>
          <motion.aside
            className="recomand"
            variants={appear}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h4
              variants={title}
              initial="hidden"
              whileInView="visible"
              onClick={() => {
                if (remote || Cv) {
                  SetRecommand(true);
                  SetCv(false);
                  SetRemote(false);
                } else if (recommand) {
                  SetRecommand(false);
                }
                if (recommand === false) {
                  SetRecommand(true);
                }
              }}
            >
              Recommandation
            </motion.h4>
          </motion.aside>
          <motion.aside
            className="recomand-1"
            variants={appear}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h4
              variants={title}
              initial="hidden"
              whileInView="visible"
              onClick={() => {
                if (recommand || remote) {
                  SetCv(true);
                  SetRecommand(false);
                  SetRemote(false);
                } else if (Cv) {
                  SetCv(false);
                }
                if (Cv === false) {
                  SetCv(true);
                }
              }}
            >
              Curiculum Vitae
            </motion.h4>
          </motion.aside>
        </div>
        <AnimatePresence>
          {Cv && (
            <motion.div
              className="open-recommand"
              variants={openAside}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CV />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {recommand && (
            <motion.div
              variants={openAside}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="open-recommand"
            >
              <div className="recommandation">
                <h1>Recommandation </h1>
                <p>
                  Madame, Monsieur, <br /> <br /> Je soussigné Thomas Barriac,
                  développeur web PHP/Symfony au sein de la société Paytop et
                  Mentor en développement web en tant qu’auto-entrepreneur
                  auprès de la société OpenClassrooms, recommande Monsieur
                  Guillaume Conrad en tant que développeur web junior. <br />{" "}
                  <br /> Guillaume a su s’adapter rapidement à la formation et
                  aux projets professionnalisants qu’il devait mener à bien,
                  avec une rare autonomie et une capacité d’apprentissage
                  particulièrement aisé. Guillaume a été confronté aux
                  différentes problématiques que peuvent rencontrer les
                  développeurs web au quotidien: adapter des maquettes, répondre
                  aux standards du web en terme d’accessibilité et de
                  référencement, consommer et construire une API (NodesJS avec
                  Express), gérer une base de données (MongoDB), créer un front
                  dynamique basé sur une architecture composants (React). <br />{" "}
                  <br /> Curieux, responsable, particulièrement impliqué et doté
                  d’un esprit critique, Guillaume aime les challenges et
                  s’investir dans de nouveaux projets.Je suis persuadé qu’il
                  saura relever avec succès les différentes missions que vous
                  lui partagerez. <br /> <br /> Pour toutes ces raisons, je vous
                  recommande vivement la candidature de Guillaume Conrad. <br />{" "}
                  <br /> Veuillez agréer, Madame, Monsieur, l’expression de nos
                  respectueuses salutations. <br /> <br />
                  Thomas Barriac
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="title">
          <h1>MES COMPÉTENCES</h1>
          <div className="crop"></div>
        </div>
        <div className="dev-web">
          <section className="section-dev">
            <div className="slide-contain">
              <div class="slider">
                <motion.ul
                  class="slider-track"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    transition: { delay: 0.5 },
                    opacity: 1,
                  }}
                >
                  <li>
                    <img class="img1" src={html} alt="HTML" />
                  </li>
                  <li>
                    <img class="img2" src={css} alt="CSS" />
                  </li>
                  <li>
                    <img class="img3" src={sass} alt="SASS" />
                  </li>
                  <li>
                    <img class="img4" src={js} alt="JS" />
                  </li>
                  <li>
                    <img class="img5" src={react} alt="REACT" />
                  </li>
                  <li>
                    <img class="img6" src={redux} alt="REDUX" />
                  </li>
                  <li>
                    <img class="img7" src={node} alt="NODE" />
                  </li>
                  <li>
                    <img class="img8" src={mango} alt="MANGO" />
                  </li>
                  <li>
                    <img class="img9" src={Ts} alt="MANGO" />
                  </li>
                  <li>
                    <img class="img10" src={Wp} alt="MANGO" />
                  </li>
                </motion.ul>
              </div>
            </div>
          </section>
        </div>
        {window.innerWidth < 800 && (
          <div className="dev-web-comp">
            <div className="crop2"></div>
            <section className="section-dev">
              <h2>Domaine de compétences</h2>
              <ul>
                <li>
                  <h3>GESTION DE PROJETS WEB</h3>
                  <p>Site vitrine, évènementiel, e-commerce,</p>
                </li>
                <li>
                  <h3>CONCEPTION GRAPHIQUE & WEBDESIGN</h3>
                  <p>
                    Logos,plaquettes publicitaires, cartes de visite,
                    newsletters
                  </p>
                </li>
                <li>
                  <h3>INTÉGRATION HTML / CSS</h3>
                  <p> code respectueux des standards du Web</p>
                </li>
                <li>
                  <h3>DYNAMISE DES PAGES PAR JAVASCRIPT </h3>
                  <p>React / Framer Motion</p>
                </li>
                <li>
                  <h3>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</h3>
                  <p>Accessibilité et ergonomie des pages web</p>
                </li>
                <li>
                  <h3>CONCEPTION MULTI-PLATEFORMES</h3>
                  <p>Compatible tous supports, tablette & application mobile</p>
                </li>
              </ul>
            </section>
            <div className="separator"></div>
          </div>
        )}
        {window.innerWidth > 800 && (
          <motion.div
            className="dev-web-comp"
            initial={{ y: "-25%" }}
            animate={{
              transition: { duration: 1.5 },
              rotate: [-4, -2, 0],
              y: ["-25%", "0%"],
            }}
          >
            <div className="crop2"></div>
            <section className="section-dev">
              <h2>Domaine de compétences</h2>
              <ul>
                <li>
                  <h3>GESTION DE PROJETS WEB</h3>
                  <p>Site vitrine, évènementiel, e-commerce,</p>
                </li>
                <li>
                  <h3>CONCEPTION GRAPHIQUE & WEBDESIGN</h3>
                  <p>
                    Logos,plaquettes publicitaires, cartes de visite,
                    newsletters
                  </p>
                </li>
                <li>
                  <h3>INTÉGRATION HTML / CSS</h3>
                  <p> code respectueux des standards du Web</p>
                </li>
                <li>
                  <h3>DYNAMISE DES PAGES PAR JAVASCRIPT </h3>
                  <p>React / Framer Motion</p>
                </li>
                <li>
                  <h3>VALIDATION W3C, WAI & RÉFÉRENCEMENT NATUREL SEO</h3>
                  <p>Accessibilité et ergonomie des pages web</p>
                </li>
                <li>
                  <h3>CONCEPTION MULTI-PLATEFORMES</h3>
                  <p>Compatible tous supports, tablette & application mobile</p>
                </li>
              </ul>
            </section>
            <div className="separator"></div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Competence;
