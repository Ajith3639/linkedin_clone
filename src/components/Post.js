import React from 'react'
import "../css/post.css"
import  Avatar  from '@material-ui/core/Avatar'
import InputOptions from './inputOptions'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import InsertCommentRoundedIcon from '@material-ui/icons/InsertCommentRounded';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Post({name,description,message,photoUrl}) {
     
    return (
        <div className="post">
        <div className="post_header">
            <Avatar/>

            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_button">
            <InputOptions Icon={ThumbUpAltIcon} Title="Like" color="gray"/>
            <InputOptions Icon={InsertCommentRoundedIcon} Title="Comment" color="gray"/>
            <InputOptions Icon={SendIcon} Title="Share" color="gray"/>
            <InputOptions Icon={ShareIcon} Title="Sent" color="gray"/>

        </div>
        </div>
        
    )
}

export default Post
