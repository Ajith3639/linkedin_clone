import React, { useEffect } from 'react';
import Header from "./components/header.js";
import { useSelector } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice.js';
import Sidebar from './components/sidebar.js';
import Feed from './components/feed.js'
import { useDispatch } from 'react-redux';
import './css/App.css';
import Login from './components/Login';
import { auth } from './firebase.js';
import Widgets from "./components/Widgets";

function App() {
  const user=useSelector(selectUser);
   const dispatch = useDispatch();
   useEffect(() =>{
     auth.onAuthStateChanged((userAuth)=> {
       if(userAuth){
         dispatch(
           login({
      
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,


           })
         );
       }else{
         dispatch(logout());
       }
     });
   }, []);
  return (
    <div className="app">
     <Header/>
         {!user ? (
           <Login/>
         ):(<div className="app_body">
           <Sidebar/>

           <Feed/>
           <Widgets/>
         </div>
         )}
         </div>
        
         
  );
}

export default App;
