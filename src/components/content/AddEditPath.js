import React from 'react';

import {RadioSelectionGroup} from "./RadioSelectionGroup";

export const AddEditPath = (props) => {
    const {prop} = props;
    return (
       <div className="add-edit-path">
            <RadioSelectionGroup />
       </div>
    );
};