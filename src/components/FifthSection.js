// src/components/FifthSection.js
import React from 'react';
import './FifthSection.css';

// Ajuste o caminho do ícone conforme o seu projeto
import IconSapientia from '../images/ICONE.png';

function FifthSection() {
  return (
    <section className="fifth-section">
      <div className="fifth-content">
        {/* Ícone girando */}
        <div className="fifth-icon-container">
          <img 
            src={IconSapientia} 
            alt="Ícone Sapientia" 
            className="fifth-icon" 
          />
        </div>

        {/* Texto e botão */}
        <div className="fifth-text">
          <p>
            Acreditamos que a verdadeira sabedoria vai além do conhecimento técnico; 
            ela está na capacidade de aprender com o passado, agir com responsabilidade no presente 
            e planejar com visão para o futuro. Com experiência, engajamento e um propósito claro, 
            a Chapa Sapientia está pronta para conduzir o Centro Acadêmico com inteligência, 
            compromisso e respeito à história do nosso curso.
          </p>
          <button className="btn-vote">VOTE AGORA</button>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;
