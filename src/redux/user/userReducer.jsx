import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_SIGNUP_ERROR, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, SEARCH } from "./userType"

const initialState={
       isAuth:false,
       error:false,
       login_user:{},
       search_results:[],
       login_following:[]
}

 const UserReducer=(state=initialState,{type,payload})=>{
     switch(type){
        case GET_SIGNUP_REQUEST:
            return{
              ...state,
                isAuth:false
            }
        case GET_SIGNUP_SUCCESS:
            return{
              ...state,
                isAuth:true,
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
                isAuth:true,
                user:payload
            }
        case SEARCH :
          return {
            ...state,
              search_results:payload
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
export default UserReducer