// src/components/ProposalsSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProposalsSection.css';

// Imagens das propostas
import Proposta1 from '../images/proposta1.png';
import Proposta2 from '../images/proposta2.png';
import Proposta3 from '../images/proposta3.png';
import Proposta4 from '../images/proposta4.png';
// Imagem para a proposta de Mentoria Acadêmica (ajuste o nome do arquivo conforme necessário)
import MentoriaImg from '../images/mentoria.png';

function ProposalsSection({ id }) {
  return (
    <section className="proposals-section" id={id}>
      <h2 className="proposals-title">Nossas propostas</h2>
      <p className="proposals-subtitle">
        para um curso de Engenharia da Computação melhor:
      </p>

      <div className="proposals-cards-container">
        {/* Card 1: Parcerias para Bolsas de Pesquisa */}
        <div className="proposal-card">
          <img src={Proposta1} alt="Proposta 1" className="proposal-image" />
          <h3>Parcerias para Bolsas de Pesquisa</h3>
          <p>
            Buscaremos apoio e empresas privadas para viabilizar bolsas, 
            auxiliando alunos na produção de pesquisa de ponta.
          </p>
          <div className="proposal-divider"></div>
          <Link to="/bolsadepesquisa" className="proposal-link">
            Como?
          </Link>
        </div>

        {/* Card 2: Caravanas Acadêmicas */}
        <div className="proposal-card">
          <img src={Proposta2} alt="Proposta 2" className="proposal-image" />
          <h3>Caravanas Acadêmicas</h3>
          <p>
            Incentivaremos a participação em eventos e feiras tecnológicas em parceria com outras instituições.
          </p>
          <div className="proposal-divider"></div>
          <Link to="/caravanas" className="proposal-link">
            Como?
          </Link>
        </div>

        {/* Card 3: Comunicação Eficiente */}
        <div className="proposal-card">
          <img src={Proposta3} alt="Proposta 3" className="proposal-image" />
          <h3>Comunicação Eficiente</h3>
          <p>
            Manteremos um diálogo constante com professores e alunos, divulgando informações de forma ágil.
          </p>
          <div className="proposal-divider"></div>
          <Link to="/comunicacao" className="proposal-link">
            Como?
          </Link>
        </div>

        {/* Card 4: Melhoria no Laboratório */}
        <div className="proposal-card">
          <img src={Proposta4} alt="Proposta 4" className="proposal-image" />
          <h3>Melhoria no Laboratório</h3>
          <p>
            Buscaremos atualizações de equipamentos e infraestrutura dos laboratórios para um melhor aprendizado.
          </p>
          <div className="proposal-divider"></div>
          <Link to="/melhorialab" className="proposal-link">
            Como?
          </Link>
        </div>

        {/* Card 5: Mentoria Acadêmica */}
        <div className="proposal-card">
          <img src={MentoriaImg} alt="Proposta Mentoria" className="proposal-image" />
          <h3>Mentoria Acadêmica</h3>
          <p>
            Conectando veteranos bolsistas a calouros para fortalecer o aprendizado e a experiência desde o início do curso.
          </p>
          <div className="proposal-divider"></div>
          <Link to="/mentoria" className="proposal-link">
            Como?
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProposalsSection;
