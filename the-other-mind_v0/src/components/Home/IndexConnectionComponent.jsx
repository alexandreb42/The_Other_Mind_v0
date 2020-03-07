import React, { useContext, useState } from "react"


const handleClick = () => {
    window.body.className += "hidden";
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