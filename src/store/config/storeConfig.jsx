import { createStore } from "redux";
import { userReducer } from "../reducers/userReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

// export store to actualize "root" in index.js
export const userStore = createStore(userReducer, composeWithDevTools());
