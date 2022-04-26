// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { usersReducer } from "./reducers/users";

// const rootReducers = combineReducers({
//     users: usersReducer
// })

// export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer } from './reducers/users';
import { legacy_createStore as createStore} from 'redux'

const rootReducers = combineReducers({
  users: usersReducer
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
