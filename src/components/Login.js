import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Header from "./Header";
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

    const [state, setState] = useState(false);

    const saveData = (e) => {
        sessionStorage.setItem('mail', inputMail);
        setSavedData(true);
    }

    const toggleBtn = (e) => {
        {
            setState(prevState => !prevState);
        }
        e.preventDefault();
    }
    return (
        <>
            <Header className="header_login"/>
            <div className="login">
                <form className="form_container">
                    <h1 className="title">Iniciar sesión</h1><br /><br />
                    <form className="input_container-Login">
                        <div className="input1">
                            <h5>Correo electronico</h5>
                            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                        </div>
                        <div className="input1">
                            <h5 className="text_password">Contraseña</h5>
                            <input type={state ? "text" : "password"} name="password" placeholder="Password" />
                            <button className="btn-icon" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                            </button>
                        </div><hr />
                    </form>

                    <div className="btn-container">
                        <Link to="/">
                            <button className="btn_singIn" onClick={saveData}>Ingresar</button>
                        </Link>
                    </div>
                    <div>

                    </div>
                    <p className="text_register">
                        ¿Aún no tenes cuenta?{" "}
                        <Link to="/register" className="btn_register_link">
                            Registrate
                        </Link>
                    </p>
                </form>

            </div>
            <br /><br /><br /> <br /><br /><br />
            <Footer />

            {(!!savedData) && <Profile />}
        </>
    );
}

export default Login;
