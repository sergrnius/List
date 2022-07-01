import React from 'react';
import './app-info.css'

let AppInfo = ({increased, employes}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employes}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo