import React from 'react';

import {Logo} from "./Logo";

export const Header = (props) => {
    const {prop} = props;
    return (
        <header>
            <div className="header">
                <Logo place="map" />
            </div>

        </header>
    );
};