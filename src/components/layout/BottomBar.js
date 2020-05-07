import React, {useContext} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {
    faDrawPolygon,
    faLocationArrow, faMinus, faPlus,
    faRoute, faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AppContext} from "../../App";

const BottomBarComponent = (props) => {
    const {location} = props;
    const {state, dispatch} = useContext(AppContext);

        if (
            location.pathname.match(/home/) ||
            location.pathname.match(/register/) ||
            location.pathname.match(/login/) ||
            location.pathname.match(/change\/password/)
        ){
            return null;
        }

    return (
       <div className="bottom-bar">
           <div className="toggle-expand" onClick={()=> dispatch({...state, bottomExpanded: !state.bottomExpanded})}>
               <i className={state.bottomExpanded ? "angle-down" : "angle-up"}>
                   <FontAwesomeIcon icon={state.bottomExpanded ? faMinus : faPlus} />
               </i>
           </div>
           <nav>
               <div className="bottom-bar__part bottom-bar__part--left">
                   <NavLink to={"/location"} activeClassName="--active">
                       <i><FontAwesomeIcon icon={faLocationArrow} /></i>
                       <span>RECORD</span>
                   </NavLink>
                   <NavLink to={"/draw"} activeClassName="--active">
                       <i className="polyline-icon"><FontAwesomeIcon icon={faDrawPolygon} /></i>
                       <span>DRAW</span>
                   </NavLink>
               </div>
               <div className="bottom-bar__part bottom-bar__part--right">
                   <NavLink to={"/paths"} activeClassName="--active">
                       <i><FontAwesomeIcon icon={faRoute} /></i>
                       <span>MY PATHS</span>
                    </NavLink>
                   <NavLink to={"/community"} activeClassName="--active">
                       <i><FontAwesomeIcon icon={faUsers} /></i>
                       <span>COMMUNITY</span>
                   </NavLink>
               </div>
               {/*<NavLink to={"/faq"} activeClassName="--active">*/}
               {/*    <i><FontAwesomeIcon icon={faQuestionCircle} /></i>*/}
               {/*    <span>FAQ</span>*/}
               {/*</NavLink>*/}
           </nav>
        
       </div>
    );
};

export const BottomBar = withRouter(BottomBarComponent);