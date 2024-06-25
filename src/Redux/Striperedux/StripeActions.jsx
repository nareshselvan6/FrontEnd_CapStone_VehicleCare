import axios from "axios"



export const vehiclepayment=async(dispatch)=>{

    const jwttoken=localStorage.getItem("jwt");
    console.log(jwttoken);

    const config = {
        headers: {
            Authorization: `Bearer ${jwttoken}`,
        },
    };
    

    const payment= await axios.post(`http://localhost:7708/booking/createbooking`,value,config)
    console.log(payment);


}