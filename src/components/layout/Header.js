import React from 'react';

import {Logo} from "./Logo";
import {withRouter} from "react-router-dom";

const HeaderComponent = (props) => {
    const{location} = props;

    if (
        location.pathname.match(/home/) ||
        location.pathname.match(/register/) ||
        location.pathname.match(/login/) ||
        location.pathname.match(/change\/password/)
    ){
        return <header/>
    }

    return (
        <header>
            <div className="header">
                <Logo place="map" />
            </div>
        </header>
    );
};

export const Header = withRouter(HeaderComponent);