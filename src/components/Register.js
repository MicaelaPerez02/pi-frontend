import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login-Register.css";
import HeaderRegister from "./Header-Register";
import "../styles/Header.css";
import Footer from "./Footer";
import "../styles/Footer.css";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai";
import { useState } from "react";


function Register() {

    const [state , setState] = useState(false);
    const toggleBtn = (e) => {{
        setState(prevState => !prevState);
    }
    e.preventDefault();

    
}
const [state1 , setState1] = useState(false);
const toggleBtn2 = (e) => {{
    setState1(prevState => !prevState);
}
e.preventDefault();

}

    return (
        <>
        <HeaderRegister/>
        <div className="login">
       
            <form className="form_container">
                <h1 >Crear Cuenta</h1>
                <form className="input_container">
                  
                    <div className="container-fullName">

                        <div>
                            

                    <h4 className="inputFullName">Nombre</h4>
                    <input className="inputs-Data-fullName" type="text" name="Nombre" placeholder="Nombre" />
                    </div>
                    <div>
                    <h4 className="inputFullName">Apellido</h4>
                    <input className="inputs-Data-fullName" type="text" name="Apellido" placeholder="Apellido" />
                    </div>
                    </div>
                    <h4 >Email</h4>
                    <input className="inputs-Data" type="email" name="Email" placeholder="Email"  /> 
                    <h4 >Contraseña</h4>
                    <div className="inputWrapper">
                    <input className="inputs-Data" type={state ? "text": "password"} name="password" placeholder="Password" />
                    <button className="btn-icon" onClick={toggleBtn}>
                    {state ?   <AiOutlineEye className="icon-eyeBlind"/>: <AiOutlineEyeInvisible className="icon-eyeBlind"/>}
                    </button>
                    </div>
                    <h4 >Confirmar Contraseña </h4>
                    <div className="inputWrapper">
                    <input className="inputs-Data" type={state1 ? "text": "password"} name="password" placeholder="Password" />
                    <button className="btn-icon" onClick={toggleBtn2}>
                    {state1 ?   <AiOutlineEye className="icon-eyeBlind"/>: <AiOutlineEyeInvisible className="icon-eyeBlind"/>}
                    </button>
                    </div>
                </form>
                <br/> <br/>
                <button className="btn_singIn">Ingresar</button>
               <br/>
                <p className="text_register">
                    ¿Aún no tenes cuenta?{" "}
                    <Link to="/login" className="btn_register_link">
                        Inicia Sesión
                    </Link>
                </p>
            </form>
        </div>

        <Footer/>
        </>
    );
}

export default Register;
