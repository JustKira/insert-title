import { combineReducers } from "redux";
import authReducer from "./authreducer";
import usereducer from "./userreducer";

const allreducers = combineReducers({
    user : usereducer,
    auth : authReducer
})