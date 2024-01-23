import React from "react";
import '../styles/SocialNetwork.css'

function SocialNetwork({linkNetwork, icon, nameSocial}){
    return(
        <figure className="icon-container">
            <a href={linkNetwork}>
                <img src={ require(`../media/icons/${icon}`) } alt={nameSocial} />
            </a>
        </figure>
    );
}

export default SocialNetwork;