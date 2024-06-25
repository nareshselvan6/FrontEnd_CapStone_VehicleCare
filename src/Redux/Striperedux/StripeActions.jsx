import axios from "axios"



export const vehiclepayment=async(dispatch)=>{

    const jwttoken=localStorage.getItem("jwt");

    const config = {
        headers: {
            Authorization: `Bearer ${jwttoken}`,
        },
    };
    

    const payment= await axios.post(`https://backend-capstone-vehiclecare.onrender.com/booking/createbooking`,value,config)


}