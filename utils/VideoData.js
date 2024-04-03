import { createSlice } from "@reduxjs/toolkit"
const videoData=createSlice({
    name:"dataslice",
    initialState:{
        items:[]
    },
    reducers:{
        uploadVideos:(state,action)=>{
            state.items=state.items.concat(action.payload)
        }
    }
})
export const{uploadVideos}=videoData.actions
export default videoData.reducer