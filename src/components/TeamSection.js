// src/components/TeamSection.js
import React from 'react';
import './TeamSection.css';

// Imagens dos membros da equipe
import Foto1 from '../images/michelly.png';
import Foto2 from '../images/emanuel.png';
import Foto3 from '../images/guilherme.png';
import Foto4 from '../images/felipe.png';

// Ícone do título
import EquipeIcon from '../images/equipe-icone.png';


function TeamSection() {
  return (
    <section className="team-section">
      {/* Título com ícone */}
      <h2 className="team-title">
        <img src={EquipeIcon} alt="Ícone Equipe" className="team-icon" />
        Nossa Equipe:
      </h2>
      
      <div className="cards-container">
        <div className="team-card">
          <img src={Foto1} alt="Michelly" />
          <p>
            Michelly - Presidente<br />
            <span className="period-text">7º Período</span>
          </p>
        </div>
        <div className="team-card">
          <img src={Foto2} alt="Emanuel" />
          <p>
            Emanuel - Vice-Presidente<br />
            <span className="period-text">7º Período</span>
          </p>
        </div>
        <div className="team-card">
          <img src={Foto3} alt="Guilherme" />
          <p>
            Guilherme - Marketing<br />
            <span className="period-text">7º Período</span>
          </p>
        </div>
        <div className="team-card">
          <img src={Foto4} alt="Felipe" />
          <p>
            Felipe - Comunicação<br />
            <span className="period-text">9º Período</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
