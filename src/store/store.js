import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import chatBotReducer from "../reducers/chatBotReducer";
import tabsReducer from "../reducers/tabsReducer";
import codeReducer from "../reducers/codeReducer";

import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ chatBotReducer, tabsReducer, codeReducer }),
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
//   store.subscribe(()=>{
//   console.log('Store Updated::',store.getState());
//   });
