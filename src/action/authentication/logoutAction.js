import { logoutTypes } from "../../types/authentication/logoutTypes"

export const logout = () => dispatch => {
dispatch({
    type: logoutTypes.LOGOUT
})
}