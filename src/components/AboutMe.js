
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>À propos de moi</h2>
      <p>
        Je m'appelle <strong>Doniphane Trules</strong>, jeune développeur Web & Web Mobile de 24 ans, passionné par la technologie
        depuis mon plus jeune âge. Issu d’un BTS en électronique et communication, j’ai décidé de me reconvertir dans le
        développement Web, une voie dans laquelle je m’épanouis pleinement.
      </p>
      <p>
        Après avoir terminé ma formation en développement Web à l'<strong>Institut de Formation de la Réunion</strong>, je poursuis
        actuellement mes études pour devenir <strong>Concepteur Développeur d'Applications</strong>.
      </p>
      <p>
        En parallèle de mes projets web, je consacre une partie de mon temps libre à une de mes grandes passions : les
        <strong>  Capture The Flag</strong> comme celles proposées par <em>Hack The Box</em> ou <em>TryHackMe</em>. Ces
        challenges de cybersécurité me permettent d’exercer ma curiosité, de renforcer ma logique et de développer mes compétences
        en hacking éthique. J’adore comprendre les vulnérabilités, les mécanismes des failles, et repousser les limites de mes
        connaissances.
      </p>
      <div className="profile-container">
        <div className="profile-picture">
          <img src={`${process.env.PUBLIC_URL}/2.jpg`} alt="Doniphane Trules" />
        </div>
        <div className="profile-info">
          <h3>Trules Doniphane</h3>
          <p>Âge : 24 ans</p>
          <p>Ville : Plate Saint-Leu, Réunion</p>
          <p>Passion 1 : Capture The Flag (Hack The Box, TryHackMe)</p>
          <p>Passion 2 : Réparation Informatique & bidouille hardware</p>
          <p>Objectif : Allier développement et cybersécurité dans ma carrière a mon niveaux</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
