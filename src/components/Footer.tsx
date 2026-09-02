import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="/" className="footer-logo-link" aria-label="HEAT Home">
            <img src="/logo-white.svg" alt="HEAT" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">
            High performance fitness & wellness. Entraînement haute intensité, coaching d'élite et récupération de pointe.
          </p>
        </div>

        <div className="footer-nav-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#clubs">Clubs</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#personal-training">Personal Training</a></li>
              <li><a href="#pilates">Pilates</a></li>
              <li><a href="#spa">Spa & Recovery</a></li>
            </ul>
          </div>

          <div className="footer-col footer-col-map">
            <h4 className="footer-col-title">LOCALISATION</h4>
            <div className="footer-gps-block">
              <div className="footer-map-container">
                <iframe
                  title="Carte HEAT Libreville - Ocean Center"
                  src="https://maps.google.com/maps?q=0.440452,9.417881&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="footer-map-iframe"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="footer-gps-details">
                <p className="footer-gps-address">
                  Avant l'échangeur du lycée d'état,<br />
                  Galerie Ocean Center, Libreville, Gabon
                </p>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-links">
              <li><a href="mailto:contact@heat-fitness.com">contact@heat-fitness.com</a></li>
              <li><a href="tel:+24100000000">+241 (0) 00 00 00 00</a></li>
              <li><span className="footer-info">Lun - Sam : 06h00 - 22h00</span></li>
              <li><span className="footer-info">Dimanche : 08h00 - 20h00</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} HEAT FITNESS. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-legal">
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#terms">TERMS OF SERVICE</a>
          <a href="#cookies">COOKIES</a>
        </div>
      </div>
    </footer>
  );
};
