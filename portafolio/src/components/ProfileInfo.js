import React from "react";
import SocialNetwork from "./SocialNetwork";
import '../styles/ProfileInfo.css'

function ProfileInfo({imgProfile, nameProfile, performance}){
    
    const data = [
        { linkNetwork: "https://open.spotify.com/user/31vse2lhvy5wrrss3p5yzb72ozb4", icon: "spotify.svg", nameSocial:"Spotify"},
        { linkNetwork: "https://github.com/Crissancio", icon: "github.svg", nameSocial:"GitHub"},
        { linkNetwork: "https://www.facebook.com/NoCristhian", icon: "facebook.svg", nameSocial:"Facebook"},
        { linkNetwork: "https://www.instagram.com/cris_crip/", icon: "instagram.svg", nameSocial:"Instagram"},
        { linkNetwork: "https://www.tiktok.com/@crissancio", icon: "tik-tok.svg", nameSocial:"Tik Tok"}
    ];

    return(
        <div className="profile-info-container">
            <figure className="figure-container">
                <img src={ require(`../media/${imgProfile}`) } alt='img profile'/>
            </figure>
            <div className="info-container">
                <h1 className="name-profile">
                    {nameProfile}
                </h1>
                <p className="performance-profile">{performance}</p>
                <div className="social-network-container">
                    {data.map((item,index) => (
                        <SocialNetwork key={index} {...item} />
                    ))}
                </div>
            </div>
            
        </div>        
    );
}

export default ProfileInfo;