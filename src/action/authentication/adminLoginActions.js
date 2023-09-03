import { adminLoginTypes } from '../../types/authentication/adminLoginTypes';
import { GET_ERRORS } from '../../types/error';
import axios from 'axios';

export const adminLogin = (email, password) => async dispatch => {
    console.log("adminLogin function is called");
    dispatch({
        type: adminLoginTypes.ADMIN_LOGIN_REQUEST
    });

    const configuration = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const data = JSON.stringify({ email, password });
    console.log("before sending api request",data)
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/admin/login/`, data, configuration);
        dispatch({
            type: adminLoginTypes.ADMIN_LOGIN_SUCCESS,
            payload: {
                ...res.data,
                userRole: res.data.userRole
            }
        });
    } catch (err) {
        console.log(err.response.data);
        const error = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: adminLoginTypes.ADMIN_LOGIN_FAILURE,
        });
        if (err.response.status === 404){
            dispatch({
                type:GET_ERRORS,
                payload:{msg:"User is not registered",status:404}
            })
        }else{
            dispatch({
                type: GET_ERRORS,
                payload: error
            });
        }
        
    }
};