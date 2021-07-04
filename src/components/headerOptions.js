
import React from 'react'
import "../css/headerOptions.css"
function HeaderOptions({Icon,title,avatar}) {
    return (
        <div  className="headerOptions">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar && <avatar className="headerOption_icon" src={avatar}/>}
            <h3 className="headerOptions_title">{title}</h3>

            
        </div>
    )
}

export default HeaderOptions
