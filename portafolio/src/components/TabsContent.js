import React from "react";
import '../styles/TabsContent.css'

function TabsContent({imagen,alternativo}){

    return(
        <div className="img-container">
            <img src={require(`../media/${imagen}`)} alt={alternativo}/>
        </div>
    );
}

export default TabsContent;