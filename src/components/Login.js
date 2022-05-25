import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login-Register.css";
import HeaderLogin from "./Header-Login";
import "../styles/Header.css";
import Footer from "./Footer";
import {useState} from "react";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";

function Login() {
    const [state , setState] = useState(false);
    const toggleBtn = (e) => {{
        setState(prevState => !prevState);
    }
    e.preventDefault();

    
}
    return (
        <>
       <HeaderLogin/>
        <div className="login">
        
            <form className="form_container">
                <h1 className="title">Iniciar sesión</h1><br/><br/>
                <form className="input_container-">
                    <h5 >Correo electronico</h5>
                    <input type="email" name="email" placeholder="Email" /> <br/><br/>
                    <h5 >Contraseña</h5>
                    <div className="inputWrapper">
                    <input className="inputs-Data" type={state ? "text": "password"} name="password" placeholder="Password" />
                    <button className="btn-icon" onClick={toggleBtn}>
                    {state ?   <AiOutlineEye className="icon-eyeBlind"/>: <AiOutlineEyeInvisible className="icon-eyeBlind"/>}
                    </button>
                    </div><hr/>
                </form>
                <button className="btn_singIn">Ingresar</button>
                <br/>
                <p className="text_register">
                    ¿Aún no tenes cuenta?{" "}
                    <Link to="/register" className="btn_register_link">
                        Registrate
                    </Link>
                </p>
            </form>
        </div>
        <Footer/>
        </>
    );
}

export default Login;
