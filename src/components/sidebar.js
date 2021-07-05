import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import "../css/sidebar.css"

function Sidebar() {
    const recentItem =(topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sideBar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1545231097-cbd796f1d95f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80" 
                alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Ajith Sadanandan</h2>
                <h4>sadanananajith@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                 <p>Who viewed your profile</p>
                 <p className="sidebar_statNumber">2500</p>
                </div>
                <div className="sidebar_stat">
                <p>Views on Post</p>
                <p className="sidebar_statNumber">2300</p>

                </div>
                </div>
                <div className="sidebar_button">
                    <p>Recent</p>
                    {recentItem("reactjs")}
                    {recentItem('programing')}
                    {recentItem('software')}
                    {recentItem('developer')}


                </div>
            
        </div>
    )
}

export default Sidebar
