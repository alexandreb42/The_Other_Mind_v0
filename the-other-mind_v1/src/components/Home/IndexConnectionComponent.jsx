import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";


const handleClick = () => {
    //window.body.className += "hidden";
    console.log("Clic sur le profil !");
}

// onClick={()=>handleClick()}
export default function IndexConnectionComponent({gameModules}) {
    return(
    <>
        <Link className="profil" to="/api/stuff" />

    </>
    )
}