import {LOAD_DATA, SUCCESS_DATA, ERROR_DATA} from "../constants/actionTypes";


export const getData = url => (dispatch) => {
    dispatch({type: LOAD_DATA});
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch({ type: SUCCESS_DATA, data}))
    .catch(error => dispatch({ type: ERROR_DATA, error}));
};
