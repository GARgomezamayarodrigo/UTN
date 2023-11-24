import '../styles/components/pages/HomePage.css'
import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img01.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Bienvenido a mi proyecto de estudio para aprender a crear paginas web, espero que a medida que avance, pueda seguir mejorando mas y mas

                        Tratare de dar lo mejor para que cada uno se sienta identificado como lo que hago</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Maravilloso
                            Servicio</span>
                        <span class="autor">Armando
                            Barreda</span>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default HomePage;