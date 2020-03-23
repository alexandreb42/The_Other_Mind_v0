import React from "react";
import {connect} from "react-redux";

import '../styles/components/socket.css';
import {getData} from "../actions";
import SocketComponent from "../components/SocketComponent";

const mapStateToProps = state => ({
    data: state.data,
    error: state.error,
    loading: state.loading
});

const mapDispatchToProps = {
    getData
};

//const ROOT_URL_POKEAPI = "https://pokeapi.co/api/v2";

const style = {
    border:"solid blue 2px",
    color: "blue"
};

function Socket({getData, loading, data, error}) {
    /*React.useEffect(()=>{
        getData(`${ROOT_URL_POKEAPI}/pokemon`);
    },[])
    */

    return(
        <>
        <div style={style}>
            <h1>Join Board Container</h1>
            {loading && <p>Chargement de la socket...</p>}
            {data && <SocketComponent pseudoname={data} />}
            {error && <p>Erreur de chargement de la socket !</p>}
        </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket);