import React from 'react'
import "../css/inputOptions.css"
function InputOptions({Icon,Title,color}) {
    return (
        <div className="inputOptions">
            <Icon style={{color: color}}/>
            <h4>{Title}</h4>
            
        </div>
    )
}

export default InputOptions;