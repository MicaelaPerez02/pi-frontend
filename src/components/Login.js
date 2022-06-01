import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singup = () => {
        localStorage.setItem("email", JSON.stringify(email));
        console.log(localStorage.getItem("email"));
    }

   
    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        {
            setState(prevState => !prevState);
            console.log(state);
        }
        e.preventDefault();
    }


    return (
        <>
            <Header email={email} />
            
            <div className="login">

                <form className="form_container">
                    <h1 className="title">Iniciar sesión</h1>

                    <div className="input1">
                        <h5>Correo electrónico</h5>
                        <input type="email" name="email" placeholder="Ingrese su correo electrónico" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input2">
                        <h5>Contraseña</h5>
                        
                        <input type={state ? "text" : "password"} name="password" placeholder="Ingrese su contraseña" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn-icon" onClick={toggleBtn}>
                            {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                        </button>

                    </div>
                    <div className="btn-container">
                        <Link to="/">
                            <button className="btn_singIn" onClick={singup}>Ingresar</button>
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
