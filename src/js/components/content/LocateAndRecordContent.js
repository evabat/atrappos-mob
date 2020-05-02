import React, {useContext} from 'react';
import {AppContext} from "../../../App";
import {
    faRecordVinyl
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LocateAndRecordContent = (props) => {
    const {prop} = props;
    const {state, dispatch} = useContext(AppContext);
    return (
        <div className="locate-and-record__content bottom__content">
            <button className="record__btn" onClick={()=> dispatch({ ...state, recording: !state.recording})}>
                <i>
                    <FontAwesomeIcon icon={faRecordVinyl} />
                </i>
                <span>Start recording</span>
            </button>
        </div>
    );
};