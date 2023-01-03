import React from "react";
import guillaume from "../img-cv/guillaume.jpg";
import html from "../img-cv/html.png";
import css from "../img-cv/css.png";
import js from "../img-cv/js.png";
import node from "../img-cv/node.png";
import react from "../img-cv/react.png";
import redux from "../img-cv/redux.png";
import mango from "../img-cv/mango.png";
import sass from "../img-cv/sass.png";
import fjt from "../img-cv/FJT.png";
import est from "../img-cv/est.jpg";
import oc from "../img-cv/OC.png";

const CV = () => {
  return (
    <div className="open-recommand">
      <div className="cv">
        <header>
          <div className="picture-container">
            <img src={guillaume} alt="" />
          </div>
          <div className="pres-container">
            <h1>Guillaume CONRAD</h1>
            <h2>Développeur D'applications Javascript React</h2>
            <article className="pres">
              <p>
                Je recherche une alternance d'une durée de 1 an, avec un rythme
                de 3 à 4 Jours en entreprise. Le contrat d'alternance est
                éligible à une prime de 6000€ par l'état.
              </p>
            </article>
            <article className="utils">
              <div className="left">
                <div className="age">
                  <h3>Âge : </h3>
                  <p>28</p>
                </div>
                <div className="langage">
                  <h3>Langues : </h3>
                  <p>Français/Anglais</p>
                </div>
                <div className="city">
                  <h3>Ville : </h3>
                  <p>Sarreguemines</p>
                </div>
              </div>

              <div className="right">
                <div className="licence">
                  <h3>Permis : </h3>
                  <p>B + Véhicule</p>
                </div>
                <div className="phone">
                  <h3>Portable : </h3>
                  <p> 06.02.41.39.65</p>
                </div>
                <div className="mail">
                  <h3>E-mail : </h3>
                  <p>conrad.guillaume01@gmail.com</p>
                </div>
              </div>
            </article>
          </div>
        </header>
        <div className="formation-container">
          <h2>Formations</h2>
          <article className="container">
            <div className="formation">
              <div className="date">2009-2013</div>
              <div className="what">
                <p className="lvl">BAC-PRO</p>
                <p className="spec">Hôtellerie</p>
                <p className="where">Lycée Simon Lazard</p>
                <p className="city"> Sarreguemines</p>
              </div>
            </div>
            <div className="formation">
              <div className="date">2013-2015</div>
              <div className="what">
                <p className="lvl">BTS</p>
                <p className="spec">Hôtellerie-restauration</p>
                <p className="where">CFA Raymond Mondon</p>
                <p className="city">Metz</p>
              </div>
            </div>
            <div className="formation">
              <div className="date">2022</div>
              <div className="what">
                <p className="lvl"> Formation</p>
                <p className="spec">Développeur Web</p>
                <p className="where">Openclassrooms</p>
                <p className="city"> Paris</p>
              </div>
            </div>
          </article>
        </div>
        <main>
          <h2>Expériences professionnelles</h2>
          <div className="exp-container">
            <article className="exp">
              <div className="logo">
                <img src={oc} alt="logo" />
              </div>
              <h1>Développeur Web</h1>
              <h4 className="poste"> Openclassrooms Paris </h4>
              <p className="date">2022</p>
              <div className="status">
                <h4 className="city">Puttelange-aux-lacs |</h4>
                <p>8mois</p>
              </div>
            </article>
            <article className="exp">
              <div className="logo">
                <img src={est} alt="logo" />
              </div>
              <h1>Cuisinier</h1>
              <h4 className="poste">Région Grand Est </h4>
              <p className="date">2017-2021</p>
              <div className="status">
                <h4 className="city">Grand-Est |</h4>
                <p>4ans</p>
              </div>
            </article>
            <article className="exp">
              <div className="logo">
                <img src={fjt} alt="logo" />
              </div>
              <h1>Cuisinier</h1>
              <h4 className="poste">
                Foyer Du Jeune Travailleur Pilâtre De Rozier
              </h4>
              <p className="date">2013-2017</p>
              <div className="status">
                <h4 className="city">Metz |</h4>
                <p> 4ans</p>
              </div>
            </article>
          </div>
        </main>
        <div className="acquis">
          <h2>@</h2>
          <div className="logo-container">
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={sass} alt="SASS" />
            <img src={js} alt="JS" />
            <img src={react} alt="REACT" />
            <img src={redux} alt="REDUX" />
            <img src={node} alt="NODEJS" />
            <img src={mango} alt="MONGO DB" />
          </div>
        </div>
        <footer>
          <div className="soft-skill">
            <div className="skill">
              <h3 className="title">Qualités</h3>
              <ul>
                <li>Travailleur</li>
                <li>Rigoureux</li>
                <li>Esprit d'équipe</li>
              </ul>
            </div>
          </div>
          <div className="soft-skill">
            <div className="skill">
              <h3 className="title">Soft-skills</h3>
              <ul>
                <li>La capacité d'adaptation</li>
                <li>La créativité</li>
                <li>La flexibilité</li>
              </ul>
            </div>
          </div>
          <div className="soft-skill">
            <div className="skill">
              <h3 className="title">Passions</h3>
              <ul>
                <li>Technologie</li>
                <li>Cuisine</li>
                <li>Football</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CV;
