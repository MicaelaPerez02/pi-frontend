import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogin from "../Header/HeaderLogin";
import "../../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const singup = () => {
        localStorage.setItem("email", JSON.stringify(email));
        console.log(localStorage.getItem("email"));

        localStorage.setItem("avatar", JSON.stringify(email[0].toUpperCase()));
        console.log(localStorage.getItem("avatar"));
    }

    const [state, setState] = useState(false);

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        console.log(state);
        e.preventDefault();
    }

    return (
        <>
            <div className="headerLog2">
                {email.length < 500 ? <HeaderLogin /> : <Header email={email}/>}
            </div>
            <div className="login">
                <form className="form_container">
                    <Link to={'/'} style={{textDecoration:"none"}}>
                        <FaWindowClose className="iconCloseLogin" />
                    </Link>
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
