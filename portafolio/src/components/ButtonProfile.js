import React from "react";
import '../styles/ButtonProfiles.css'
import download from '../media/icons/Bottom Alignment.svg';

function ButtonProfiles(){
    return(
        <div className="buttons-container">
            <button className="cv-button">
                Download CV
                <img src={download} alt='download img'/>
            </button>
            <button className="contact-button">
                Contact Me
            </button>
        </div>
    );
}

export default ButtonProfiles;