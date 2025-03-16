// src/components/CircuitBackground.js
import React from 'react';
import './CircuitBackground.css';

function CircuitBackground() {
  return (
    <div className="circuit-background">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Gradiente linear para as linhas */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00aeff" />
            <stop offset="100%" stopColor="#0077ff" />
          </linearGradient>

          {/* Gradiente radial para nós (pontos) */}
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00aeff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00aeff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Exemplo de duas trilhas (paths). Ajuste para criar seu design de circuito */}
        <path
          d="M 100 200 L 250 200 L 250 150 L 400 150 L 400 300 L 550 300"
          className="circuit-line"
        />
        <path
          d="M 250 200 L 250 350 L 300 350 L 300 400 L 450 400 L 450 350 L 500 350"
          className="circuit-line"
        />

        {/* Nós (pontos) nas junções */}
        <circle cx="100" cy="200" r="6" className="circuit-node" />
        <circle cx="250" cy="200" r="6" className="circuit-node" />
        <circle cx="400" cy="150" r="6" className="circuit-node" />
        <circle cx="400" cy="300" r="6" className="circuit-node" />
        <circle cx="250" cy="350" r="6" className="circuit-node" />
        <circle cx="300" cy="400" r="6" className="circuit-node" />
        <circle cx="450" cy="400" r="6" className="circuit-node" />
      </svg>
    </div>
  );
}

export default CircuitBackground;
