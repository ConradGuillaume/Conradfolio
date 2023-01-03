import React from "react";
import groupomania from "../img/groupo.png";
import groupomaniaTablet from "../img/groupo-tablet.png";
import pc from "../img/PC.png";
import groupoMobile from "../img/groupo-mobile.png";
import info from "../img/info.png";
import esthet from "../img/esthet.png";
import esthetTablet from "../img/esthet-tabletpng.png";
import esthetMobile from "../img/esthet-phone.png";
import ohmyfood from "../img/ohmyfood.png";
import ohmyfoodTablet from "../img/ohmyfood-tablet.png";
import ohmyfoodMobile from "../img/ohmyfood-mobile.png";
import panthere from "../img/panthere.png";
import panthereTablet from "../img/panthere-tablet.png";
import panthereMobile from "../img/panthere-mobile.png";
import pizza from "../img/pizzaApDesk.png";
import pizzatablet from "../img/pizzaApTablet.png";
import pizzamobile from "../img/pizzaApMobile.png";
import kanap from "../img/kanap.png";
import kanapTablet from "../img/kanap-tablet.png";
import kanapMobile from "../img/kanap-mobile.png";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const card = {
  hidden: {
    y: "100vh",
    opacity: 0,
    rotate: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  visible1: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.1 },
  },
  visible2: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
  },
  visible3: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 },
  },
  visible4: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
  },
  visible5: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
  },
};

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { marginTop: "50%" });
  const animation = useAnimation();

  const [animFolio, SetAnimFolio] = useState(false);
  const [animInfo, SetAnimInfo] = useState(false);
  const [animInfo1, SetAnimInfo1] = useState(false);
  const [animInfo2, SetAnimInfo2] = useState(false);
  const [animInfo3, SetAnimInfo3] = useState(false);
  const [animInfo4, SetAnimInfo4] = useState(false);
  const [animInfo5, SetAnimInfo5] = useState(false);
  useEffect(() => {
    if (isInView) {
      SetAnimFolio(true);
    }
  }, [isInView]);

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      {animFolio && (
        <section className="portfolio">
          <motion.article
            key="box1"
            variants={card}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => {
              SetAnimInfo(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img src={groupomania} alt="projet-1 " className="pc" />
            <img src={groupoMobile} alt="" className="mobile" />
            <img src={groupomaniaTablet} alt="" className="tablet" />
            <h1>Groupomania</h1>
            <AnimatePresence>
              {animInfo && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    href="https://www.youtube.com/watch?v=_WH9vUaiGAc"
                    target="_blank"
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2> Reseau Social d'entreprise </h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> HTML, SASS, REACT, REDUX TOOLKIT, NODE.JS, MANGODB</p>
                    </h3>
                    <p>
                      Le projet consiste à construire un réseau social interne
                      pour les employés de Groupomania. Le but de cet outil est
                      de faciliter les interactions entre collègues. Le
                      département RH de Groupomania a imaginé plusieurs
                      fonctionnalitées pour favoriser les échanges entre
                      collègues.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>

          <motion.article
            key="box2"
            variants={card}
            initial="hidden"
            animate="visible1"
            whileHover={() => {
              SetAnimInfo1(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo1(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img src={esthet} alt="projet-1 " className="pc" />
            <img src={esthetMobile} alt="" className="mobile" />
            <img src={esthetTablet} alt="" className="tablet" />
            <h1>Salon Bien-être</h1>
            <AnimatePresence>
              {animInfo1 && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    href="https://conradguillaume.github.io/esthet/"
                    target="_blank"
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2> Site web Esthétique-Bien-être </h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> HTML, SASS, REACT, FRAMER MOTION</p>
                    </h3>
                    <p>
                      Le projet consiste à construire un site web pour une
                      esthéticienne-masseuse. Le but de cet outil est de
                      faciliter les interactions entre la praticienne et ses
                      clients. La plateforme a terme contiendra différentes
                      fonctionnalitées pour favoriser la prise de rendez-vous et
                      la communication.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>

          <motion.article
            key="box3"
            variants={card}
            initial="hidden"
            animate="visible2"
            whileHover={() => {
              SetAnimInfo2(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo2(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img id="oh" src={ohmyfood} alt="projet-1 " className="pc" />
            <img src={ohmyfoodMobile} alt="" className="mobile" />
            <img src={ohmyfoodTablet} alt="" className="tablet" />
            <h1>OhMyFood</h1>
            <AnimatePresence>
              {animInfo2 && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    href="https://conradguillaume.github.io/Ohmyfood/"
                    target="_blank"
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2> Site web vitrine </h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> HTML, SASS</p>
                    </h3>
                    <p>
                      Ohmyfood! est une jeune startup qui voudrait s'imposer sur
                      le marché de la restauration. L'objectif est de développer
                      un site 100% mobile qui répertorie les menus de
                      restaurants gastronomiques.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>

          <motion.article
            key="box4"
            variants={card}
            initial="hidden"
            animate="visible3"
            whileHover={() => {
              SetAnimInfo3(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo3(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img src={kanap} alt="projet-1 " className="pc" />
            <img src={kanapMobile} alt="" className="mobile" />
            <img src={kanapTablet} alt="" className="tablet" />
            <h1>Kanap</h1>
            <AnimatePresence>
              {animInfo3 && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2> Site E-commerce </h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> JAVASCRIPT VANILLA</p>
                    </h3>
                    <p>
                      Construction de la logique d'une site de e-commerce de
                      vente de canapé, appelle API, création d'un panier
                      dynamique , formulaire , validation d'un panier, page de
                      confirmation.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>

          <motion.article
            key="box5"
            variants={card}
            initial="hidden"
            animate="visible4"
            whileHover={() => {
              SetAnimInfo4(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo4(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img id="panthere" src={panthere} alt="projet-1 " className="pc" />
            <img src={panthereMobile} alt="" className="mobile" />
            <img src={panthereTablet} alt="" className="tablet" />
            <h1>La Panthère</h1>
            <AnimatePresence>
              {animInfo4 && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    href="https://conradguillaume.github.io/LaPanthere/"
                    target="_blank"
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2>La panthere -SEO </h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> HTML, CSS</p>
                    </h3>
                    <p>
                      Travail sur l'amélioration en référencement d'un site et
                      son optimisation WCAG <br /> Analyse de l’état actuel de
                      SEO du site fourni <br />
                      Amélioration du SEO du site. <br /> Comparaison des
                      résultats.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>

          <motion.article
            key="box6"
            variants={card}
            initial="hidden"
            animate="visible5"
            whileHover={() => {
              SetAnimInfo5(true);
            }}
            onMouseLeave={() => {
              SetAnimInfo5(false);
            }}
            exit={{
              height: "0%",
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          >
            <img src={pc} alt="" className="pc-contain" />
            <img src={pizza} alt="projet-1 " className="pc" />
            <img src={pizzamobile} alt="" className="mobile" />
            <img src={pizzatablet} alt="" className="tablet" />
            <h1>PizzaAp</h1>
            <AnimatePresence>
              {animInfo5 && (
                <motion.div
                  key="box"
                  className="btn-container"
                  animate={{
                    height: "106%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  exit={{
                    height: "0%",
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                >
                  <motion.img
                    onClick={(e) => {
                      document.querySelector("div.info").className = "hi";
                    }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                    exit={{ opacity: 0 }}
                    src={info}
                    alt="info"
                  />
                  <motion.a
                    href="https://www.youtube.com/watch?v=UpJzfvfi15w"
                    target="_blank"
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.9 } }}
                  >
                    Demo
                  </motion.a>
                  <div
                    className="info"
                    onClick={() => {
                      console.log(document.querySelector(".hi"));
                      document.querySelector(".hi").className = "info";
                    }}
                  >
                    <h2>E-Commerce Pizza</h2>
                    <h3>
                      Technologies Utilisées: <br />
                      <p> ReactNative,Typescrypt,ReduxToolkit</p>
                    </h3>
                    <p>
                      développer une application mobile pour permettre à des
                      clients de commander leurs pizzas où qu'ils soient.
                      Gestions du panier dynamique en utilisant ReduxToolkit,
                      utilisation de Reactnavigation pour la navigation entre
                      les pages.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        </section>
      )}
      <div ref={ref} className="folio-trigger"></div>
    </div>
  );
};

export default Portfolio;
