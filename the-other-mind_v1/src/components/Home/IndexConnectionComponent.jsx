import React, { useContext, useState } from "react"


const handleClick = () => {
    //window.body.className += "hidden";
    console.log("Clic sur le profil !");
}

export default function IndexConnectionComponent({gameModules}) {
    return(
        <>
        <a className="profil" onClick={()=>handleClick()}>
            Profil
        </a>
        </>
    )
}