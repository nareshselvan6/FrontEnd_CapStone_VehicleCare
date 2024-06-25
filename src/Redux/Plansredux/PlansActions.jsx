import axios from "axios";
import { plansRequest , plansSuccess , plansFail } from "./PlansSlice"



//jwt********************

// export const getPlans=()=>async(dispatch)=>{
//     try {
//         dispatch(plansRequest());

//         const jwttoken=localStorage.getItem("jwt");


//         const config = {
//             headers: {
//                 Authorization: `Bearer ${jwttoken}`,
//             },
//         };



//         const getplan = await axios.get("http://localhost:7708/plans/getplans");
//         dispatch(plansSuccess(getplan.data));
        
//     } catch (error) {
//         dispatch(plansFail(error.response.data.message));
//     }
// }



//****************** */

//! get

export const getPlans=async(dispatch)=>{
    try {
        dispatch(plansRequest());

        //jwt token configuration
          const jwttoken=localStorage.getItem("jwt");

        const config = {
            headers: {
                Authorization: `Bearer ${jwttoken}`,
            },
        };


        const getplan = await axios.get("https://backend-capstone-vehiclecare.onrender.com/plans/getplans",config);

        dispatch(plansSuccess(getplan.data));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}


//! get by name

export const getPlansbyname=(value)=>async(dispatch)=>{
    try {
        dispatch(plansRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const getplanbyname = await axios.get(`https://backend-capstone-vehiclecare.onrender.com/plans/getplansbyname/${value}`,config);
        dispatch(plansSuccess(getplanbyname.data));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}

//! get by price

export const getplansbyprice=(value)=>async(dispatch)=>{
    try {
        dispatch(plansRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const getplanbyname = await axios.get(`https://backend-capstone-vehiclecare.onrender.com/plans/getplansbyprice/${String(value)}`,config);
        dispatch(plansSuccess(getplanbyname.data));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}


//! post

export const postPlans=async(dispatch)=>{
    try {
        dispatch(plansRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const postPlans = await axios.post("https://backend-capstone-vehiclecare.onrender.com/plans/createplan",config);
        dispatch(plansSuccess(true,postPlans));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}

//! edit

export const editPlans=async(dispatch)=>{
    try {
        dispatch(plansRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const editPlans = await axios.put("https://backend-capstone-vehiclecare.onrender.com/plans/updateplan/:id",config);
        dispatch(plansSuccess(true,editPlans));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}

//! delete

export const deletePlans=async(dispatch)=>{
    try {
        dispatch(plansRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const deletePlans = await axios.delete("https://backend-capstone-vehiclecare.onrender.com/plans/deleteplan/:id",config);
        dispatch(plansSuccess(true,deletePlans));
        
    } catch (error) {
        dispatch(plansFail(error.response.data.message));
    }
}