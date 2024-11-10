import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';

function Header() {

    return (

        <div>

            <section className="cabecario">
                <header>

                    <nav>
                        <button><Link to="/#portfolio" className="link">Portfolio</Link></button>
                        <button><Link to="/studio" className="link">Estudio</Link></button>
                        <button><Link to="/sobre" className="link">Sobre</Link></button>
                        <button><Link to="/contato" className="link">Contato</Link></button>
                        <button><Link to="/pacotes" className="link">Pacotes</Link></button>
                        <button><Link to="/login" className="link">Login</Link></button>
                    </nav>
                </header>
            </section>
        </div>


    );
}
export default Header;