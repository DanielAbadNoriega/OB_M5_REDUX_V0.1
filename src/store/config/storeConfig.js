import { createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from "../reducers/rootReducer";

// export store to actualize "root" in index.js
export const userStore = () =>{
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
} 
