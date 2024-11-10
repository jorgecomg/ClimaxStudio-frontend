import React from "react";
import '../styles/footer.css'

function Footer() {
    return (

        <div>
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h3>Sobre Nós</h3>
                            <p>Especializados em capturar momentos inesquecíveis, oferecemos serviços de fotografia para casamentos, aniversários e formaturas. Transformamos suas memórias em arte.</p>
                        </div>
                        <div className="footer-section links">
                            <h3>Nossos Serviços</h3>
                            <ul>
                                <li><a href="#">Fotografia de Casamento</a></li>
                                <li><a href="#">Fotografia de Aniversário</a></li>
                                <li><a href="#">Fotografia de Formatura</a></li>
                            </ul>
                        </div>
                        <div className="footer-section contact">
                            <h3>Contato</h3>
                            <p>Email: contato@fotografiaeventos.com</p>
                            <p>Telefone: (11) 1234-5678</p>
                            <div className="socials">
                                <a href="#"><img src="/assets/images/facebook.png" alt="Facebook"></img></a>
                                <a href="#"><img src="/assets/images/instagram.png" alt="Instagram"></img></a>
                                <a href="#"><img src="/assets/images/twitter.png" alt="Twitter"></img></a>
                                <a href="#"><img src="/assets/images/whatsapp.png" alt="Twitter"></img></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Fotografia Eventos | Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>

    );
}
export default Footer;