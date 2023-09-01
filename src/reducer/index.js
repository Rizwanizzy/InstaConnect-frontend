import { combineReducers } from "redux";
import { registrationReducer ,activationReducer,loginReducer,adminLoginReducer } from "./authentication";
import { errorReducer } from "./errorReducer/errorReducer";

const rootReducer = combineReducers({
    registrationReducer,
    activationReducer,
    loginReducer,
    errorReducer,
    adminLoginReducer,
});
export default rootReducer;