import '../styles/components/pages/ContactoPage.css'
import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <imput type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <imput type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <imput type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea type="text" name=""></textarea>
                    </p>
                    <p class="acciones"><imput type="submit"
                        value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 02320161622</li>
                    <li>EMail: transportesx@trasportesx.com.ar</li>
                    <li>Facebook: Transporte X</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;