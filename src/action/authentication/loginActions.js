import { loginTypes } from '../../types/authentication'
import { GET_ERRORS } from '../../types/error'
import axios from 'axios'

export const login = (email, password) => async dispatch => {
dispatch({
    type: loginTypes.LOGIN_REQUEST
})
const configuration = {
    headers : {
        'Content-Type':'application/json'
    }
}
const data = JSON.stringify({email,password})
try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, data, configuration )
    const payload={
        ...res.data
    }
    console.log('payload',payload)
    dispatch({
        type : loginTypes.LOGIN_SUCCESS,
        payload,
    })
}
catch(err){
    console.log(err.response.data)
    const error = {
        msg : err.response.data, 
        status: err.response.status 
    }
    dispatch({
        type : loginTypes.LOGIN_FAILURE,
    })
    dispatch({
        type: GET_ERRORS,
        payload: error
    })
}
}