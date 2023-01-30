import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  // Receives state name : reducer that will control it
  filterState: filterReducer,
  userState: userReducer,
  // ...add more state and reducers to include them in the store
});
