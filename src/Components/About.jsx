import React from "react";
import { motion } from "framer-motion";
import couteau from "../img/knife.jpg";
import code from "../img/code.jpg";
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

const About = () => {
  return (
    <div name="apropos" className="about-container">
      <section>
        <motion.h1 variants={title} initial="hidden" animate="visible">
          A propos
        </motion.h1>
        <div className="contain">
          <motion.div
            className="past"
            initial={{ opacity: 0 }}
            whileInView={{
              transition: {
                duration: 1,
              },
              opacity: 1,
            }}
          >
            <article>
              <img src={couteau} alt="knife" />
              <h3>Mon parcours </h3>
              <p>
                Originaire de moselle-est "Sarreguemines" très ancré dans ses
                traditions et sa gastronomie , j'ai naturellement développé une
                passion pour la cuisine. J'ai travaillé 8 ans dans diverses
                lieux et entreprises. De ses années de cuisine, j'ai néanmoins
                gardé quelques soft skills. <br /> Être capable de se concentrer
                pleinement sur ce qu’on lui dit et de comprendre rapidement
                chaque ordre ou conseil. <br />
                Ecouter les critiques, il s’agit de reconnaître ce qui ne va pas
                dans son propre travail en utilisant les critiques comme un
                instrument pour apprendre. <br />
                Le travail d'équipe , la somme de ses membres est plus
                importante que la qualité individuelle. Cette expérience je
                désire la mettre au profit de ma reconversion et de mon autre
                passion la technologie / l'informatique.
              </p>
            </article>
          </motion.div>
          <motion.div
            className="futur"
            initial={{ opacity: 0 }}
            whileInView={{
              transition: {
                duration: 1,
              },
              opacity: 1,
            }}
          >
            <article>
              <img src={code} alt="code" />
              <h3>Reconversion</h3>
              <p>
                Pourquoi le code ? <br /> <br />
                Depuis mon plus jeune âge, j'ai été passionné par l'informatique
                et j'ai toujours eu l'envie de développer mes connaissances en
                matière de développement web. Grâce à OpenClassrooms, j'ai eu
                l'opportunité de suivre une formation en tant que développeur
                web, ce qui m'a permis de changer de métier et de faire ce que
                j'aime vraiment. J'aimerais continuer à apprendre et à
                m'améliorer. C'est pourquoi je suis actuellement à la recherche
                d'une entreprise où je pourrais suivre une formation en
                alternance, afin de pouvoir apprendre auprès de professionnels
                expérimentés avec qui je pourrais également travailler.
              </p>
            </article>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
