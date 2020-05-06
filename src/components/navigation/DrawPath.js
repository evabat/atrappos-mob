import React from 'react';
import {BottomContainer} from "../ui/BottomContainer";
import {withRouter} from "react-router-dom";

const DrawPathComponent = (props) => {
    const {prop} = props;
    return (
        <BottomContainer content={"drawPath"} />
    );
};

export const DrawPath =  withRouter( DrawPathComponent);