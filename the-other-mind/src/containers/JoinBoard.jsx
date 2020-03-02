import React from "react";
import {connect} from "react-redux";

import '../styles/components/join.css';
import {getData} from "../actions";
import JoinBoardComponent from "../components/JoinBoardComponent";

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

function JoinBoard({getData, loading, data, error}) {
    /*React.useEffect(()=>{
        getData(`${ROOT_URL_POKEAPI}/pokemon`);
    },[])
    */

    return(
        <>
        <div style={style}>
            <h1>Join Board Container</h1>
            {loading && <p>Chargement...</p>}
            {data && <JoinBoardComponent gameModules={data} />}
            {error && <p>Erreur de chargement du plateau de jeu !</p>}
        </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinBoard);