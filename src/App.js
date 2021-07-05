import React from 'react';
import Header from "./components/header.js"
import Sidebar from './components/sidebar.js';
import Feed from './components/feed.js'
import './css/App.css';
import "./css/Header.css"

function App() {
  return (
    <div className="app">
    
     
         <Header/>
         <div className="app_body">
           <Sidebar/>
             
           <Feed/>
         </div>
         
         
         {/* widget */}
         
         
         </div>
  );
}

export default App;
