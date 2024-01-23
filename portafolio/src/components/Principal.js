import React from "react";
import '../styles/Principal.css';
import ProfileInfo from "./ProfileInfo";
import ProfileFacts from "./ProfileFacts";
import ButtonProfiles from "./ButtonProfile";
import TabsButtons from "./TabsButtons";
import TabsContent from "./TabsContent";

function Principal(){

    const gallery=[
        {imagen: "img_1.jpeg",alternativo:"img_1"},
        {imagen: "img_2.jpeg",alternativo:"img_2"},
        {imagen: "img_3.jpeg",alternativo:"img_3"},
        {imagen: "img_4.jpeg",alternativo:"img_4"},
        {imagen: "img_5.jpeg",alternativo:"img_5"},
        {imagen: "img_6.jpeg",alternativo:"img_6"}
    ];


    return(
        <div className="principal-container">
            <ProfileInfo 
                imgProfile="perfil_improvisado.jpeg"
                nameProfile="Cristhian Alvarez"
                performance="Super Super Junior"/>

            <ProfileFacts
                yearExp= "-10"
                compPro= "1/2"
                satisfaceCustomer= "-10"/>

            <ButtonProfiles />

            <TabsButtons />
            
            <div className="tabs-container">
                {gallery.map((item,index)=>(
                    <TabsContent key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
export default Principal;