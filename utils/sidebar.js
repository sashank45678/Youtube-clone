import { createSlice } from "@reduxjs/toolkit";

const sidebar=createSlice({
    name:"sidebarreducer",
    initialState:{
        showsideBar:true
    },
    reducers:{
        togglesideBar:(state,action)=>{
            state.showsideBar=!state.showsideBar
        },
        hidesideBar:(state)=>{
            state.showsideBar=false
        }
    }
})
export const{togglesideBar,hidesideBar}=sidebar.actions
export default sidebar.reducer