import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/home.css';

function Home() {

    return (

        <div>

            <h1 id="climax">Climax Studio</h1>
            
            <Header />
            <main>

                <section class="imagens">

                    <div id="image-container">
                        <div id="img1" class="image-box">
                            <img src="/assets/images/forma-home.jpg" alt="Casamento"></img>
                            <div class="overlay-text">Formaturas</div>
                        </div>

                        <div id="img2" class="image-box">
                            <img src="/assets/images/niver15.jpg" alt="Aniversario"></img>
                            <div class="overlay-text">Aniversário</div>
                        </div>

                        <div id="img3" class="image-box">
                            <img src="/assets/images/casamentohome.jpg" alt="Formaturas"></img>
                            <div class="overlay-text">Casamentos</div>
                        </div>
                    </div>

                </section>

                <div class="container">

                    <div class="top-section">
                        <img src="/assets/images/capa2-scaled 1.png" alt="Fotógrafo no estúdio" class="top-image"></img>
                        <div class="caption">
                            <h1>Portfólio</h1>
                            <p>inspirações para suas fotos</p>
                        </div>
                    </div>


                    <div class="bottom-section"  id="portfolio">
                        <div class="image-grid">
                            <div class="image-wrapper">
                                <img src="/assets/images/casamento1.png" alt="Casamento 1"></img>
                            </div>
                            <div class="image-wrapper">
                                <img src="/assets/images/casamento2.png" alt="Casamento 2"></img>
                            </div>
                            <div class="image-wrapper">
                                <img src="/assets/images/image.png" alt="Casamento 3"></img>
                            </div>
                            <div class="image-wrapper">
                                <img src="/assets/images/menina.jpg" alt="Aniversário"></img>
                            </div>
                            <div class="image-wrapper">
                                <img src="/assets/images/friends-graduation-ceremony.jpg" alt="Formatura 1"></img>
                            </div>
                            <div class="image-wrapper">
                                <img src="/assets/images/kid-celebrating-kindergarten-graduation.jpg" alt="Formatura 2"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>

    );
}
export default Home;