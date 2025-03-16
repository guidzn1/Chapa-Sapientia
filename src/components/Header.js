// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';
import MenuIcon from '../images/iconemenu.png'; // Certifique-se de que esse arquivo exista na pasta images

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header">
      <div className="nav-container">
        <div className="header-left">
          {/* Ao clicar na logo, volta para a página principal */}
          <Link to="/" className="header-logo-link">
            <img src={LogoSapientia} alt="Logo Sapientia" className="header-logo" />
          </Link>
        </div>
        <div className="header-right">
          {/* Ícone de menu para mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            <img src={MenuIcon} alt="Menu" className="hamburger-icon" />
          </div>
          {/* Menu mobile */}
          {menuOpen && (
            <ul className="mobile-menu">
              <li>
                <a href="/#equipe" onClick={toggleMenu}>Sobre Nós</a>
              </li>
              <li>
                <a href="/#propostas" onClick={toggleMenu}>Propostas</a>
              </li>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
