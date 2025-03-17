// src/components/Comunicacao.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Compromisso.css';
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
        <h1 className="comunicacao-title">Compromisso com a Transparência</h1>
        <div className="comunicacao-text">
          <p>
          Atualmente, uma das principais funções do Centro Acadêmico é garantir que todas as informações importantes para os estudantes de Engenharia de Computação sejam amplamente divulgadas. Isso inclui editais, oportunidades acadêmicas e profissionais, eventos, conquistas e qualquer outro conteúdo relevante para a comunidade do curso.
          </p>
          <p>
           
Nosso compromisso é manter essa transparência, assegurando que os alunos tenham acesso rápido e claro a tudo que possa impactar sua formação. Além disso, daremos visibilidade a projetos, pesquisas e realizações dos próprios estudantes, valorizando o crescimento acadêmico e profissional dentro da UNIFESSPA.
          </p>
          
        </div>
      </section>
    </div>
  );
}

export default Comunicacao;
