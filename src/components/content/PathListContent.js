import React, {useContext} from 'react';
import {AppContext} from "../../App";
import {PathListModalBtn} from "../ui/PathListModalBtn";
import {EvaluationModalBtn} from "../ui/EvaluationModalBtn";
import {EditPathBtn} from "../ui/EditPathBtn";
import {SavePathBtn} from "../ui/SavePathBtn";
import {SnapSwitch} from "../ui/SnapSwitch";
import {BackToListBtn} from "../ui/BacktoListBtn";



export const PathListContent = (props) => {
    const {state} = useContext(AppContext);
    return (
        <div className="path-list__content bottom__content">
            <h5>
                {!!state.selectedPath ?
                    <BackToListBtn />:null}
                {!!state.selectedPath ? "Modifying " + state.pathName : "My paths" }</h5>

                <React.Fragment>
                {!state.selectedPath ?
                    <PathListModalBtn />:
                    <React.Fragment>
                        <EvaluationModalBtn />
                            {state.drawType && state.drawType === "location" ?
                                <SnapSwitch type={"selectedPath"}/>:null
                            }
                        <EditPathBtn />
                        <SavePathBtn type="saveSelectedPath" />
                    </React.Fragment>
                }
            </React.Fragment>
        </div>
    );
};
