import React from 'react';
import {CommunityPathListModalBtn} from "../ui/CommunityPathListModalBtn";


export const CommunityPathListContent = () => {
    return (
        <div className="path-list__content bottom__content">
            <h5>{"Community paths"}</h5>
                <React.Fragment>
                    <CommunityPathListModalBtn />
            </React.Fragment>
        </div>
    );
};
