import React,{useState,useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import "../css/feed.css"
import InputOptions from './inputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TodayIcon from '@material-ui/icons/Today';
import Post from "./Post.js";
import {db} from "../firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice.js';


function Feed() {
    const [input,setInput]=useState("")
    const [posts,setPosts]=useState([]);
    const user= useSelector(selectUser);

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])
    
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
           name:user.displayName,
           description:user.email,
           message:input,
            
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

});
setInput("");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
            <div className="feed_input">
             <CreateIcon/>
             <form  >
                 <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Send a post" type="text"/>
                 <button onClick={sendPost} type="submit">Send</button>
             </form>
            </div>
            <div className="feed_inputOptions">
            <InputOptions Icon={ImageIcon} Title="Photo" color="#70B5F9"/>
            <InputOptions Icon={SubscriptionsIcon} Title="Video" color="#E7A33E"/>
            <InputOptions Icon={EventNoteIcon} Title="Event" color="C0CBCD"/>
            <InputOptions Icon={TodayIcon} Title="Write article" color="#7FC15E"/>
            </div>
            </div>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                
                <Post
                 key={id}
                 name={name}
                 description={description}
                 message={message} 
                 photoUrl={photoUrl}
                  />
                
            ))}
            
        </div>
    )
}

export default Feed
