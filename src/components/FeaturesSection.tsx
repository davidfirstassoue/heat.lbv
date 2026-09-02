import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturesSection.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const features = [
  {
    num: '01',
    title: 'Équipement Pro',
    description: 'Des machines de pointe calibrées pour un entraînement haute précision.'
  },
  {
    num: '02',
    title: 'Suivi Personnalisé',
    description: 'Des coachs experts dédiés à votre progression et vos objectifs.'
  },
  {
    num: '03',
    title: 'Cours Collectifs',
    description: 'Une intensité de groupe cadrée pour repousser vos limites.'
  },
  {
    num: '04',
    title: 'Zone HIIT',
    description: 'Entraînement par intervalles haute intensité sans compromis.'
  }
];

export const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });
    
    gsap.from('.features-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

  }, { scope: sectionRef });

  return (
    <div className="features-wrapper">
      <section className="features-section" ref={sectionRef}>
        <div className="features-header">
          <span className="features-badge">THE EXPERIENCE</span>
          <h2 className="features-title">L'Expérience Heat</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-num">{feature.num}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
