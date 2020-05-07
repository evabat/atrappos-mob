import React from 'react';
import RadioSelection from "../ui/RadioSelection";
import {objectiveTypes, subjectiveTypes} from "../../lib/constants";

export const RadioSelectionGroup = (props) => {
    const {prop} = props;
    return (
       <div className="select-sub-obj">
           <div className="path-actions" key={"subjective-types"}>
               <label className="path-actions--label">Select path category</label>
               <span className="path-actions--caption">(Defined by path's color)</span>
           </div>
           <RadioSelection list={subjectiveTypes}
                              type={'subjective'}
           />
           <div className="path-actions" key={"objective-types"}>
               <label className="path-actions--label">Select path difficulty level</label>
               <span className="path-actions--caption">(Defined by path's width)</span>
           </div>
           <RadioSelection list={objectiveTypes}
                              type={'objective'}
           />
       </div>
    );
};

