import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import ContatoForm from '../components/ContatoForm';
import Footer from '../components/footer';
import '../styles/contato.css';

function Contato() {
    return (


        <div>
            <h1 id="climax"><Link to={'/'}>Climax Studio</Link></h1>
            <Header />

            <main>
                <div className="background">
                    <img src="/assets/images/foto.png" alt="Estúdio fotográfico" />
                </div>
                <div className="content">
                    <div className="profile">
                        <img src="/assets/images/pessoa.png" alt="Fotógrafo" />
                    </div>
                    <div className="text-box">
                        <h2>Obrigado por me escolher para o seu dia especial</h2>
                        <p>Por favor preencha o formulário abaixo e entrarei em contato com você em breve.</p>
                    </div>
                </div>
            </main>
            <ContatoForm />
            <Footer/>
        </div>

    );
}
export default Contato;