// src/components/Caravanas.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Caravanas.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function Caravanas() {
  return (
    <div className="caravanas-page">
      {/* HEADER */}
      <header className="main-header">
        <div className="nav-container">
          <div className="header-left">
            {/* Ao clicar na logo, volta para a/}
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
              <li><a href="/#equipe" className="header-link">Sobre Nós</a></li>
              <li><a href="/#propostas" className="header-link">Propostas</a></li>
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
      <section className="caravanas-content">
        <h1 className="caravanas-title">Caravanas Acadêmicas</h1>
        <div className="caravanas-text">
          <p>
            Facilitaremos a organização e arrecadação de verbas junto aos alunos interessados em participar de congressos e eventos científicos.
          </p>
          <p>
            Nosso papel será atuar como um ponto central de organização, ajudando na arrecadação dos recursos necessários para viabilizar a participação dos estudantes. A Chapa Sapientia não será a única responsável por financiar ou realizar as caravanas, mas sim coordenar os esforços para que os próprios alunos possam levantar os fundos necessários.
          </p>
          <p>
            Para isso, estruturaremos iniciativas como rifas, eventos e outras atividades que possibilitem a captação de recursos. Além disso, ajudaremos na divisão de responsabilidades, organizando cargos e tarefas para que os participantes possam contribuir de maneira justa e eficiente. Dessa forma, todos terão a oportunidade de participar ativamente do processo, tornando a ida a congressos e eventos mais acessível para a comunidade acadêmica.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Caravanas;
