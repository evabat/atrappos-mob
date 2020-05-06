import React from 'react';
import {BottomContainer} from "../ui/BottomContainer";
import {withRouter} from "react-router-dom";

const LocateAndRecordComponent = (props) => {
    const {prop} = props;
    return (
       <BottomContainer content={"locateAndRecord"} />
    );
};

export const  LocateAndRecord  =  withRouter(LocateAndRecordComponent);