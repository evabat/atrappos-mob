import React, {useContext} from 'react';
import {EvaluationModalBtn} from "../ui/EvaluationModalBtn";
import {EditPathBtn} from "../ui/EditPathBtn";
import {SavePathBtn} from "../ui/SavePathBtn";
import {AppContext} from "../../App";
import {DrawPathBtn} from "../ui/DrawPathBtn";
import {ErasePathBtn} from "../ui/ErasePathBtn";

export const DrawPathContent = () => {
    const {state} = useContext(AppContext);
    return (
        <div className="draw-path__content bottom__content">
            <h5>Draw a path</h5>
            {state.disableDraw && !state.drawnPath ?
                <div className="disable-draw__notification">
                    {"You need to zoom the map more to draw a path"}
                </div>:null
            }
            {!state.drawnPath ?
                <DrawPathBtn />
            :null
            }
            <EvaluationModalBtn />
            {state.drawnPath ?
                <React.Fragment>
                    <EditPathBtn />
                    <ErasePathBtn />
                    <SavePathBtn type="saveDrawnPath" />
                </React.Fragment>
                :null
            }
        </div>
    );
};