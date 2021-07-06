import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import "../css/headerOptions.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';

function HeaderOptions({Icon,title,avatar,onClick}) {
    const user= useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOptions">
            {Icon && <Icon className="headerOption_icon"/>}
            {avatar && <Avatar className="headerOption_icon">{user?.displayName[0]}</Avatar>}
            <h3 className="headerOptions_title">{title}</h3>

            
        </div>
    )
}

export default HeaderOptions
