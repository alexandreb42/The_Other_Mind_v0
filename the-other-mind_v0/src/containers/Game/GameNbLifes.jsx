import React from "react";
import {connect} from "react-redux";

import {getData} from "../../actions";
import GameNbLifesComponent from "../../components/Game/GameNbLifesComponent";


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

function GameNbLifes({getData, loading, data, error}) {
    /*React.useEffect(()=>{
        getData(`${ROOT_URL_POKEAPI}/pokemon`);
    },[])
    */
    
    return(
        <div style={style}>
            <h1>Other Player Cards</h1>
            {loading && <p>Cartes du joueur...</p>}
            {data && <GameNbLifesComponent cards={data} />}
            {error && <p>Erreur de chargement des cartes du joueur !</p>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameNbLifes);
