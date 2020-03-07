import {LOAD_DATA, SUCCESS_DATA, ERROR_DATA} from "../constants/actionTypes";

const initialState = {
    data: [],
    error: null,
    loading: false
}

// action : { type: ACTION_TYPE, data: <?>, error: <?> }
export default function(state=initialState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                loading: true
            };
        case SUCCESS_DATA:
            return {
                ...state,
                loading: false,
                data: action.data.results
            };
            case ERROR_DATA:
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
        default:
            return state;
    }
}