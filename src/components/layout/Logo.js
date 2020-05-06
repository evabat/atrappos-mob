import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logoSmall from "../../assets/img/logo-s.png";

export const Logo = (props) => {
    const {place} = props;
    return (
        <Link to={"/"} className={"logo logo--" + (place)} title="Back to home">
            <img src={place === "landing" ? logo : logoSmall} alt="atrappos logo"/>
            <h1>
                Atrappos
            </h1>
        </Link>
    )
};