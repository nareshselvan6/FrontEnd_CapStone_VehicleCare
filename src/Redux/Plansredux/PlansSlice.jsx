import { createSlice } from "@reduxjs/toolkit";


const planSlice=createSlice({
    name:"plans",
    initialState:{
        loading:false
    },
    reducers:{
        plansRequest(state,action){
            return{
                loading:true
            }
        },

        plansSuccess(state,action){
            // console.log(action.payload);
            return{
                loading:false,
                plans:action.payload
                
            }
        },

        plansFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
        
    }
});

const { actions,reducer } =planSlice;

export const{plansRequest,plansSuccess,plansFail}=actions;

export default reducer;