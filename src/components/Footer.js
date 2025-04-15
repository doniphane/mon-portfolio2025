import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Restons en Contact</h3>
          <p>Vous avez des questions ou des propositions de collaboration ? </p>
          <p> N'hésitez pas à me contacter  :</p>
          <ul className="contact-list">
            <li>Email : <a href="mailto:trulesdoniphane974@gmail.com">trulesdoniphane974@gmail.com</a></li>
       
          </ul>
        </div>
        <div className="footer-right">
          <h3>Réseaux Sociaux</h3>
          <ul className="social-icons">
            <li><a href="https://github.com/doniphane" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/doniphane-trules-970638318/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} trulesdoniphane | Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
