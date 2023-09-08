import { userProfileTypes } from "../../types/userSide/userProfileTypes"

const initialState={
    userData:null,
    error:null,
}

export const userProfileReducer =(state =initialState,action) =>{
    switch(action.type){
        case userProfileTypes.FETCH_USER_DATA_SUCCESS:
            return{
                ...state,
                userData:action.payload,
                error:null
            }
        case userProfileTypes.FETCH_USER_DATA_ERROR:
            return{
                ...state,
                userData:{},
                error:action.payload,
            }
        default:
            return state
    }
}