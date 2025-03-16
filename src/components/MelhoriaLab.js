// src/components/MelhoriaLab.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MelhoriaLab.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function MelhoriaLab() {
  return (
    <div className="melhoria-lab-page">
      {/* HEADER */}
      <header className="main-header">
        <div className="nav-container">
          <div className="header-left">
            {/* Ao clicar na logo, volta para a página principal */}
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
      <section className="melhoria-lab-content">
        <h1 className="melhoria-lab-title">Melhoria no Laboratório</h1>
        <div className="melhoria-lab-text">
          <p>
            Buscaremos aprimorar e modernizar os laboratórios do curso, investindo na aquisição de equipamentos de ponta e na melhoria da infraestrutura existente. Nossa proposta inclui a realização de um levantamento detalhado das necessidades dos espaços laboratoriais, com o objetivo de substituir aparelhos obsoletos e implementar ambientes mais seguros e funcionais para experimentos e pesquisas.
          </p>
          <p>
            Além disso, pretendemos firmar parcerias com empresas do setor tecnológico e industrial para garantir treinamentos contínuos e atualizações das melhores práticas. Com essa iniciativa, os laboratórios se tornarão verdadeiros centros de inovação, onde teoria e prática se unem para preparar os alunos para os desafios do mercado de trabalho.
          </p>
          <p>
            Nosso compromisso é transformar o ambiente de aprendizado, proporcionando condições ideais para que os estudantes desenvolvam habilidades técnicas e criativas, impulsionando o desenvolvimento acadêmico e profissional.
          </p>
        </div>
      </section>
    </div>
  );
}

export default MelhoriaLab;
