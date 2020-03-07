import React from "react";
import {connect} from "react-redux";

import {getData} from "../../actions";
import IndexBigTitleComponent from "../../components/Home/IndexBigTitleComponent";


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

function IndexBigTitle({getData, loading, data, error}) {
    /*React.useEffect(()=>{
        getData(`${ROOT_URL_POKEAPI}/pokemon`);
    },[])
    */
    
    return(
        <div style={style}>
            <h1>Titre principal</h1>
            {loading && <p>Titre principal...</p>}
            {data && <IndexBigTitleComponent cards={data} />}
            {error && <p>Erreur de chargement du titre principal !</p>}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexBigTitle);
