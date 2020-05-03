import React, {useContext} from 'react';
import {AppContext} from "../../../App";
import {
    faRecordVinyl
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {mapEvent} from "../../../lib/utils";

export const LocateAndRecordContent = (props) => {
    const {prop} = props;
    const {state, dispatch} = useContext(AppContext);

    const GpsIsOn = (e) => {
        let gpsIsOn = document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control active following");
        return gpsIsOn && gpsIsOn.length > 0;

    }

    const DisableGpsBtn = (disable) => {
        let gpsBtn = document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control active following");
        gpsBtn[0].style.pointerEvents = disable ? "none" : "initial";
        if (disable) {
            gpsBtn[0].classList.add("disabled")
        } else {
            gpsBtn[0].classList.remove("disabled")
        }

    }
    return (
        <div className="locate-and-record__content bottom__content">
            <button className="record__btn"
                    onClick={(e)=> {
                        if(GpsIsOn(e)) {
                            dispatch({ ...state, recording: !state.recording});
                            DisableGpsBtn(!state.recording);
                        } else {
                            alert('You must activate GPS to record a path :)')
                        }
                    }}>
                <i>
                    <FontAwesomeIcon icon={faRecordVinyl} />
                </i>
                <span>Start recording</span>
            </button>
        </div>
    );
};