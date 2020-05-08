import React, { useContext, useState } from "react"
import {Link} from "react-router-dom"

import '../styles/home.css';
import IndexPlayComponent from "./Home/IndexPlayComponent";
import IndexBigTitleComponent from "./Home/IndexBigTitleComponent";
import IndexConnectionComponent from "./Home/IndexConnectionComponent";
import SocketComponent from "./SocketComponent";

export default function HomeComponent({gameModules}) {
    return(
        <div className="homeComponent">
            <IndexBigTitleComponent className="bigTitle" />
            <IndexPlayComponent />
            <IndexConnectionComponent />
        </div>
    )
}
