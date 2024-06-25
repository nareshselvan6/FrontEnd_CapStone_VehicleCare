import { createSlice } from "@reduxjs/toolkit";


const feedbackSlice=createSlice({
    name:"feedback",
    initialState:{
        loading:false
    },
    reducers:{
        feedbackRequest(state,action){
            return{
                loading:true
            }
        },

        feedbackSuccess(state,action){
            return{
                loading:false,
                feedback:action.payload.feedback
            }
        },

        feedbackFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
        
    }
});

const {actions,reducer}=feedbackSlice;

export const{feedbackRequest,feedbackSuccess,feedbackFail}=actions;

export default reducer;