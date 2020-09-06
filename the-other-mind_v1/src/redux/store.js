import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createSelectorHook } from "react-redux";
import thunk from "redux-thunk";
import userReducers from "./reducers/userReducers";
import uiReducers from "./reducers/uiReducers";

const initialState = {};

export const useSelector = createSelectorHook(initialState);

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducers,
  ui: uiReducers,
});

export default createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
