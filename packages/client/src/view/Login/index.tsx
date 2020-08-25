import React, { useState } from 'react';

import {Link} from 'react-router-dom';

import logoImg from '../../alexa.svg'; 

import './style.css';

function Login(){

    return (
        <div className="text-center vsc-initialized signin-page">
            <form className="form-signin">
                <img className="mb-4" src={logoImg} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Fazer Login</h1>

                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required />

                <label htmlFor="inputPassword" className="sr-only">Senha</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Senha" required />

                {/* <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div> */}

                <button className="btn btn-lg btn-info btn-block" type="submit">Entrar</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
    )
};

export default Login;