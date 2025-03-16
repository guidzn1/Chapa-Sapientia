// src/components/Comunicacao.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Comunicacao.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function Comunicacao() {
  return (
    <div className="comunicacao-page">
      {/* HEADER */}
      <header className="main-header">
        <div className="nav-container">
          <div className="header-left">
            <Link to="/" className="header-logo-link">
              <img 
                src={LogoSapientia} 
                alt="Logo Sapientia" 
                className="header-logo" 
              />
            </Link>
          </div>
          <div className="header-right">
            <ul>
              <li>
                <a href="/#equipe" className="header-link">Sobre Nós</a>
              </li>
              <li>
                <a href="/#propostas" className="header-link">Propostas</a>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send?phone=5594991793586" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-contato"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="comunicacao-content">
        <h1 className="comunicacao-title">Comunicação Eficiente</h1>
        <div className="comunicacao-text">
          <p>
            Manteremos um diálogo constante com professores para repassar demandas e solucionar problemas dos alunos.
          </p>
          <p>
            Por termos mais tempo de curso e uma vivência mais ampla dentro da universidade, nossa chapa conta com membros que mantêm uma boa relação com o corpo docente, o que facilitará a mediação de conflitos e a resolução de questões acadêmicas. Nosso compromisso é garantir uma comunicação clara e respeitosa entre alunos e professores, buscando sempre soluções justas e viáveis.
          </p>
          <p>
            Entendemos que, ao ingressar no curso, alguns alunos podem ter dificuldades em se adaptar à dinâmica acadêmica e, muitas vezes, podem interpretar certas práticas como inadequadas, quando na verdade fazem parte da rotina universitária. Nosso papel será auxiliar nesse entendimento, orientando os alunos sobre como funcionam os processos acadêmicos e, ao mesmo tempo, garantindo que suas preocupações sejam ouvidas.
          </p>
          <p>
            Por outro lado, caso identifiquemos problemas reais que prejudiquem os estudantes, estaremos prontos para dialogar com os professores e buscar soluções. Nosso objetivo é equilibrar as necessidades dos alunos com a realidade acadêmica, sempre prezando pelo respeito e pelo bom funcionamento do curso.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Comunicacao;
