import axios from "axios";
import {authenticationRequest,authenticationSuccess,authenticationFail} from "./AuthenticationSlice";


//! register(Post)

export const register=(value)=>async(dispatch)=>{
    try {
        console.log(value);
        dispatch(authenticationRequest());
        const registerdetails= await axios.post(`http://localhost:7708/logincrediential/register-user`,value);
        console.log(registerdetails);
        dispatch(authenticationSuccess(registerdetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}

//! login(Put)

export const login=(value)=>async(dispatch)=>{
    try {
        console.log(value);
        dispatch(authenticationRequest());
        const logindetails= await axios.put(`http://localhost:7708/logincrediential/login-user`,value);
        console.log(logindetails);
        dispatch(authenticationSuccess(logindetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}


//! forgotpassword(Put)

export const forgotpassword=(value)=>async(dispatch)=>{
    try {
        console.log(value);
        dispatch(authenticationRequest());
        const forgotpswddetails= await axios.put(`http://localhost:7708/logincrediential/forgetpassword`,value);
        console.log(forgotpswddetails);
        dispatch(authenticationSuccess(forgotpswddetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}


//! resetpassword(Put)

export const resetpassword=(value)=>async(dispatch)=>{
    try {
        const{values,id,token}=value
        console.log(values.newPassword,id,token,"resetpassword");
        dispatch(authenticationRequest());
        const resetpswddetails= await axios.put(`http://localhost:7708/logincrediential/resetpassword/${id}/${token}`,values.newPassword);
        console.log(resetpswddetails);
        dispatch(authenticationSuccess(forgotpswddetails.data));
    } catch (error) {
        dispatch(authenticationFail(error.response.data.message));
    }
}