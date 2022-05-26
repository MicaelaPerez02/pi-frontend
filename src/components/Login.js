import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login-Register.css";
import HeaderLogin from "./Header-Login";
import "../styles/Header.css";
import Footer from "./Footer";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Login() {
    const [state, setState] = useState(false);
    const toggleBtn = (e) => {
        {
            setState(prevState => !prevState);
        }
        e.preventDefault();
    }
    return (
        <>
            <HeaderLogin />
            <div className="login">

                <form className="form_container">
                    <h1 className="title">Iniciar sesión</h1><br /><br />
                    <form className="input_container-Login">
                        <div className="input1">
                            <h5>Correo electronico</h5>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input2">
                            <h5 className="text_password">Contraseña</h5>
                            <input type={state ? "text" : "password"} name="password" placeholder="Password" />
                            <button className="btn-icon" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                            </button>
                        </div><hr />
                    </form>

                    <div className="btn-container">
                        <Link to="/">
                            <button className="btn_singIn">Ingresar</button>
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
            <br /><br /><br /> <br /><br /><br />
            <Footer />
        </>
    );
}

export default Login;
