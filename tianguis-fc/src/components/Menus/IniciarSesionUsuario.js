import React, { useState} from "react";
import './IniciarSesionUsuario.css';
import Card from "../UI/Card";
import FiltroVistasUsuario from "./FiltroVistasUsuario";

const IniciarSesionUsuario = (props) => {

    const [selectedLogIn, setSelectedLogIn] = useState('Comprador');

    const logInChangeHandler = (selectedLogIn) => {
        if(selectedLogIn === "Comprador"){
            // Iniciar sesión como comprador
        }else{
            // Iniciar sesión como vendedor
        }
        setSelectedLogIn(selectedLogIn);
    };

    return(
        <div className="sign-in-section">
            <h2>Iniciar Sesión</h2>
            ¿Ya tienes sesión?
            ¿Qué tipo de usuario eres?<br></br>
            <Card>
                <FiltroVistasUsuario
                    selected={selectedLogIn}
                    onChangeFilter={logInChangeHandler}
                />
            </Card>
        </div>
    );
}

export default IniciarSesionUsuario;