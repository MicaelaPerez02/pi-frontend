import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import HeaderLogin from "./HeaderLogin";
import Footer from "./Footer";
import "../styles/Login.css";

function Login() {
    const [inputMail, setInputMail] = useState('');
    const [savedData, setSavedData] = useState('false');

    const handleInputChange = (e) => {
        const mail = e.target.value;
        setInputMail(mail);
        console.log(inputMail);
    }

    const saveData = (e) => {
        sessionStorage.setItem('mail', inputMail);
        setSavedData(true);
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        {
            setState(prevState => !prevState);
        }
        e.preventDefault();
    }
    return (
        <>
            <HeaderLogin className="header_user"/> }
            <div className="login">
                <form className="form_container">
                    <h1 className="title">Iniciar sesión</h1>

                    <div className="input1">
                        <h5>Correo electrónico</h5>
                        <input type="email" name="email" placeholder="Ingrese su correo electrónico" className="input" onChange={handleInputChange} />
                    </div>
                    <div className="input2">
                        <h5>Contraseña</h5>
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" className="input" />
                        <button className="btn-icon" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                        </button>
                    </div>
                    <div className="btn-container">
                        <Link to="/">
                            <button className="btn_singIn" onClick={saveData}>Ingresar</button>
                        </Link>
                    </div>

                    <p className="text_register">
                        ¿Aún no tenes cuenta?{" "}
                        <Link to="/register" className="btn_register_link">
                            Registrate
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Login;
