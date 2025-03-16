// src/components/Mentoria.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Mentoria.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function Mentoria() {
  return (
    <div className="mentoria-page">
      {/* HEADER */}
      <header className="main-header">
        <div className="nav-container">
          <div className="header-left">
            <Link to="/" className="header-logo-link">
              <img src={LogoSapientia} alt="Logo Sapientia" className="header-logo" />
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
      <section className="mentoria-content">
        <h1 className="mentoria-title">Mentoria Acadêmica</h1>
        <p className="mentoria-text">
          Mentoria Acadêmica – Conectando veteranos bolsistas a calouros para fortalecer o aprendizado e a experiência desde o início do curso.
        </p>
        <p className="mentoria-text">
          Para incentivar a participação dos novos alunos em atividades acadêmicas e pesquisas desde cedo, a Chapa Sapientia pretende implementar um programa de mentoria entre bolsistas veteranos e calouros. O objetivo é conectar estudantes experientes que já possuem bolsas de pesquisa com aqueles que estão ingressando no curso, criando uma rede de aprendizado e apoio mútuo.
        </p>
        <p className="mentoria-text">
          O Centro Acadêmico atuará como intermediador desse processo, identificando bolsistas dispostos a orientar calouros interessados em adquirir experiência e se envolver com projetos acadêmicos. Dessa forma, os novos alunos terão a oportunidade de aprender diretamente com veteranos que já passaram pelos desafios iniciais do curso e podem oferecer suporte prático e técnico.
        </p>
        <p className="mentoria-text">
          Essa iniciativa não apenas ajudará os calouros a desenvolverem habilidades e se adaptarem mais rapidamente à vida universitária, mas também beneficiará os veteranos, que terão a chance de aprimorar suas habilidades de liderança e ensino. Além disso, a troca de conhecimento e experiências fortalecerá o engajamento estudantil, promovendo um ambiente mais colaborativo dentro da Engenharia de Computação na UNIFESSPA.
        </p>
      </section>
    </div>
  );
}

export default Mentoria;
