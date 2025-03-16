// src/components/BolsaDePesquisa.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BolsaDePesquisa.css';
import LogoSapientia from '../images/LOGO-SAPENTIA.png';

function BolsaDePesquisa() {
  return (
    <div className="bolsa-page">
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
      <section className="bolsa-content">
        <h1 className="bolsa-title">Parcerias para Bolsas de Pesquisa</h1>
        <div className="bolsa-text">
          <p>
            Buscaremos apoio de empresas privadas para viabilizar bolsas, auxiliando alunos a se manterem no curso e adquirirem experiência na área.
          </p>
          <p>
            Para viabilizar bolsas de pesquisa para os alunos do curso, a Chapa Sapientia buscará ativamente parcerias com empresas e empresários interessados em financiar projetos alinhados aos seus interesses. O objetivo é conectar o conhecimento acadêmico às demandas do setor produtivo, criando oportunidades tanto para os estudantes quanto para as empresas.
          </p>
          <p>
            O funcionamento dessa iniciativa será baseado na identificação de oportunidades junto às empresas, compreendendo suas necessidades e desafios. A diretoria do Centro Acadêmico atuará como intermediadora, estabelecendo diálogos e apresentando propostas de pesquisa e desenvolvimento que tragam benefícios mútuos: soluções inovadoras para as empresas e experiência prática para os alunos.
          </p>
          <p>
            Com o apoio de professores e especialistas, os estudantes poderão desenvolver projetos aplicados ao mercado, que vão desde a criação de novas tecnologias até a otimização de processos já existentes. A ideia é que essas pesquisas tenham impacto real na indústria e contribuam para o avanço da engenharia e da computação.
          </p>
          <p>
            Além de proporcionar um auxílio financeiro aos estudantes, essas bolsas permitirão que eles adquiram experiência relevante na área, aumentando suas chances de empregabilidade. Ao final dos projetos, os alunos poderão ter a oportunidade de serem contratados pelas próprias empresas parceiras, criando uma ponte entre a universidade e o mercado de trabalho.
          </p>
          <p>
            Essa proposta também busca reduzir a dependência exclusiva das bolsas oferecidas pela UNIFESSPA, que são limitadas e não atendem a toda a demanda estudantil. Ao diversificar as fontes de financiamento da pesquisa, promovemos um modelo sustentável de apoio acadêmico e profissional, garantindo que mais alunos tenham acesso a recursos que facilitem sua permanência e desenvolvimento no curso.
          </p>
          <p>
            Embora não haja garantias imediatas, acreditamos que essa estratégia trará impactos positivos a longo prazo, fortalecendo a Engenharia de Computação da UNIFESSPA e tornando-a referência em colaboração entre academia e mercado. A Chapa Sapientia está comprometida em dar os primeiros passos para viabilizar essa iniciativa, sempre em busca das melhores oportunidades para os estudantes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default BolsaDePesquisa;
