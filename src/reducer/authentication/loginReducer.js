import {loginTypes, googleAuthTypes, facebookAuthTypes, logoutTypes} from "../../types/authentication/";

const initialState = {
    isLoading : false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isLoggedIn : false,
    errMsg:null,
}
export const loginReducer = (state = initialState, action) => {
const {type, payload} = action
switch (type) {
    case loginTypes.LOGIN_REQUEST:
    case googleAuthTypes.GOOGLE_AUTH_REQUEST:
    case facebookAuthTypes.FACEBOOK_AUTH_REQUEST:
        return {
            ...state,
            isLoading:true,
        }
    case loginTypes.LOGIN_SUCCESS:
        localStorage.setItem('access', payload.access)
        localStorage.setItem('refresh', payload.refresh)
        return {
            ...state,
            isLoading:false,
            isLoggedIn:true,
        }
    case googleAuthTypes.GOOGLE_AUTH_SUCCESS:
        localStorage.setItem('access', payload.access_token)
        localStorage.setItem('refresh',payload.refresh_token)
        return {
            ...state,
            isLoading:false,
            isLoggedIn:true, 
        }
    case facebookAuthTypes.FACEBOOK_AUTH_SUCCESS:
        localStorage.setItem('access', payload.access_token)
        localStorage.setItem('refresh',payload.refresh_token)
        return {
                ...state,
                isLoading:false,
                isLoggedIn:true, 
                }
    
    case loginTypes.LOGIN_FAILURE:
    case googleAuthTypes.GOOGLE_AUTH_FAIL:
    case facebookAuthTypes.FACEBOOK_AUTH_FAIL:
    case logoutTypes.LOGOUT:
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        return {
            ...state,
            isLoading:false,
            isLoggedIn:false,
            errMsg:payload,
    }
    default:
       return state
}
}