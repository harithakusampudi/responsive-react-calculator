import { combineReducers } from "redux";
import calculations from "./calculations.duck";

const appReducer = combineReducers({
  calculations
});

export default appReducer;
