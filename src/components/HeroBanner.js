

import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="falling-elements">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="falling-element"></div>
        ))}
      </div>
      <div className="hero-content">
        <h1>Bonjour, je suis Trules Doniphane</h1>
        <h2>Développeur Web & Web Mobile — 24 ans</h2>
        <p>
          Passionné par l’univers du développement et des technologies, je conçois aujourd’hui des solutions web modernes et dynamiques.
          Actuellement en formation pour devenir <strong>Concepteur Développeur d’Applications</strong>, je continue d’élever mes compétences à un niveau supérieur.
        </p>
        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} className="cta-button" download="Trules_Doniphane_CV.pdf">Télécharger mon CV</a>
      </div>
    </div>
  );
};

export default HeroBanner;

