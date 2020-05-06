import React, {useContext, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {LocateAndRecordContent} from "../content/LocateAndRecordContent";
import {DrawPathContent} from "../content/DrawPathContent";
import {withRouter} from "react-router-dom";
import {AppContext} from "../../App";

const BottomContainerComponent = (props) => {
    const {content, location} = props;
    const {state} = useContext(AppContext);
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        setExpanded(state.bottomExpanded)
    },[state.bottomExpanded]);

    if (
        location.pathname.match(/home/) ||
        location.pathname.match(/register/) ||
        location.pathname.match(/login/) ||
        location.pathname.match(/change\/password/)
    ){
        return null;
    }


    const renderSwitch = (cont) => {
        switch(cont) {
            case "locateAndRecord":
                return <LocateAndRecordContent/>
            case "drawPath":
                return <DrawPathContent />
        }
    }

    return (
        <div className={"bottom-container" + (expanded ? " expanded": "")}>
            <div className="bottom-container__content">
                {renderSwitch(content)}
            </div>
        </div>
    );
};

export const BottomContainer = withRouter(BottomContainerComponent);