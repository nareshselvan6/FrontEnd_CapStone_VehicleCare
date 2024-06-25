import { createSlice } from "@reduxjs/toolkit";


const finalesettlementSlice=createSlice({
    name:"finalsettlement",
    initialState:{
        loading:false
    },
    reducers:{
        finalsettlementRequest(state,action){
            return{
                loading:true
            }
        },

        finalsettlementSuccess(state,action){
            return{
                loading:false,
                final:action.payload.final
            }
        },

        finalsettlementFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
        
    }
});

const {actions,reducer}=finalesettlementSlice;

export const{finalsettlementRequest,finalsettlementSuccess,finalsettlementFail}=actions;

export default reducer;