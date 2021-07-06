
import React from 'react'
import "../css/widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle =(heading,subtitle)=>(
     <div className="widgets_article">
         <div className="widgets_articleLeft">
         <FiberManualRecordIcon/>
         </div>     

         <div className="widgets_articleRight">
             <h4>{heading}</h4>
             <p>{subtitle}</p>
         </div>
     </div>

    );
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
           
            {newsArticle("Corona virus ","Top news - 2345 readers")}
            {newsArticle("Nifty at 16k","Finance - 8000 readers")}
            {newsArticle("React is Awesome"," Tech- 5456 readers")}
        
        </div>
    )
}

export default Widgets
