import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons";
import {AppContext} from "../../App";



export const EvaluationModalBtn = (props) => {
    const {state, dispatch} = useContext(AppContext)

    return (
      <div className="show-eval-modal__btn" onClick={()=> dispatch({...state, showEvaluationModal: true})}>
          <i>
              <FontAwesomeIcon icon={faCheckSquare} />
          </i>
          <span>Evaluate Path</span>
      </div>
    );
};

