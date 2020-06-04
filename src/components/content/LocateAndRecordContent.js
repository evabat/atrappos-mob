import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../App";
import {
    faRecordVinyl, faStop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {EvaluationModalBtn} from "../ui/EvaluationModalBtn";
import moment from "moment";
import {EditPathBtn} from "../ui/EditPathBtn";
import {defaultObjectiveValue, defaultSubjectiveValue} from "../../lib/constants";
import {DiscardPathBtn} from "../ui/DiscardPathBtn";
import {SavePathBtn} from "../ui/SavePathBtn";
import {SnapSwitch} from "../ui/SnapSwitch";

export const LocateAndRecordContent = () => {
    const {state, dispatch} = useContext(AppContext);
    const NoSleep =  require('nosleep.js');

    useEffect(() => {
        let noSleep = new NoSleep();
        if (state.recording) {
            dispatch({...state,
                clearMap: false,
                objectiveSelection: defaultObjectiveValue,
                subjectiveSelection: defaultSubjectiveValue,
                pathEvaluated: false,
                recordedPath: null,
                area: null,
                distance: null,
                pathName: null,
                pathDescr: null,
                drawType: 'location',
                drawStart: moment(new Date()),
                evaluations: [],
                edited: [],
                snapped: false
            });
            noSleep.enable();
        } else {
            noSleep.disable();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state.recording]);


    const GpsIsOn = (e) => {
        let gpsIsOn = document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control active");
        return gpsIsOn && gpsIsOn.length > 0;
    }

    const DisableGpsBtn = (disable) => {
        let gpsBtn = document.getElementsByClassName("leaflet-control-locate leaflet-bar leaflet-control active");
        gpsBtn[0].style.pointerEvents = disable ? "none" : "initial";
        if (disable) {
            gpsBtn[0].classList.add("disabled")
        } else {
            gpsBtn[0].classList.remove("disabled")
        }
    }


    return (
        <div className="locate-and-record__content bottom__content">
            <h5>Record a path</h5>
            {!state.recordedPath ?
                <button className={"record__btn bottom-action__btn" + (state.recording ? " record__btn--recording": "")}
                        onClick={(e)=> {
                            if(GpsIsOn(e)) {
                                dispatch({ ...state,
                                    recording: !state.recording,
                                });
                                DisableGpsBtn(!state.recording);
                            } else {
                                alert('The GPS must be activated in order to record a path.')
                            }
                        }}>
                    <i>
                        <FontAwesomeIcon icon={!state.recording ? faRecordVinyl : faStop} />
                    </i>
                    <span>{!state.recording ? "Start " : "Stop "} recording</span>
                </button>
            :null}
            {state.recording|| state.recordedPath ?
                <EvaluationModalBtn />:null
            }
            {state.recordedPath ?
              <React.Fragment>
                <EditPathBtn />
                <SnapSwitch type={"recordedPath"}/>
                <DiscardPathBtn type="deleteRecordedPathModal" />
                <SavePathBtn type="saveRecordedPath" />
              </React.Fragment>
            :null
            }
        </div>
    );
};