import './app-filter.css';
import React from 'react';

let AppFilter = (props) => {

    let buttonsData = [
        { name: 'all', label: 'Все сотрудники'},
        { name: 'rise', label: 'сотрудники на повышение'},
        { name: 'moreThen1000', label: 'З/П болше 1000$'}
    ]

    let buttons = buttonsData.map(({name, label}) => {
        let active = props.filter === name;
        let claссCss = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                className={`btn ${claссCss}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter