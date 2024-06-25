import axios from "axios"



export const vehiclepayment=async(dispatch)=>{

    const jwttoken=localStorage.getItem("jwt");
    console.log(jwttoken);

    const config = {
        headers: {
            Authorization: `Bearer ${jwttoken}`,
        },
    };
    

    const payment= await axios.post(`https://backend-capstone-vehiclecare.onrender.com/booking/createbooking`,value,config)
    console.log(payment);


}