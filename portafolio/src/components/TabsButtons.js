import React from "react";
import '../styles/TabsButtons.css'

function TabsButtons(){
    return(
        <div className="tabs-buttons-container">
            <div className="port-container">
                <p>Portfolio</p>
            </div>
            <div className="skills">
                <p>Skills</p>
            </div>
        </div>
    );
}

export default TabsButtons;