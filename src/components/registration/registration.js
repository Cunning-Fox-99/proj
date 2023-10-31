import React from "react";
import {Link} from "react-router-dom";

export default function Registration() {

    return <div className="login">
        <h1>Sign up</h1>

        <div className="login__wrapper">

            <div className="login__form">
                <label className="login__input"><span>Email <sup>*</sup></span>
                    <input type="text"/>
                </label>

                <label className="login__input">
                    <span>Password <sup>*</sup></span>
                    <input type="password"/>
                </label>

                <label className="login__input">
                    <span>Repeat password <sup>*</sup></span>
                    <input type="password"/>
                </label>
            </div>

            <span className="login__bottom">Have account? <Link to='/registration'>Login</Link></span>
            <button className="login__button button">Registration</button>
        </div>

    </div>
}