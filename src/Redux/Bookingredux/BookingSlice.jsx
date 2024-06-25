import { createSlice } from "@reduxjs/toolkit";


const bookingSlice=createSlice({
    name:"Bookings",
    initialState:{
        loading:false
    },
    reducers:{
        bookingRequest(state,action){
            return{
                loading:true
            }
        },

        bookingSuccess(state,action){
            // console.log(action.payload);
            return{
                loading:false,
                booking:action.payload
            }
        },

        bookingFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        },

        checkoutRequest(state,action){
            return{
                loading:true
            }
        },

        checkoutSuccess(state,action){
            console.log(action.payload,"adsadfa");
            return{
                loading:false,
                checkout:action.payload
            }
        },

        checkoutFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
        
    }
});

const {actions,reducer}=bookingSlice;

export const{bookingRequest,bookingSuccess,bookingFail,checkoutRequest,checkoutSuccess,checkoutFail}=actions;

export default reducer;