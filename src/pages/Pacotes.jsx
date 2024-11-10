import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/pacotes.css';


function Pacotes() {
    return (

        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />

            <section class="banner">
      <h2>Pacotes</h2>
    </section>

    <section class="pacotes">
      <div class="pacote">
        <h3>Pacote Básico</h3>
        <p>Descrição: Ideal para pequenos eventos ou ensaios fotográficos de curta duração. Inclui:</p>
        <ul>
          <li>1 hora de sessão fotográfica</li>
          <li>Até 30 fotos editadas</li>
          <li>Entrega digital via link para download</li>
        </ul>
        <div class="preco">R$ 500</div>
        <a href="/contato"><button id='buttonPacote'>Solicitar</button></a>
      </div>

      <div class="pacote">
        <h3>Pacote Intermediário</h3>
        <p>Descrição: Perfeito para eventos maiores e sessões mais completas. Inclui:</p>
        <ul>
          <li>3 horas de sessão fotográfica</li>
          <li>Até 100 fotos editadas</li>
          <li>1 álbum fotográfico impresso (20 páginas)</li>
          <li>Entrega digital via link para download</li>
        </ul>
        <div class="preco">R$ 1.200</div>
        <a href="/contato"><button id='buttonPacote'>Solicitar</button></a>
      </div>

      <div class="pacote">
        <h3>Pacote Premium</h3>
        <p>Descrição: Uma cobertura completa para eventos especiais, com mais personalização e extras. Inclui:</p>
        <ul>
          <li>6 horas de sessão fotográfica</li>
          <li>Fotos ilimitadas editadas</li>
          <li>2 álbuns fotográficos impressos (20 páginas)</li>
          <li>Entrega digital via link para download com pen drive</li>
        </ul>
        <div class="preco">R$ 2.500</div>
        <a href="/contato"><button id='buttonPacote'>Solicitar</button></a>
      </div>
    </section>
        <Footer/>
        </div>

    );
}
export default Pacotes;