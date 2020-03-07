import React from "react";
import {connect} from "react-redux";

import {getData} from "../../actions";
import CreateGameOkComponent from "../../components/Game/CreateGameOkComponent";


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
    color: "red"
};

function CreateGameOk({getData, loading, data, error}) {
    /*React.useEffect(()=>{
        getData(`${ROOT_URL_POKEAPI}/pokemon`);
    },[])
    */
    
    return(
        <div style={style}>
            <h1>Icone de connexion</h1>
            {loading && <p>Icone de connexion...</p>}
            {data && <CreateGameOkComponent cards={data} />}
            {error && <p>Erreur de chargement de l'icone de connexion !</p>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameOk);
