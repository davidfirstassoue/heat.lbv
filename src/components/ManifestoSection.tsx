import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ShieldAlert, Zap, Flame, Activity } from 'lucide-react';
import './ManifestoSection.css';

gsap.registerPlugin(ScrollTrigger);

// List of distinctive font families for system glitch / typography switching
const GLITCH_FONTS = [
  "'Cormorant Garamond', serif",
  "'Anton', sans-serif",
  "'Playfair Display', serif",
  "'Space Grotesk', sans-serif",
  "'Syne', sans-serif",
  "'Courier New', monospace",
  "'Italiana', serif",
  "-apple-system, sans-serif"
];

export const ManifestoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Dynamic font index states for the glitch effect on key words
  const [glitchFontIndex1, setGlitchFontIndex1] = useState(0);
  const [glitchFontIndex2, setGlitchFontIndex2] = useState(0);
  const [glitchFontIndex3, setGlitchFontIndex3] = useState(0);
  const [glitchTextCorrupt, setGlitchTextCorrupt] = useState(false);

  // Micro system-glitch interval that switches fonts and occasionally corrupts characters
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly trigger rapid font flips
      setGlitchFontIndex1(Math.floor(Math.random() * GLITCH_FONTS.length));
      
      if (Math.random() > 0.4) {
        setGlitchFontIndex2(Math.floor(Math.random() * GLITCH_FONTS.length));
      }
      if (Math.random() > 0.5) {
        setGlitchFontIndex3(Math.floor(Math.random() * GLITCH_FONTS.length));
      }

      // Quick glitch flicker
      if (Math.random() > 0.7) {
        setGlitchTextCorrupt(true);
        setTimeout(() => setGlitchTextCorrupt(false), 120);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Streamers parallax / scroll effect
      gsap.to('.streamer-col-1', {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      gsap.to('.streamer-col-2', {
        y: 120,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      });

      gsap.to('.streamer-col-3', {
        y: -90,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        }
      });
      
      gsap.to('.marquee-track-left', {
        x: '-30%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to('.marquee-track-right', {
        x: '20%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto-section" ref={sectionRef}>
      {/* BACKGROUND MULTI-DIRECTIONAL TYPOGRAPHIC LAYERS */}
      <div className="bg-typography-matrix" aria-hidden="true">
        
        {/* Horizontal Marquee Tracks */}
        <div className="bg-marquee-row top-row">
          <div className="marquee-track marquee-track-left">
            <span>DISCIPLINE • INTENSITÉ BRUTE • DÉPASSEMENT • HIGH PERFORMANCE • HEAT GABON • </span>
            <span>DISCIPLINE • INTENSITÉ BRUTE • DÉPASSEMENT • HIGH PERFORMANCE • HEAT GABON • </span>
          </div>
        </div>

        {/* Vertical Giant Text Streamers (Columns going top to bottom) */}
        <div className="vertical-streamers-grid">
          <div className="streamer-col streamer-col-1">
            <span className="v-word">HEAT</span>
            <span className="v-word v-outline">MÉTHODE</span>
            <span className="v-word">FORCE</span>
            <span className="v-word v-outline">POWER</span>
            <span className="v-word">RÉSILIENCE</span>
            <span className="v-word v-outline">HEAT</span>
          </div>

          <div className="streamer-col streamer-col-2 center-blur-col">
            <span className="v-word v-big-red">LA MÉTHODE</span>
            <span className="v-word v-big-red">LA MÉTHODE</span>
            <span className="v-word v-big-red">LA MÉTHODE</span>
          </div>

          <div className="streamer-col streamer-col-3">
            <span className="v-word v-outline">ENDURANCE</span>
            <span className="v-word">CORPS</span>
            <span className="v-word v-outline">ESPRIT</span>
            <span className="v-word">TECHNIQUE</span>
            <span className="v-word v-outline">HEAT</span>
          </div>
        </div>

        {/* Diagonal Scatter Floating Tags & Phrases */}
        <div className="scatter-tag tag-pos-1">
          <span className="tag-bracket">[01]</span> REF. SYS_OVERLOAD
        </div>
        <div className="scatter-tag tag-pos-2 rotated-tag">
          COORD. 0.4404° N / 9.4178° E // OCEAN CENTER
        </div>
        <div className="scatter-tag tag-pos-3">
          // REPROGRAM YOUR LIMITS
        </div>
        <div className="scatter-tag tag-pos-4 rotated-rev">
          <Activity size={12} className="tag-icon" /> PROTOCOLE 100% PHYSIQUE
        </div>

        {/* Bottom Horizontal Track */}
        <div className="bg-marquee-row bottom-row">
          <div className="marquee-track marquee-track-right">
            <span>NO COMPROMISE • PUSH BEYOND • TOUT OU RIEN • TRANSFORMATION • ZERO EXCUSE • </span>
            <span>NO COMPROMISE • PUSH BEYOND • TOUT OU RIEN • TRANSFORMATION • ZERO EXCUSE • </span>
          </div>
        </div>
      </div>

      {/* FOREGROUND HERO POSTER / BANNER (Direct editorial poster design) */}
      <div className="manifesto-poster-container">
        
        {/* Top Meta Bar */}
        <div className="poster-meta-bar">
          <div className="meta-left">
            <span className="meta-accent-dot"></span>
            <span className="meta-title-small">HEAT // MANIFESTO</span>
            <span className="meta-sub">SYSTEM ACTIVE</span>
          </div>
          <div className="meta-right">
            <span className="meta-code">SYS.EXE_09</span>
            <ArrowUpRight className="meta-arrow" size={18} />
          </div>
        </div>

        {/* Center Main Fetish Phrase with System Font Switch Animation */}
        <div className={`poster-main-phrase ${glitchTextCorrupt ? 'is-glitching' : ''}`}>
          
          <div className="phrase-line line-1">
            <span className="word-heavy">ENTRAÎNEMENT</span>
          </div>

          <div className="phrase-line line-2">
            <span 
              className="word-glitch-serif"
              style={{ fontFamily: GLITCH_FONTS[glitchFontIndex1] }}
            >
              {glitchTextCorrupt ? 'CØMPL£T' : 'COMPLET'}
            </span>
            <span className="word-connector">ET</span>
            <span 
              className="word-glitch-accent"
              style={{ fontFamily: GLITCH_FONTS[glitchFontIndex2] }}
            >
              ÉQUILIBRÉ.
            </span>
          </div>

          <div className="phrase-line line-3">
            <span className="word-sub-serif">LA</span>
            <span 
              className="word-bold-red"
              style={{ fontFamily: GLITCH_FONTS[glitchFontIndex3] }}
            >
              MÉTHODE
            </span>
            <span className="word-badge-pill">HEAT EXCLUSIVE</span>
          </div>

        </div>

        {/* Poster Bottom Strip & Corner Accents */}
        <div className="poster-footer-strip">
          <div className="footer-feature-chip">
            <Zap size={14} /> HAUTE INTENSITÉ
          </div>
          <div className="footer-feature-chip">
            <Flame size={14} /> CONDITIONNEMENT TOTAL
          </div>
          <div className="footer-feature-chip">
            <ShieldAlert size={14} /> SANS COMPROMIS
          </div>
          <div className="footer-action-call">
            <span className="action-txt">DISCIPLINE OVER MOTIVATION</span>
            <div className="action-line"></div>
          </div>
        </div>

      </div>
    </section>
  );
};
