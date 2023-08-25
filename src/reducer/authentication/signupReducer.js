import { signupTypes } from "../../types/authentication";
const initialState = {
    isLoading:false,
    isSignup:false
}

export const signupReducer = (state=initialState,action) =>{
    const {type}=action
    switch(type){
        case signupTypes.SIGNUP_REQUEST:
            return{
                isLoading:true
            }
        case signupTypes.SIGNUP_SUCCESS:
            return{
                isLoading:false,
                isSignup:true
            }
        case signupTypes.SIGNUP_FAIL:
            return{
                isLoading:false,
                isSignup:false
            }
        default:
            return(state)
    }
}