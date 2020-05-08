import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from "../../App";
export default (props) => {
    const { list, type } = props;

    const [objSelectedValue, setObjSelectedValue] = useState(list[0]);
    const [subjSelectedValue, setSubjSelectedValue] = useState(list[0]);
    const {state, dispatch} = useContext(AppContext)

    const onChange = (e, type) => {
        if (type === "objective") {
            dispatch({...state, objectiveSelection: e.target.value})
        }
        if (type === "subjective") {
            dispatch({...state, subjectiveSelection: e.target.value})
        }
    }

    useEffect(()=> {
        setObjSelectedValue(state.objectiveSelection)
    }, [state.objectiveSelection]);

    useEffect(()=> {
        setSubjSelectedValue(state.subjectiveSelection)
    }, [state.subjectiveSelection]);

    return (
        <div className={"radio-container " + type}>
            <div className="radio-tile-group">
                {list.map((el) => {
                    return <div className="input-container" key={el.className + "-key"}>
                        <input id={type + "-" + el.className}
                               checked={el.value === (type === 'objective' ? state.objectiveSelection : state.subjectiveSelection)}
                               onChange={(e)=> onChange(e, type)}
                               className="radio-button"
                               type="radio" name={"radio-" + type}
                               value={el.value}
                        />
                        <div className="radio-tile">
                            <label htmlFor={type + "-" + el.className}
                                   className={"radio-tile-label " + (type + "-" + el.className)}>
                                {el.label}
                            </label>
                        </div>
                    </div>
                })}
            </div>
        </div>
        // <Dropdown options={list}
        //           onChange={(e)=> {onSelect(e, type)}}
        //           value={type === "objective" ? objSelectedValue : subjSelectedValue}
        //           className={type}
        //           placeholderClassName= {type === "objective" ? objSelectedValue.className : subjSelectedValue.className}
        //           placeholder="Select an option" />
    )
};
