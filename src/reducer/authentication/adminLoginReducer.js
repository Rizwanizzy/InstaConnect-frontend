import { adminLoginTypes,logoutTypes } from "../../types/authentication";

const initialState = {
    isLoading: false,
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isLoggedIn: false,
    errMsg: null,
    userRole: null,
  };
  
  export const adminLoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case adminLoginTypes.ADMIN_LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case adminLoginTypes.ADMIN_LOGIN_SUCCESS:
        localStorage.setItem('access', payload.access);
        localStorage.setItem('refresh', payload.refresh);
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          userRole: payload.userRole,
        };
      case adminLoginTypes.ADMIN_LOGIN_FAILURE:
      case logoutTypes.LOGOUT:
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          errMsg: payload,
        };
      default:
        return state;
    }
  };