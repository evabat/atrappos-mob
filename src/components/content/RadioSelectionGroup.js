import React from 'react';
import RadioSelection from "../ui/RadioSelection";
import {objectiveTypes, subjectiveTypes} from "../../lib/constants";

export const RadioSelectionGroup = (props) => {
    const {setValues} = props;
    return (
       <div className="select-sub-obj">
           <div className={"path-actions path-actions--objective"}  key={"objective-types"}>
               <label className="path-actions--label">How satisfying do you consider the walking activity in this path?<br/>
                   Focus on the <b>walking</b> experience</label>
               <span className="path-actions--caption">(Defines path's width)</span>
           </div>
           <RadioSelection list={objectiveTypes}
                           setValues={setValues}
                           type={'objective'}
           />
           <div className={"path-actions path-actions--subjective"} key={"subjective-types"}>
               <label className="path-actions--label">How aesthetically pleasing do you find the landscapes in this path?<br/>
                   Focus on the <b>visual</b> experience</label>
               <span className="path-actions--caption">(Defines path's color)</span>
           </div>
           <RadioSelection list={subjectiveTypes}
                           setValues={setValues}
                           type={'subjective'}
           />
       </div>
    );
};

