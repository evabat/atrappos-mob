import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {LocateAndRecordContent} from "../content/LocateAndRecordContent";
import {DrawPathContent} from "../content/DrawPathContent";

export const BottomContainer = (props) => {
    const {content} = props;
    const [expanded, setExpanded] = useState(true);

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
            <div className="toggle-expand" onClick={()=>setExpanded(!expanded)}>
                <i className={expanded ? "angle-down" : "angle-up"}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </i>
            </div>
            <div className="bottom-container__content">
                {renderSwitch(content)}
            </div>
        </div>
    );
};