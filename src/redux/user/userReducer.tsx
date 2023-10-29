import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_SIGNUP_ERROR, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS } from "./userType"

const initialState={
       isAuth:false
}

export const UserReducer=(state=initialState,{type}:any)=>{
     switch(type){
        case GET_SIGNUP_REQUEST:
            return{
              ...state,
                isAuth:false
            }
        case GET_SIGNUP_SUCCESS:
            return{
              ...state,
                isAuth:true
            }
        case GET_SIGNUP_ERROR:
            return{
              ...state,
                isAuth:false
            }
        case GET_LOGIN_REQUEST:
            return{
              ...state,
                isAuth:false
            }
        case GET_LOGIN_SUCCESS:
            return{
              ...state,
                isAuth:true
            }
        case GET_LOGIN_ERROR:
            return{
              ...state,
                isAuth:false
            }
        default:
            return state
     }
}