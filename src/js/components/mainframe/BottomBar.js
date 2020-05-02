import React from 'react';
import {NavLink} from "react-router-dom";
import {
    faDrawPolygon,
    faLocationArrow,
    faQuestionCircle,
    faRoute, faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BottomBar = (props) => {
    const {prop} = props;
    return (
       <div className="bottom-bar">
           <nav>
               <NavLink to={"/location"} activeClassName="--active">
                   <i><FontAwesomeIcon icon={faLocationArrow} /></i>
                   <span>RECORD</span>
               </NavLink>
               <NavLink to={"/draw"} activeClassName="--active">
                   <i className="polyline-icon"><FontAwesomeIcon icon={faDrawPolygon} /></i>
                   <span>DRAW</span>
               </NavLink>
               <NavLink to={"/paths"} activeClassName="--active">
                   <i><FontAwesomeIcon icon={faRoute} /></i>
                   <span>PATHS</span>
                </NavLink>
               <NavLink to={"/community"} activeClassName="--active">
                   <i><FontAwesomeIcon icon={faUsers} /></i>
                   <span>USERS</span>
               </NavLink>
               {/*<NavLink to={"/faq"} activeClassName="--active">*/}
               {/*    <i><FontAwesomeIcon icon={faQuestionCircle} /></i>*/}
               {/*    <span>FAQ</span>*/}
               {/*</NavLink>*/}
           </nav>
        
       </div>
    );
};