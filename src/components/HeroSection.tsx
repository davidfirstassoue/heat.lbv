import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

gsap.registerPlugin(useGSAP);

// Sans-serif condensées, géométriques et compactes (Druk style, Impact, Bebas Neue, Oswald, Syne, Barlow, Space Grotesk)
const CONDENSED_DISPLAY_FONTS = [
  "'Bebas Neue', Impact, 'Arial Narrow', sans-serif",
  "'Oswald', 'Impact', sans-serif",
  "'Barlow Condensed', 'Impact', sans-serif",
  "'Anton', 'Impact', sans-serif",
  "'Space Grotesk', sans-serif",
  "'Syne', sans-serif",
  "'Archivo Black', sans-serif",
  "Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif"
];

export const HeroSection: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Dynamic font states exclusively switching between condensed/geometric/display fonts
  const [fontIdx1, setFontIdx1] = useState(0);
  const [fontIdx2, setFontIdx2] = useState(1);
  const [fontIdx3, setFontIdx3] = useState(2);
  const [isGlitching, setIsGlitching] = useState(false);

  // Autoplay video
  useGSAP(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(e => console.log("Desktop autoplay prevented:", e));
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(e => console.log("Mobile autoplay prevented:", e));
    }
  }, { scope: container });

  // Bug système / Fast font switch ONLY at initial page load
  useEffect(() => {
    let count = 0;
    const maxSwaps = 12; // Runs for ~2 seconds at load then stops completely

    const interval = setInterval(() => {
      count++;

      // Rapid font swap
      setFontIdx1(Math.floor(Math.random() * CONDENSED_DISPLAY_FONTS.length));
      setFontIdx2(Math.floor(Math.random() * CONDENSED_DISPLAY_FONTS.length));
      setFontIdx3(Math.floor(Math.random() * CONDENSED_DISPLAY_FONTS.length));

      // Glitch flicker
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 70);

      if (count >= maxSwaps) {
        clearInterval(interval);
        // Settle on clean default condensed fonts
        setFontIdx1(0); // 'Bebas Neue', Impact
        setFontIdx2(1); // 'Oswald'
        setFontIdx3(3); // 'Anton'
        setIsGlitching(false);
      }
    }, 160);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" ref={container}>
      {/* 1. BACKGROUND BLURRED VIDEO */}
      <video 
        ref={desktopVideoRef}
        className="hero-video hero-video-desktop"
        autoPlay 
        loop 
        muted 
        playsInline 
        src="/heat-bg.mp4"
      />
      <video 
        ref={mobileVideoRef}
        className="hero-video hero-video-mobile"
        autoPlay 
        loop 
        muted 
        playsInline 
        src="/heat-bg-mobile.mp4"
      />

      {/* Dark overlay for maximum contrast */}
      <div className="hero-dark-overlay"></div>

      {/* 2. BACKGROUND MULTI-DIRECTIONAL TEXTS (Clean & Strict Essential) */}
      <div className="hero-typography-layer" aria-hidden="true">
        

        {/* Minimal Side Vertical Markers */}
        <div className="v-side-marker v-side-left">
          <span>HEAT • PERFORMANCE</span>
        </div>
        <div className="v-side-marker v-side-right">
          <span>0.4404° N / 9.4178° E</span>
        </div>
      </div>

      {/* 3. CENTERPIECE FETISH PHRASE (Direct Pure Reference Style) */}
      <div className="hero-main-content">
        
        {/* Top Minimal Editorial Tag */}
        <div className="hero-top-tag">
          <div className="tag-line"></div>
          <ArrowRight size={20} className="tag-arrow" />
        </div>

        {/* Main Clean Fetish Phrase */}
        <div className={`hero-fetish-phrase ${isGlitching ? 'is-glitching' : ''}`}>
          
          {/* Line 1: ENTRAINEMENT */}
          <div className="phrase-row">
            <h1 
              className="word-condensed-block"
              style={{ fontFamily: CONDENSED_DISPLAY_FONTS[fontIdx1] }}
            >
              ENTRAINEMENT
            </h1>
          </div>

          {/* Line 2: COMPLET ET */}
          <div className="phrase-row line-middle">
            <span className="word-serif-reference">
              COMPLET ET
            </span>
          </div>

          {/* Line 3: ÉQUILIBRÉ */}
          <div className="phrase-row">
            <span 
              className="word-condensed-block"
              style={{ fontFamily: CONDENSED_DISPLAY_FONTS[fontIdx2] }}
            >
              ÉQUILIBRÉ
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
