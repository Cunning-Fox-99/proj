import React from "react";
import {Link} from "react-router-dom";
import './nav.scss'

export default function Nav() {

    return <div className="nav">
        <Link to={'/'} className="nav__logo">Logo</Link>
        <Link to={'/categories'} className="nav__item">Get started</Link>
        <Link to={'/login'} className="nav__item">Login/Registration</Link>
        <Link to={'/account'} className="nav__item">Account</Link>
        <Link to={'/chats'} className="nav__item">Chats</Link>
    </div>
}