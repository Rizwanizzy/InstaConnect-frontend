import { combineReducers } from "redux";
import { registrationReducer ,activationReducer,loginReducer,adminLoginReducer } from "./authentication";
import { errorReducer } from "./errorReducer/errorReducer";
import { userProfileReducer } from "./userSide/userProfileReducer";

const rootReducer = combineReducers({
    registrationReducer,
    activationReducer,
    loginReducer,
    errorReducer,
    adminLoginReducer,
    userProfileReducer,
});
export default rootReducer;