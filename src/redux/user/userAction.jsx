import axios from "axios"
import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_SIGNUP_ERROR, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, SIGN_OUT } from "./userType"
import { Alert, AlertIcon } from "@chakra-ui/react"

 export const SigningUp=(data)=>async (dispatch)=>{

    dispatch({
        type:GET_SIGNUP_REQUEST
    })
    try{
        const res=await axios.post(`${process.env.PORT}/users/signup`,data)
        dispatch({
            type:GET_SIGNUP_SUCCESS
        })
        {<Alert status='success'>
        <AlertIcon />
        User Registered Successfully
      </Alert>}
    }
    catch(err){
        dispatch({
            type:GET_SIGNUP_ERROR
        })
    }
}

export const SigningIn=(data)=>async (dispatch)=>{
    dispatch({
        type:GET_LOGIN_REQUEST
    })
    try{
        const res=await axios.post(`${process.env.PORT}/users/login`,data)
        dispatch({
            type:GET_LOGIN_SUCCESS
        })
        {<Alert status='success'>
        <AlertIcon />
        User Logged In Successfully
      </Alert>}
    }
    catch(err){
        dispatch({
            type:GET_LOGIN_ERROR
        })
    }
}

export const SignOut=(dispatch)=>{
   dispatch({type:SIGN_OUT})
}