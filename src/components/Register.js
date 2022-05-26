import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login-Register.css";
import HeaderRegister from "./Header-Register";
import "../styles/Header.css";
import Footer from "./Footer";
import "../styles/Footer.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";


function Register() {

    const [state, setState] = useState(false);
    const toggleBtn = (e) => {
        {
            setState(prevState => !prevState);
        }
        e.preventDefault();

    }
    const [state1, setState1] = useState(false);
    const toggleBtn2 = (e) => {
        {
            setState1(prevState => !prevState);
        }
        e.preventDefault();
    }

    const { register, formState: { errors }, getValues, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <HeaderRegister />
            <div className="login">
                <form className="form_container" onSubmit={handleSubmit(onSubmit)} >
                    <h1 >Crear Cuenta</h1>
                    <form className="form_container">
                        <div className="container-fullName">
                            <div>
                                <h4 className="inputFullName">Nombre</h4>
                                <input className="inputs-Data-fullName" type="text" placeholder="Nombre"{...register('nombre', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "El campo nombre debe tener menos de 10 caracteres"
                                    }
                                })} />
                                {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                            </div>
                            <div>
                                <h4 className="inputFullName">Apellido</h4>
                                <input className="inputs-Data-fullName" type="text" placeholder="Apellido" {...register('apellido', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    }
                                })} />
                                {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                            </div>
                        </div>
                        <h4>Email</h4>
                        <input className="inputEmail" type="email" placeholder="ejemplo@gmail.com"   {...register("email", {
                            required: {
                                value: true,
                                message: "*Este campo es requerido"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "*El formato del email no es correcto"
                            }
                        })} />
                        {errors.email && <span className="errors">{errors.email.message}</span>}
                        <h4 >Contraseña</h4>
                        <div className="inputWrapper">
                            <input className="inputs-Data" type={state ? "text" : "password"} name="password" placeholder="Password" {...register("password", { required: "*La contraseña es requerida" })} />
                            <button className="btn-icon" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                            </button>

                        </div>
                        {errors.password && (<span className="errors">{errors.password.message}</span>)}
                        <h4 >Confirmar contraseña </h4>
                        <div className="inputWrapper">
                            <input className="inputs-Data" type={state1 ? "text" : "password"} placeholder="Password"  {...register("passwordConfirmation", {
                                required: "*Por favor, confirma la contraseña!",
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "*Las contraseñas no coinciden";
                                    }
                                }
                            })}
                            />
                            <button className="btn-icon" onClick={toggleBtn2}>
                                {state1 ? <AiOutlineEye className="icon-eyeBlind" /> : <AiOutlineEyeInvisible className="icon-eyeBlind" />}
                            </button>

                        </div>
                        {errors.passwordConfirmation && (<span className="errors">{errors.passwordConfirmation.message}</span>
                        )}
                    </form>

                    <input className="btn_singIn" type="submit" value="Ingresar" />
                    {/* <button className="btn_singIn">Ingresar</button> */}
                    <br />
                    <p className="text_register">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="btn_register_link">
                            Inicia Sesión
                        </Link>
                    </p>
                </form>
            </div>
 

            <Footer />
        </>
    );
}

export default Register;
