import React, { useState} from "react";
import './Main.css';
import Card from "../UI/Card";
import RegistrarUsuario from "./RegistrarUsuario";
import IniciarSesionUsuario from "./IniciarSesionUsuario";



const Main = (props) => {

    const [isSignInView, setIsSignInView] = useState(false);
    const textos = ["Cambiar a Inicio de Sesión", "Cambiar a Registro de Usuarios"];

    const viewChangeHandler = () => {
        setIsSignInView(!isSignInView);
    };

    return (
        <div className="menu-principal">
            <button className="main-view-selecter" onClick={viewChangeHandler}>
                {textos[isSignInView ? 0 : 1]}
            </button>
            <Card>
                {isSignInView ? <IniciarSesionUsuario /> : <RegistrarUsuario />}
            </Card>
        </div>
    );

};

export default Main;