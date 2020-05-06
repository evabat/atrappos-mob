import React, {useEffect, useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default (props) => {
    const { list, type, sendData, pathObjective, pathSubjective } = props;

    const [objSelectedValue, setObjSelectedValue] = useState(list[0]);
    const [subjSelectedValue, setSubjSelectedValue] = useState(list[0]);

    const onSelect = (e, type) => {
        e.target = {};
        e.target.name = type;
        sendData(e);
    }

    useEffect(()=> {
        let result = list.filter(obj => {
            return obj.value === pathObjective
        });
        setObjSelectedValue(result[0])
        console.log(result[0], pathObjective)
    }, [pathObjective]);

    useEffect(()=> {
        let result = list.filter(obj => {
            return obj.value === pathSubjective
        });
        setSubjSelectedValue(result[0])
    }, [pathSubjective]);

    return (
        <Dropdown options={list}
                  onChange={(e)=> {onSelect(e, type)}}
                  value={type === "objective" ? objSelectedValue : subjSelectedValue}
                  className={type}
                  placeholderClassName= {type === "objective" ? objSelectedValue.className : subjSelectedValue.className}
                  placeholder="Select an option" />
    )
};
