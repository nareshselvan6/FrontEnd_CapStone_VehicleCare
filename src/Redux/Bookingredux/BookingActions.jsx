import axios from "axios";
import {bookingRequest,bookingSuccess,bookingFail, checkoutRequest, checkoutSuccess} from "./BookingSlice"


//! get

export const getbookings=async(dispatch)=>{
    try {
        dispatch(bookingRequest());
                    //jwt token configuration
                    const jwttoken=localStorage.getItem("jwt");
                    console.log(jwttoken);
        
                    const config = {
                        headers: {
                            Authorization: `Bearer ${jwttoken}`,
                        },
                    };
        const getbookings= await axios.get("https://backend-capstone-vehiclecare.onrender.com/booking/allbookings",config)
        console.log(getbookings);
        dispatch(bookingSuccess(getbookings.data));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}

//! get by vehiclenumber

export const getpastservice=(value)=>async(dispatch)=>{
    try {
        console.log(value.vehiclenumber);
        dispatch(bookingRequest());
                    //jwt token configuration
            const jwttoken=localStorage.getItem("jwt");
            console.log(jwttoken);

            const config = {
                headers: {
                    Authorization: `Bearer ${jwttoken}`,
                },
            };
        const getpastservice= await axios.get(`https://backend-capstone-vehiclecare.onrender.com/booking/getbyvehiclenumber/${value.vehiclenumber}`,config);
        console.log(getpastservice);
        dispatch(bookingSuccess(getpastservice.data));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}

//!  create

export const postbookings=(value)=>async(dispatch)=>{
    try {
        
        dispatch(bookingRequest());

            //jwt token configuration
            const jwttoken=localStorage.getItem("jwt");
            console.log(jwttoken);

            const config = {
                headers: {
                    Authorization: `Bearer ${jwttoken}`,
                },
            };
            
        const postbookings= await axios.post(`https://backend-capstone-vehiclecare.onrender.com/booking/createbooking`,value,config)
        console.log(postbookings);
        dispatch(bookingSuccess(postbookings.data));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}

//! get by vehiclenoandbookeddate

export const getbookingsvnobdt=(value)=>async(dispatch)=>{
    try {
        dispatch(bookingRequest());
            //jwt token configuration
          const jwttoken=localStorage.getItem("jwt");

        const config = {
            headers: {
                Authorization: `Bearer ${jwttoken}`,
            },
        };
console.log(config);

        const {vehicleno,bookeddate}=value
        console.log({value});
        console.log(vehicleno,bookeddate,"bookingactions");

        const getbookingsvnobdt = await axios.get(`https://backend-capstone-vehiclecare.onrender.com/booking/getbooking/${vehicleno}/${bookeddate}`,config);
        
        console.log(getbookingsvnobdt.data);
        dispatch(bookingSuccess(getbookingsvnobdt.data));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}

//! put

export const editbookings=async(dispatch)=>{
    try {
        dispatch(bookingRequest());
           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };

        const editbookings = await axios.put("https://backend-capstone-vehiclecare.onrender.com/booking/editbooking/:id",config)
      
        dispatch(bookingSuccess(editbookings.data));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}

//! delete

export const deletebookings=async(dispatch)=>{
    try {
        dispatch(bookingRequest());

           //jwt token configuration
           const jwttoken=localStorage.getItem("jwt");
           console.log(jwttoken);

           const config = {
               headers: {
                   Authorization: `Bearer ${jwttoken}`,
               },
           };
        const deletebookings= await axios.delete("https://backend-capstone-vehiclecare.onrender.com/booking/deletebooking/:id",config)
        dispatch(bookingSuccess(true,deletebookings));
    } catch (error) {
        dispatch(bookingFail(error.response.data.message));
    }
}


//! Stripe

export const postpayment=(value)=>async(dispatch)=>{
    try {
        
        dispatch(checkoutRequest());

            //jwt token configuration
            const jwttoken=localStorage.getItem("jwt");

            const config = {
                headers: {
                    Authorization: `Bearer ${jwttoken}`,
                },
            };
            
        const postcheckouts= await axios.post(`https://backend-capstone-vehiclecare.onrender.com/payment/stripepayment`,value,config)
        console.log(postcheckouts);
        dispatch(checkoutSuccess(postcheckouts.data));
    } catch (error) {
        dispatch(checkoutFail(error.response.data.message));
    }
}