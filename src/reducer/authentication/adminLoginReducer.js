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
    console.log("Action Type:", type);
    console.log("Payload:", payload); 
    switch (type) {
      case adminLoginTypes.ADMIN_LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case adminLoginTypes.ADMIN_LOGIN_SUCCESS:
        localStorage.setItem('access', payload.access);
        localStorage.setItem('refresh', payload.refresh);
        const userRole =payload?.userRole || null;
        console.log("User Role in ADMIN_LOGIN_SUCCESS:",userRole);
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          userRole: userRole,
        };
      case adminLoginTypes.ADMIN_LOGIN_FAILURE:
      case logoutTypes.LOGOUT:
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        const errorUserRole=payload?.userRole || null;
        console.log("User Role in ADMIN_LOGIN_FAILURE/LOGOUT:", errorUserRole);
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          errMsg: payload,
          userRole:errorUserRole
        };
      default:
        return state;
    }
  };