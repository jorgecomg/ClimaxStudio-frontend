import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/sobremim.css';

function Sobre() {
    return (

        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />

            <section class="banner">
      <h2>Eu sou Alexandre, seu fotógrafo</h2>
    </section>

    <section class="sobre">
      <div class="foto">
        <img src="assets/images/Pedro.jpg" alt="Foto de Alexandre, fotógrafo"/>
      </div>
      <div class="descricao">
        <p>Comecei minha carreira como assistente em um estúdio local, onde aprendi as técnicas fundamentais da fotografia. Com o tempo, decidi seguir meu próprio caminho e me lancei como fotógrafo autônomo. Minha especialidade? Retratar momentos genuínos, seja em casamentos, ensaios de família ou retratos individuais. Para mim, cada sessão é uma chance de eternizar a conexão entre as pessoas.</p>
      </div>
    </section>

    <section class="detalhes">
      <div class="texto">
        <h3>Meu Estilo e Inspiração</h3>
        <p>Inspirado pela natureza e pelas emoções humanas, desenvolvi um estilo único que mescla realismo e criatividade. Acredito que a verdadeira beleza está nas pequenas coisas e busco capturar a essência de cada momento. Para mim, a fotografia não é apenas um trabalho; é uma forma de arte e uma maneira de contar histórias que merecem ser lembradas.</p>
      </div>
      <div class="texto">
        <h3>Meu Futuro</h3>
        <p>Hoje, continuo minha jornada, sempre em busca de novas aventuras fotográficas. Com um olhar atento e um coração aberto, estou pronto para capturar cada sorriso, lágrima e alegria que a vida oferece. Meu objetivo é simples: fazer com que cada cliente se sinta especial e que suas memórias sejam eternizadas em imagens que falam por si mesmas.</p>
      </div>
    </section>
    <Footer />
        </div>
        

    );
}
export default Sobre;