import axios from "axios";
import {finalsettlementRequest,finalsettlementSuccess,finalsettlementFail} from "./FinalSettlement"

//! get

export const getfinalsettlement=async(dispatch)=>{
    try {
        dispatch(finalsettlementRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const{getfinalsettlement}= await axios.get("https://backend-capstone-vehiclecare.onrender.com/settlement/getsettlement",config)
        dispatch(finalsettlementSuccess(getfinalsettlement))
        
    } catch (error) {
        dispatch(finalsettlementFail(error.response.data.message));
    }
}


//! get by id
export const getfinalsettlementbyid=async(dispatch)=>{
    try {
        dispatch(finalsettlementRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{getfinalsettlementbyid}= await axios.get("https://backend-capstone-vehiclecare.onrender.com/settlement/getsettlementbyid/:id",config)
        dispatch(finalsettlementSuccess(getfinalsettlementbyid))

    } catch (error) {
        dispatch(finalsettlementFailin(error.response.data.message));
    }
}

//! post

export const postfinalsettlement=async(dispatch)=>{
    try {
        dispatch(finalsettlementRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{postfinalsettlement}= await axios.post("https://backend-capstone-vehiclecare.onrender.com/settlement/finalsettlement",config)
        dispatch(finalsettlementSuccess(postfinalsettlement))

    } catch (error) {
        dispatch(finalsettlementFail(error.response.data.message));
    }
}

//! delete 
export const deletefinalsettlement=async(dispatch)=>{
    try {
        dispatch(finalsettlementRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{deletefinalsettlement}= await axios.delete("https://backend-capstone-vehiclecare.onrender.com/settlement/deletesettlement/:id",config)
        dispatch(finalsettlementSuccess(deletefinalsettlement))
        
    } catch (error) {
        dispatch(finalsettlementFail(error.response.data.message));
    }
}


//! edit

export const editfinalsettlement=async(dispatch)=>{
    try {
        dispatch(finalsettlementRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const{editfinalsettlement}= await axios.put("https://backend-capstone-vehiclecare.onrender.com/settlement/editsettlement/:id",config)
        dispatch(finalsettlementSuccess(editfinalsettlement))
        
    } catch (error) {
        dispatch(finalsettlementFail(error.response.data.message));
    }
}