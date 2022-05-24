import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Header from './Header';
import '../styles/Header.css'
import Footer from './Footer';

function Login() {
    return (
        <div className='login'>
                <form className='form_container'>
                    <h1 className='title'>Iniciar sesión</h1>
                    <form className='input_container'>
                        <h5 className='text'>Correo electronico</h5>
                        <input type="text" name="email" placeholder="Email" />
                        <h5 className='text'>Contraseña</h5>
                        <input type="password" name="password" placeholder="Password" />
                    </form>
                    <button className='btn_singIn'>Ingresar</button>
                    <p className='text_register'>¿Aún no tenes cuenta? <Link to='/register' className='btn_register_link'>Registrate</Link></p>
                </form>
        </div>
    )
}

export default Login;