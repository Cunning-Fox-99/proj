import React from "react";
import './login.scss'
import {Link} from "react-router-dom";

export default function Login() {

    return <div className="login">
        <h1>Login</h1>

        <div className="login__wrapper">

            <div className="login__form">

                <label className="login__input">Email
                    <input type="text"/>
                </label>

                <label className="login__input">Password
                    <input type="password"/>
                </label>

            </div>

            <span className="login__bottom">Don't have account? <Link to='/registration'>Create account</Link></span>
            <button className="login__button button">Login</button>
        </div>

    </div>
}