import React from 'react';
import {BottomContainer} from "../ui/BottomContainer";
import {withRouter} from "react-router-dom";

const CommunityPathListComponent = () => {
    return (
       <BottomContainer content={"communityPathList"} />
    );
};

export const  CommunityPathList  =  withRouter(CommunityPathListComponent);