// src/components/SixthSection.js
import React, { useState } from 'react';
import './SixthSection.css';

function SixthSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('Engenharia de Computação');
  const [semestre, setSemestre] = useState('');
  const [tipo, setTipo] = useState('Sugestão');
  const [contribuicao, setContribuicao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Monta o texto que será enviado no WhatsApp
    const textoWhats = `
      *Nome Completo:* ${nome}
      *Email Institucional:* ${email}
      *Curso:* ${curso}
      *Semestre:* ${semestre}
      *Tipo de Contribuição:* ${tipo}
      *Sua Contribuição:* ${contribuicao}
    `;

    // Abre o link do WhatsApp com a mensagem pronta
    window.open(
      `https://api.whatsapp.com/send?phone=5594991793586&text=${encodeURIComponent(textoWhats)}`,
      '_blank'
    );
  };

  return (
    <section className="sixth-section">
      <div className="sixth-container">
        <h2 className="sixth-title">Alguma dúvida?</h2>
        <p className="sixth-subtitle">
          Ajude-nos a construir um Curso mais objetivo e eficiente!
        </p>

        <form className="sixth-form" onSubmit={handleSubmit}>
          {/* Nome Completo */}
          <div className="form-group">
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          {/* Email Institucional */}
          <div className="form-group">
            <label htmlFor="email">Email Institucional</label>
            <input
              type="email"
              id="email"
              placeholder="seu.email@unifesspa.edu.br"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Curso */}
          <div className="form-group">
            <label htmlFor="curso">Curso</label>
            <select
              id="curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
            >
              <option value="Engenharia de Computação">Engenharia de Computação</option>
              <option value="Outro Curso">Outro Curso</option>
            </select>
          </div>

          {/* Semestre */}
          <div className="form-group">
            <label htmlFor="semestre">Semestre</label>
            <select
              id="semestre"
              value={semestre}
              onChange={(e) => setSemestre(e.target.value)}
              required
            >
              <option value="" disabled>Selecione</option>
              <option value="1º">1º</option>
              <option value="2º">2º</option>
              <option value="3º">3º</option>
              <option value="4º">4º</option>
              <option value="5º">5º</option>
              <option value="6º">6º</option>
              <option value="7º">7º</option>
              <option value="8º">8º</option>
              <option value="9º">9º</option>
              <option value="10º">10º</option>
            </select>
          </div>

          {/* Tipo de Contribuição */}
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Contribuição</label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="Sugestão">Sugestão</option>
              <option value="Reclamação">Reclamação</option>
              <option value="Elogio">Elogio</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Sua Contribuição */}
          <div className="form-group">
            <label htmlFor="contribuicao">Sua Contribuição</label>
            <textarea
              id="contribuicao"
              placeholder="Compartilhe sua sugestão, reclamação ou ideia..."
              rows="5"
              value={contribuicao}
              onChange={(e) => setContribuicao(e.target.value)}
              required
            />
          </div>

          {/* Botão de Enviar */}
          <button type="submit" className="sixth-submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default SixthSection;
