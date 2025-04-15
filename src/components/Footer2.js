
import React from 'react';
import './Footer2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h4>Restons en contact</h4>
                    <p>
                        Vous souhaitez me parler d'un projet, collaborer ou tout simplement échanger ?
                        <br />N'hésitez pas à me contacter !
                    </p>
                    <a className="email-link" href="mailto:trulesdoniphane974@gmail.com">
                        trulesdoniphane974@gmail.com
                    </a>
                </div>

                <div className="footer-right">
                    <h4>Suivez-moi</h4>
                    <ul className="social-icons">
                        <li>
                            <a href="https://github.com/doniphane" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/doniphane-trules-970638318/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Doniphane Trules - Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;
