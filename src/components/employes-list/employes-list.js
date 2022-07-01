import React from 'react';
import EmployesListItem from '../employes-list-item/employes-list-item';
import './employes-list.css'

let EmployesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    let elements = data.map(item => {
        let {id, ...itemProps} = item
        return(
            <EmployesListItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)}/>
        )
    })
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployesList;