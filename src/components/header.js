import React from 'react'
//rfce
import "../css/Header.css"
import HeaderOptions  from './headerOptions';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SearchIcon from '@material-ui/icons/Search';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function Header() {
    return (
        <div className="header">
          

            <div className="header_left">
            
              <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
              alt="" />
              
           
              <div className="header_search">
                  <SearchIcon/>
                  <input type="text"/>
                  
              </div>
            </div>
            <div className="header_right">
             <HeaderOptions Icon={HomeIcon}title="Home"/>
             <HeaderOptions Icon={SupervisorAccountIcon}title="Network"/>
             <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
             <HeaderOptions Icon={ChatIcon}title="Messaging"/>
             <HeaderOptions Icon={NotificationsNoneIcon}title="Notifications"/>
             <HeaderOptions avatar="\public\avatar.png" title="Me"/>

            </div>
        </div>
    )
}

export default Header
