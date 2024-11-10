import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import '../styles/estudio.css';
import Footer from '../components/footer'

function Estudio() {

    return (
        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />
            <section class="main-content">
        <h2>O ESPAÇO IDEAL PARA SUAS PRODUÇÕES FOTOGRÁFICAS E AUDIOVISUAIS.</h2>
    </section>

    <section class="info-section">
        <div class="info-image">
            <img src="assets/images/aberto.jpg" alt="aberto"/>
        </div>
        <div class="info-text">
            <h3>Trabalhos ao Ar Livre</h3>
            <p>Especializados em capturar momentos únicos ao ar livre, com a beleza da natureza como cenário. Transformamos paisagens naturais em memórias inesquecíveis.</p>
            <p> - Especialista em capturar momentos únicos ao ar livre.</p>
            <p> - Fotografias imersivas em florestas, revelando a beleza natural.</p>
            <p> - Experiência em fotos ao lado de cachoeiras e riachos cristalinos.</p>
            <p> - Composições únicas em praias e paisagens costeiras.</p>
            <p> - Domínio em capturar o nascer e o pôr do sol em cenários abertos.</p>
            <a href="/contato"><button class="package-btn">Conheça nossos pacotes</button></a>
        </div>
    </section>

    <section>
        <div class="section">
            <div class="text-content">
                <h3>Trabalhos em Estúdio Fechado</h3>
                <p>Especializados em capturar momentos com controle total de iluminação e cenário. Transformamos o ambiente do estúdio em um palco para criar imagens impactantes.</p>
                <p> - Especialista em capturar momentos únicos em estúdios fotográficos.</p>
                <p> - Experiência em fotografar eventos pessoais em ambientes fechados.</p>
                <p> - Domínio em retratos emocionais durante casamentos em igrejas e salões.</p>
                <p> - Habilidade em criar imagens atrativas de produtos em estúdios.</p>
                <p> - Expertise em documentar exposições em salões de festas.</p>
                <a href="/contato"><button class="package-btn">Conheça nossos pacotes</button></a>
            </div>
            <div class="image-container">
                <img src="assets/images/Bianca.jpg" alt="Foto de estúdio fechado"/>
            </div>
        </div>
    </section>    

    <Footer />
        </div>

        
    );
}

export default Estudio;