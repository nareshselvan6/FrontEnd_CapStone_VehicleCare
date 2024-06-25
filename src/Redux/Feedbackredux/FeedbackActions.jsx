import axios from "axios";
import {feedbackRequest,feedbackSuccess,feedbackFail} from "./FeedbackSlice"

//! get

export const getfeedback=async(dispatch)=>{
    try {
        dispatch(feedbackRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{getfeedback}= await axios.get("https://backend-capstone-vehiclecare.onrender.com/feedback/getfeedback",config)
        dispatch(feedbackSuccess(getfeedback))
        
    } catch (error) {
        dispatch(feedbackFail(error.response.data.message));
    }
}

//! get by id

export const getfeedbackbyid=async(dispatch)=>{
    try {
        dispatch(feedbackRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{getfeedbackbyid}= await axios.get("https://backend-capstone-vehiclecare.onrender.com/feedback/getfeedbackbyid/:id",config)
        dispatch(feedbackSuccess(getfeedbackbyid))

    } catch (error) {
        dispatch(feedbackFail(error.response.data.message));
    }
}

//! post

export const postfeedback=(value)=>async(dispatch)=>{
    try {
        dispatch(feedbackRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const postfeedback= await axios.post("https://backend-capstone-vehiclecare.onrender.com/feedback/createfeedback",value,config)
        console.log(postfeedback);
        dispatch(feedbackSuccess(postfeedback))

    } catch (error) {
        dispatch(feedbackFail(error.response.data.message));
    }
}

//! delete

export const deletefeedback=async(dispatch)=>{
    try {
        dispatch(feedbackRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const{deletefeedback}= await axios.delete("https://backend-capstone-vehiclecare.onrender.com/feedback/deletefeedback/:id",config)
        dispatch(feedbackSuccess(deletefeedback))
        
    } catch (error) {
        dispatch(feedbackFail(error.response.data.message));
    }
}

//! Afterfeedback Remainder
export const afterfeedbackremainder=(value)=>async(dispatch)=>{
    try {
        console.log(value.customername,value.email);

        dispatch(feedbackRequest());

        
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const afterfeedbackremainderdetails= await axios.put(`https://backend-capstone-vehiclecare.onrender.com/feedback/afterfeedbackremainder`,{email:value.email,customername:value.customername},config);
        console.log(afterfeedbackremainderdetails);
        dispatch(feedbackSuccess(afterfeedbackremainderdetails.data));
    } catch (error) {
        dispatch(feedbackFail(error.response.data.message));
    }
}
