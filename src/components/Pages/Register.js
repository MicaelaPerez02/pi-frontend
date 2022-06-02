import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Register.css";
import "../Header/HeaderRegister";
import "../../styles/Header.css";
import Footer from "../Footer/Footer";
import "../../styles/Footer.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HeaderRegister from "../Header/HeaderRegister";


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
            <div className="register_container">
                <form className="form_register" onSubmit={handleSubmit(onSubmit)} >
                    <h1 className="form_title">Crear Cuenta</h1>
                    <form className="form_register">
                        <div className="container-fullName">
                            <div>
                                <h4 className="inputFullName">Nombre</h4>
                                <input className="input_f" type="text" placeholder="Nombre"{...register('nombre', {
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
                                <input className="input_f" type="text" placeholder="Apellido" {...register('apellido', {
                                    required: {
                                        value: true,
                                        message: "*Este campo es requerido"
                                    }
                                })} />
                                {errors.apellido && <span className="errors">{errors.apellido.message}</span>}
                            </div>
                        </div>
                        <h4 className="input_text">Email</h4>
                        <input className="input" type="email" placeholder="ejemplo@gmail.com"   {...register("email", {
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
                        <h4 className="input_text">Contraseña</h4>
                        <div className="inputWrapper">
                            <input className="input" type={state ? "text" : "password"} name="password" placeholder="Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "*La contraseña es requerida"
                                },
                                minLength: {
                                    value: 7,
                                    message: "*La contraseña debe tener mas de 6 caracteres"
                                }
                            })} />
                            <button className="btn-icon-reg" onClick={toggleBtn}>
                                {state ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                            </button>

                        </div>
                        {errors.password && (<span className="errors">{errors.password.message}</span>)}
                        <h4 className="input_text">Confirmar contraseña </h4>
                        <div className="inputWrapper">
                            <input className="input" type={state1 ? "text" : "password"} placeholder="Password"  {...register("passwordConfirmation", {
                                required: "*Por favor, confirma la contraseña!",
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "*Las contraseñas no coinciden";
                                    }
                                }
                            })}
                            />
                            <button className="btn-icon-reg" onClick={toggleBtn2}>
                                {state1 ? <AiOutlineEye className="icon-eyeBlind-reg" /> : <AiOutlineEyeInvisible className="icon-eyeBlind-reg" />}
                            </button>

                        </div>
                        {errors.passwordConfirmation && (<span className="errors">{errors.passwordConfirmation.message}</span>
                        )}
                    </form>
                    <div className="btn_register">
                        <input type="submit" value="Crear Cuenta" />
                    </div>
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
