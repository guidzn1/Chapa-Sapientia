// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Fundo animado com quadrados flutuantes
import Background from './components/Background';

// Imagens do header
import LogoSapientia from './images/LOGO-SAPENTIA.png';
import IconeSapientia from './images/ICONE.png';
import VoteIcon from './images/vote-icone.png';
import IconeMenu from './images/iconemenu.png'; // ícone para o menu mobile

// Seções
import SecondSection from './components/SecondSection';
import TeamSection from './components/TeamSection';
import ProposalsSection from './components/ProposalsSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import FooterSection from './components/FooterSection';

// Páginas separadas (rotas)
import BolsaDePesquisa from './components/BolsaDePesquisa';
import Caravanas from './components/Caravanas';
import Comunicacao from './components/Comunicacao';
import MelhoriaLab from './components/MelhoriaLab';
import Mentoria from './components/Mentoria';
import Transp from './components/Compromisso';

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Background />

      {/* HEADER */}
      <header className="main-header">
        <div className="nav-container">
          <div className="header-left">
            {/* Logo – permanece igual */}
            <img 
              src={LogoSapientia} 
              alt="Logo Sapientia" 
              className="header-logo" 
            />
          </div>
          <div className="header-right">
            {/* Menu desktop */}
            <ul className="desktop-menu">
              <li><a href="#equipe" className="header-link">Sobre Nós</a></li>
              <li><a href="#propostas" className="header-link">Propostas</a></li>
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
            {/* Ícone de menu para mobile */}
            <div className="hamburger" onClick={toggleMenu}>
              <img src={IconeMenu} alt="Menu" className="hamburger-icon" />
            </div>
          </div>
        </div>
        {/* Menu mobile – só aparece em mobile */}
        {menuOpen && (
          <ul className="mobile-menu">
            <li><a href="#equipe" onClick={toggleMenu}>Sobre Nós</a></li>
            <li><a href="#propostas" onClick={toggleMenu}>Propostas</a></li>
            <li>
              <a 
                href="https://api.whatsapp.com/send?phone=5594991793586" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={toggleMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        )}
      </header>

      {/* PRIMEIRA SEÇÃO (Hero) */}
      <section className="hero-section" id="sobre-nos">
        <div className="hero-left">
          <img 
            src={LogoSapientia} 
            alt="Chapa Sapientia" 
            className="hero-logo" 
          />
          <p>
            Com uma visão realista e compromisso com o crescimento do curso, 
            a Chapa Sapientia traz uma trajetória de participação ativa na 
            Engenharia de Computação da UNIFESSPA. Ao longo dos anos, nossos 
            membros contribuíram para diversas iniciativas que fortaleceram o 
            curso, sempre junto a uma comunidade engajada.
          </p>
          <a 
            href="https://www.instagram.com/p/C9kdDu9pnw3/?img_index=1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-vote"
          >
            <img src={VoteIcon} alt="Vote Icon" className="vote-icon" href="https://forms.gle/5arBCqYSmA11jRZ77" />
            VOTE AGORA
          </a>
        </div>
        <div className="hero-right">
          <div className="icon-glow">
            <img 
              src={IconeSapientia} 
              alt="Ícone Sapientia" 
              className="big-icon" 
            />
          </div>
        </div>
      </section>

      <SecondSection />
      <TeamSection id="equipe" />
      <ProposalsSection id="propostas" />
      <FifthSection />
      <SixthSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bolsadepesquisa" element={<BolsaDePesquisa />} />
        <Route path="/caravanas" element={<Caravanas />} />
        <Route path="/comunicacao" element={<Comunicacao />} />
        <Route path="/melhorialab" element={<MelhoriaLab />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/transp" element={<Transp/>} />
      </Routes>
    </Router>
  );
}

export default App;
