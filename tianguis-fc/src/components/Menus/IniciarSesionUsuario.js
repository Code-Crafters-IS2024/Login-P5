import React, { useState} from "react";
import './IniciarSesionUsuario.css';
import Card from "../UI/Card";
import FiltroVistasUsuario from "./FiltroVistasUsuario";

const IniciarSesionUsuario = (props) => {

    const [selectedLogIn, setSelectedLogIn] = useState('Comprador');
    const [contraseniaIngresada, setContraseniaIngresada] = useState("");
    const [numCuentaIngresado, setNumCuentaIngresado] = useState("");

    const logInChangeHandler = (selectedLogIn) => {
        setSelectedLogIn(selectedLogIn);
    };

    const cambioNumCuentaHandler = (event) => {
        setNumCuentaIngresado(event.target.value);
    }

    const cambioContraseniaHandler = (event) => {
        setContraseniaIngresada(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const usuario = {
            numCuenta: numCuentaIngresado,
            contrasenia: contraseniaIngresada,
        }

        console.log(usuario);
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
            <Card>
                <form onSubmit={submitHandler}>
                    <div>
                        <label>Número de cuenta:</label>
                        <input 
                        type="text"
                        value={numCuentaIngresado}
                        onChange={cambioNumCuentaHandler}
                        required
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                        type="password"
                        value={contraseniaIngresada}
                        onChange={cambioContraseniaHandler}
                        required
                        />
                    </div>
                    <div>
                        <button type="submit">Iniciar Sesión como {selectedLogIn === "Comprador" ? "Comprador" : "Vendedor"}</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default IniciarSesionUsuario;