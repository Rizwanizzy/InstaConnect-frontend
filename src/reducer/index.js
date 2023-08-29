import { combineReducers } from "redux";
import { registrationReducer ,activationReducer,loginReducer } from "./authentication";
import { errorReducer } from "./errorReducer/errorReducer";

const rootReducer = combineReducers({
    registrationReducer,
    activationReducer,
    loginReducer,
    errorReducer
});
export default rootReducer;