// src/components/SecondSection.js
import React, { useEffect, useState, useRef } from 'react';
import './SecondSection.css';

import FundoSection from '../images/bg-segunda-sessao.png';
import IconCard1 from '../images/icon-card1.png';
import IconCard2 from '../images/icon-card2.png';
import IconCard3 from '../images/icon-card3.png';
import IconCard4 from '../images/icon-card4.png';

function SecondSection() {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const extensionRef = useRef(null);

  // Inicia a contagem quando o elemento do contador entrar na viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (extensionRef.current) {
      observer.observe(extensionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounting) return;
    let current = 0;
    const end = 456;
    const duration = 2000;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [startCounting]);

  return (
    <section 
      className="second-section" 
      style={{ backgroundImage: `url(${FundoSection})` }}
    >
      <div className="second-section-content">
        <h2 className='titulo-section'>
          Antes mesmo de prometermos alguma coisa, nós <strong>já fizemos</strong> a diferença.
        </h2>

        {/* Container dos cards */}
        <div className="cards-container">
          <div className="card">
            <img src={IconCard1} alt="Icon Card 1" className="card-icon" />
            <p>
              Participação na criação da Atlética Octacore em 2021, consolidando a união entre os estudantes e fomentando eventos de integração e esporte.
            </p>
            <a 
              href="https://www.instagram.com/atletica.octacore/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saiba-mais"
            >
              SAIBA MAIS
            </a>
          </div>

          <div className="card">
            <img src={IconCard2} alt="Icon Card 2" className="card-icon" />
            <p>
              Participação na fundação do Clube de Programação, incentivando a inovação e o desenvolvimento de projetos tecnológicos.
            </p>
            <a 
              href="https://www.instagram.com/p/C9kdDu9pnw3/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saiba-mais"
            >
              SAIBA MAIS
            </a>
          </div>

          <div className="card">
            <img src={IconCard3} alt="Icon Card 3" className="card-icon" />
            <p>
              Organização da Semana Acadêmica, promovendo debates e workshops para aprimorar o conhecimento dos alunos.
            </p>
            <a 
              href="https://www.instagram.com/p/DCZZHXlRSMO/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saiba-mais"
            >
              SAIBA MAIS
            </a>
          </div>

          <div className="card">
            <img src={IconCard4} alt="Icon Card 4" className="card-icon" />
            <p>
              Coordenação de eventos que promovem a competitividade e o networking entre os estudantes.
            </p>
            <a 
              href="https://www.instagram.com/unifesspa_fec/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-saiba-mais"
            >
              SAIBA MAIS
            </a>
          </div>
        </div>

        {/* Número animado */}
        <div className="extension-hours" ref={extensionRef}>
          <h2>
            +{count} HORAS DE EXTENSÃO <br />
            entregues em apenas um ano.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
