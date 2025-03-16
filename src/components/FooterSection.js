// src/components/FooterSection.js
import React from 'react';
import './FooterSection.css';

// Importe a logo da Sarpentia (ajuste o caminho conforme seu projeto)
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function FooterSection() {
  return (
    <footer className="footer-section">
      {/* Parte superior do rodapé */}
      <div className="footer-container">
        {/* Coluna 1: Logo + Descrição + Telefone */}
        <div className="footer-col">
          <img 
            src={LogoSapientia} 
            alt="Logo Sarpentia" 
            className="footer-sapientia-logo" 
          />
          <p>
            A Chapa Sarpentia é dedicada a promover a inovação, colaboração e 
            o crescimento do curso de Engenharia da Computação. Nosso foco é 
            criar um ambiente inclusivo, unindo alunos e professores em prol 
            de uma educação de excelência.
          </p>
          <p className="footer-phone">Telefone: (94) 99179-3586</p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre-nos">Sobre Nós</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-col">
          <h4>Contato</h4>
          <p>gui09lima@gmail.com</p>
          <p>Campus II, 68505-060</p>
          <p>Bloco 5</p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Parte inferior do rodapé */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2025 Guilherme Lima. Todos os direitos reservados.
        </p>
        <div className="footer-legal-links">
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
