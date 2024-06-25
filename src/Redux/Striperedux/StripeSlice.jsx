import { createSlice } from '@reduxjs/toolkit';


const StripeSlice = createSlice( {
    name:"stripe",
    initialState:{
        loading:false
    },
    reducers:{
        stripeRequest(state,action){
            return{
                loading:true
            }
        },

        stripeSuccess(state,action){
            // console.log(action.payload);
            return{
                loading:false,
                booking:action.payload
            }
        },

        stripeFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
        
    }
});

const {actions,reducer}=StripeSlice;

export const{stripeRequest,stripeSuccess,stripeFail}=actions;


export default reducer;