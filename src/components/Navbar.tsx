import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <a href="/" className="navbar-logo" aria-label="HEAT Home">
          <img src="/Image-1.svg" alt="HEAT" className="navbar-logo-img" />
        </a>
      </div>
      
      <div className="navbar-center">
        <a href="#clubs" className="nav-link">Clubs</a>
        <a href="#membership" className="nav-link">Membership</a>
        <a href="#classes" className="nav-link">Classes</a>
        <a href="#personal-training" className="nav-link">Personal Training</a>
        <a href="#pilates" className="nav-link">Pilates</a>
        <a href="#spa" className="nav-link">Spa</a>
        <a href="#more" className="nav-link more-link">
          More <ChevronDown size={14} className="chevron-icon" />
        </a>
      </div>
      
      <div className="navbar-right" id="nav-cta-target">
        <a href="#tarifs" className="nav-reserve-btn">
          RÉSERVER UNE SÉANCE
        </a>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#clubs" className="mobile-link" onClick={toggleMenu}>Clubs</a>
          <a href="#membership" className="mobile-link" onClick={toggleMenu}>Membership</a>
          <a href="#classes" className="mobile-link" onClick={toggleMenu}>Classes</a>
          <a href="#personal-training" className="mobile-link" onClick={toggleMenu}>Personal Training</a>
          <a href="#pilates" className="mobile-link" onClick={toggleMenu}>Pilates</a>
          <a href="#spa" className="mobile-link" onClick={toggleMenu}>Spa</a>
          <a href="#join" className="mobile-link mobile-join" onClick={toggleMenu}>JOIN TODAY</a>
          <a href="#visit" className="visit-button mobile-visit" onClick={toggleMenu}>VISIT A CLUB</a>
        </div>
      </div>
    </nav>
  );
};
