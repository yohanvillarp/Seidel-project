import React from 'react'
import './Login.css';

const LoginView = () => {
    return (
        <div className="login">
            <h1 className='login__title'>Login</h1>
            <form className="login__form" >
                <input type="text" placeholder="Ingrese su nombre de usuario" />
                <input type="password" placeholder="Ingrese su contraseña" />
                <button type="submit">Login</button>
            </form>

            <footer className="login__footer">
                <a href="/signup"><p>¿No tienes una cuenta?</p></a>
                <a href="/reset-password">
                    <p>¿Olvidaste tu contraseña?</p>
                </a>
            </footer>

        </div>
    )
}

export default LoginView