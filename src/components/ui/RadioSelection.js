import React, {useContext, useEffect, useState} from 'react';
import 'react-dropdown/style.css';
import {AppContext} from "../../App";
export default (props) => {
    const { list, type } = props;

    const [objSelectedValue, setObjSelectedValue] = useState(list[0]);
    const [subjSelectedValue, setSubjSelectedValue] = useState(list[0]);
    const {state, dispatch} = useContext(AppContext)

    const onSelect = (e, type) => {
        console.log(e.target)
        // dispatch({...state, objectiveSelection: result[0].value})
        // dispatch({...state, objectiveSelection: result[0].value})
    }

    useEffect(()=> {
        let result = list.filter(obj => {
            return obj.value === state.objectiveSelection
        });
        setObjSelectedValue(result[0])
    }, [state.objectiveSelection]);

    useEffect(()=> {
        let result = list.filter(obj => {
            return obj.value === state.subjectiveSelection
        });
        setSubjSelectedValue(result[0])
    }, [state.subjectiveSelection]);

    return (
        <div className={"radio-container " + type}>
            <div className="radio-tile-group">
                {list.map((el) => {
                    return <div className="input-container">
                        <input id={type + "-" + el.className}
                               className="radio-button"
                               type="radio" name="radio"
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
