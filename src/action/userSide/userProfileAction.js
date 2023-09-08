import axios from "axios";
import { userProfileTypes } from "../../types/userSide/userProfileTypes";


export const fetchUserDataSuccess = (userData) =>{
    return {
        type : userProfileTypes.FETCH_USER_DATA_SUCCESS,
        payload : userData,
    }
}

export const fetchUserDataError = (error) =>{
    return {
        type : userProfileTypes.FETCH_USER_DATA_ERROR,
        payload : error,
    }
}

export const fetchUserData = () =>{
    return async (dispatch) =>{
        try{
            dispatch({type:userProfileTypes.FETCH_USER_DATA_REQUEST})

            const response = await axios.get('{process.env.REACT_APP_API_URL}/api/user-profile/')
            const userData = response.data

            dispatch(fetchUserDataSuccess(userData))

        }catch(error){
            dispatch(fetchUserDataError(error))
        }
    }
}