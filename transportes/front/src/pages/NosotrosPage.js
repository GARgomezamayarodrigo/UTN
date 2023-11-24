import '../styles/components/pages/NosotrosPage.css'
import React from "react";
const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>historia</h2>
                <p>Excelente empresa cuenta con un plantel muy sabio a la hora de tomar decisiones, a continuacion seran prestentados.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="nosotros1.jpg" alt="Thiago Pereyra" />
                        <h5>Thiago Pereyra</h5>
                        <h6>Gerente General</h6>
                        <p>Por mi labor y mi pasado, vine a esta empresa a que crezca y hacer lo mismo con mis empleados.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage;