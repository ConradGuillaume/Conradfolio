import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import node from "../img/node.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import mango from "../img/mango.png";
import sass from "../img/sass.png";
import pipe from "../img/pipe.png";
import poste from "../img/poste.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import CV from "./CV";
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
  const [PipeAnim, SetPipeAnim] = useState(false);
  const [CompAnim, SetCompAnim] = useState(false);
  const [recommand, SetRecommand] = useState(false);
  const [remote, SetRemote] = useState(false);
  const [Cv, SetCv] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "50% 0px 0px 0px" });

  console.log("in view", isInView);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (isInView === true) {
          SetPipeAnim(true);
          SetCompAnim(true);
        }
      },
      [isInView]
    );
  });
  return (
    <div
      name="competence"
      ref={ref}
      id="competence"
      className="competence-container"
    >
      <aside className="recomand-2">
        <h4
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
        </h4>
      </aside>
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
      <aside className="recomand">
        <h4
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
        </h4>
      </aside>
      <aside className="recomand-1">
        <h4
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
        </h4>
      </aside>
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
                Mentor en développement web en tant qu’auto-entrepreneur auprès
                de la société OpenClassrooms, recommande Monsieur Guillaume
                Conrad en tant que développeur web junior. <br /> <br />{" "}
                Guillaume a su s’adapter rapidement à la formation et aux
                projets professionnalisants qu’il devait mener à bien, avec une
                rare autonomie et une capacité d’apprentissage particulièrement
                aisé. Guillaume a été confronté aux différentes problématiques
                que peuvent rencontrer les développeurs web au quotidien:
                adapter des maquettes, répondre aux standards du web en terme
                d’accessibilité et de référencement, consommer et construire une
                API (NodesJS avec Express), gérer une base de données (MongoDB),
                créer un front dynamique basé sur une architecture composants
                (React). <br /> <br /> Curieux, responsable, particulièrement
                impliqué et doté d’un esprit critique, Guillaume aime les
                challenges et s’investir dans de nouveaux projets.Je suis
                persuadé qu’il saura relever avec succès les différentes
                missions que vous lui partagerez. <br /> <br /> Pour toutes ces
                raisons, je vous recommande vivement la candidature de Guillaume
                Conrad. <br /> <br /> Veuillez agréer, Madame, Monsieur,
                l’expression de nos respectueuses salutations. <br /> <br />
                Thomas Barriac
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="title">
        <h1>MES COMPÉTENCES</h1>
      </div>
      {CompAnim && (
        <div className="dev-web">
          <section className="section-dev">
            <img className="pipe" src={pipe} alt="PIPE" />
            <h2>Compétences en développement</h2>
            {PipeAnim && (
              <ul>
                <li>
                  <img className="img1" src={html} alt="HTML" />
                  <h3>HTML5</h3>
                </li>
                <li>
                  <img className="img2" src={css} alt="CSS" />
                  <h3>CSS</h3>
                </li>
                <li>
                  <img className="img3" src={sass} alt="SASS" />
                  <h3>SASS</h3>
                </li>
                <li>
                  <img className="img4" src={js} alt="JS" />
                  <h3>JavaScript</h3>
                </li>
                <li>
                  <img className="img5" src={react} alt="REACT" />
                  <h3>React</h3>
                </li>
                <li>
                  <img className="img6" src={redux} alt="REDUX" />
                  <h3>Redux</h3>
                </li>
                <li>
                  <img className="img7" src={node} alt="NODE" />
                  <h3>Node.Js</h3>
                </li>
                <li>
                  <img className="img8" src={mango} alt="MANGO" />
                  <h3>MangoDb</h3>
                </li>
              </ul>
            )}
          </section>
        </div>
      )}
      {CompAnim && (
        <div className="dev-web-comp">
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
                  Logos,plaquettes publicitaires, cartes de visite, newsletters
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
        </div>
      )}
    </div>
  );
};

export default Competence;
